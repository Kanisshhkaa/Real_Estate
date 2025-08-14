/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateProfile(){
  const [name,setname]=useState("")
  const[contact,setcontact]=useState("")
  const[gender,setgender]=useState("")

  const[loading,setLoading]=useState(false)
  const[profile,setprofile]=useState([])
  const[prevprofile,setprevprofile]=useState([])
  const[profilename,setprofilename]=useState("")

  const nav = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const[data,setdata]=useState([]);

const param = useParams()
const id = param.id

useEffect(()=>{
    let data = {
        _id:id
    }
    console.log("ID is", data)
    ApiServices.getSingleAdvisor(data)
    .then((res)=>{
        setname(res.data.data.name)
        setcontact(res.data.data.contact)
        setgender(res.data.data.gender)
        setprevprofile(res.data.data.advisorImage)
    })
},[id])

  const changeImage=(e)=>{
    setprofile(e.target.files[0])
    setprofilename(e.target.value)
}
const updateData=(e)=>{
    e.preventDefault();
    setLoading(true)
    let data = new FormData()
    data.append("name",name)
    data.append("contact",contact)
    data.append("gender",gender)
    if(!!profilename){
        data.append("advisorImage",profile)
    }
    data.append("_id",id)
    


     ApiServices.updateAdvisor(data)
     .then((res)=>{
       console.log("data is:",res.data.data)
         toast.success(res.data.message)
         setTimeout(() => {
           setLoading(false);
           nav("/advisor/profile");
         }, 2000);
     })
      .catch((err)=>{
          toast.error(err.message)
          console.log(err.errors)
      })
  }
    return(
        <>
  {loading?(
     <div
     style={{
       display: "flex",
       height: "100vh",
       justifyContent: "center",
       alignItems: "center",
     }}
   >
     <DotLoader color="#ffc107" loading={true} size={80} />
 </div>
  ):(
    <>
    {/*Contact content*/}
  <div className="contact-content-header py-5 mb-3" style={{marginTop:'50px'}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="contact-content-holder text-center py-2 mb-4">
          <h1 className="fs-3 fw-strong">Update Profile</h1>
          
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-6">
          <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
          

                
                <label>Enter Advsior Name:</label>
                 <input required className="form-control" type="text" value={name} onChange={(e)=>{setname(e.target.value)}} /> <br /> 
                
                
                 <label>Previous Profile Image:</label>
                 <img className="me-2 ms-2" src={BASE_IMAGE_URL + prevprofile} height={'150px'} alt="" /> <br />

              <label>Enter Profile Image:</label>
              <input type="file" className="form-control" onChange={changeImage} /> <br />



              <label>Enter contact:</label>
              <input required className="form-control" type="text" value={contact} onChange={(e)=>{setcontact(e.target.value)}} /> <br /> 

              <label>Enter gender:</label>
              <input required className="form-control" type="text" value={gender} onChange={(e)=>{setgender(e.target.value)}} /> <br /> 


<br /> 

              <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Save</button>
          </form>
      </div>
    </div>
  </div>
</div>
    </>
  )}
  
</>

    )
}