import { useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddCatgeory(){
    const[categoryName,setCategoryName]=useState("")
    const[categoryImage,setcategoryImage]=useState([])
    // eslint-disable-next-line no-unused-vars
    const[imageName,setImageName]=useState("")
    const[description,setdescription]=useState("")
    const[loading,setloading]=useState(false)
    const nav = useNavigate()
    const changeImage=(e)=>{
        setcategoryImage(e.target.files[0])
        setImageName(e.target.value)
    }

    const addData=(e)=>{
        e.preventDefault()
        setloading(true)
        let data = new FormData()
        data.append("categoryName",categoryName)
        data.append("categoryImage",categoryImage)
        data.append("description",description)

        ApiServices.addCategories(data)
        .then((res)=>{
            if(res.data.success===true){
                toast.success(res.data.message)
            setTimeout(()=>{
                nav('/admin/manageCategory')
                setloading(false)
            },2000)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err)=>{
            toast.error(err.message)
        })
        setTimeout(()=>{
            setloading(false)
        },2000)
    }

    return(
        <>
        {
            loading?(
                <>
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
                </>
            ):(
                <>
                <div className="container" style={{marginTop:'150px'}}>
            <div className="row">
                <h1 style={{marginLeft:'450px'}}>Add Category</h1>
                <div className="col-12 mx-auto">
                    <form onSubmit={addData} style={{padding:'20px 20px'}}>
                        <div className="row">
                            <div className="col-12">
                            <div className="name mt-3">
                            <label>Enter CategoryName:</label>
                            <input type="text" className="form-control" value={categoryName} onChange={(e)=>{setCategoryName(e.target.value)}} required />
                        </div>

                        <div className="image mt-3">
                            <label>Enter Category Image:</label>
                            <input type="file" onChange={changeImage} className="form-control" required />
                        </div>

                        <div className="des mt-3">
                            <label>Enter Description:</label>
                            <input type="text" className="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}} required/>
                        </div>
                        <div className="button mt-4">
                            <button type="submit" className="btn btn-success offset-5">Save</button>
                        </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                </>
            )
        }
        </>
    )
}