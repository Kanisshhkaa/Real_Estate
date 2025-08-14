/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateCategory(){
    const [categoryName,setcategoryName]=useState("")
    const[categoryImage,setcategoryImage]=useState({})   //curly braces are used bcos data is coming from backend in json form
    const[imageName,setimageName]=useState("")
    const[previousImage,setpreviousImage]=useState([])
    const[description,setdescription]=useState("")
    // eslint-disable-next-line no-unused-vars
    const[loadimg,setLoading]=useState(true)
    const[spinnerLoading,setSpinnerLoading]=useState(false)
    const nav = useNavigate()
    const param = useParams()
    const id = param.id
    
    useEffect(()=>{
        let data={
            _id:id
        }
        console.log(data)
        ApiServices.getSingleData(data)
        .then((res)=>{
            setcategoryName(res.data.data.categoryName)
            setdescription(res.data.data.description)
            setpreviousImage(res.data.data.categoryImage)
        })
    },[id])

    const changeImage=(e)=>{
        setcategoryImage(e.target.files[0])
        setimageName(e.target.value)
    }
    const updateData=(e)=>{
        e.preventDefault();
        let data = new FormData()
        setSpinnerLoading(true)
        data.append("categoryName",categoryName)
        if(!!imageName){
            data.append("categoryImage",categoryImage)
        }
        data.append("_id",id)
        data.append("description",description)

        console.log("Submitting data :", Object.fromEntries(data))

        ApiServices.updateCategory(data)
        .then((res)=>{
            toast.success(res.data.message)
            console.log(res.data.error)
            setTimeout(() => {
              setLoading(false);
              setSpinnerLoading(false)
              nav("/admin/ManageCategory");
            }, 2000);
        })
        .catch((err)=>{
            toast.error(err.message)
            console.log(err.errors)
        })
    }

    return(
        <>
  {
    spinnerLoading?(
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
            <h1 className="fs-3 mt-5 fw-strong">Update Categories</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                <label>Enter Category Name:</label>
                <input className="form-control" 
                type="text" value={categoryName} onChange={(e)=>{setcategoryName(e.target.value)}} required /> <br />

                <div className="col-sm-6">
                    <div className="form-group">
                        <label>Previous Image:</label>
                        <img src={BASE_IMAGE_URL + previousImage}  height={'200PX'} alt="" />
                    </div>
                </div>

                <label>Enter Category Image:</label>
                <input className="form-control" type="file" onChange={changeImage} /> <br /> 
                <label>Enter Description:</label>
                <input className="form-control" required type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} /> <br />
                <button type="submit" className="btn btn-warning offset-md-3 w-50" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Save</button>
            </form>
        </div>
      </div>
    </div>
  </div>
      </>
    )
  }
  
</>

    )
}