import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link } from "react-router-dom"

export default function Profile(){
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[contact,setcontact]=useState("")
    const[gender,setgender]=useState("")
    const[advisorImage,setadvisorImage]=useState([])

    const[id,setid]=useState("")

    useEffect(()=>{
        let data = {
            _id:sessionStorage.getItem("advisorId")
        }
        ApiServices.getSingleAdvisor(data)
        .then((res)=>{
            setname(res.data.data.name)
            setemail(res.data.data.email)
            setcontact(res.data.data.contact)
            setgender(res.data.data.gender)
            setadvisorImage(res.data.data.advisorImage)
            setid(res.data.data._id)
        })
    })
    return(
        <>
        <div className="container" style={{marginTop:'170px'}}>
            <h3 style={{display:"flex",justifyContent:'center',fontStyle:'italic',marginBottom:'25px'}}>My Profile</h3>
            <div className="row">
                <div className="col-md-6 col-sm-12 mx-auto">
                <div className="card mx-auto" style={{ width: "25rem" }}>
                     <img className="card-img-top rounded-circle img-fluid mx-auto" style={{height:'200px',width:'200px'}} src={BASE_IMAGE_URL + advisorImage } alt="Card image cap" />
                     <div className="card-body">
                       <h5 className="card-title text-left">Name : {name}</h5>
                       <h5 className="card-title text-left">Email : {email}</h5>
                       <h5 className="card-title text-left">Contact : {contact}</h5>
                       <h5 className="card-title text-left">Gender : {gender}</h5>
                    
                       <Link to={'/advisor/updateprofile/' + id}>
                       <button className="btn btn-success offset-4 mt-2">
                         Update Profile
                       </button>
                       </Link>
                     </div>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}