import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateCity(){
    const [cityName,setcityName]=useState("")
    // eslint-disable-next-line no-unused-vars
    const[loading,setLoading]=useState(true)
    const[spinnerLoading,setspinnerLoading]=useState(false)
    const nav = useNavigate()
    const param = useParams()
    const id = param.id
    
    useEffect(()=>{
        let data={
            _id:id
        }
        console.log(data)
        ApiServices.getSingleCity(data)
        .then((res)=>{
            setcityName(res.data.data.cityName)

        })
    },[id])

    const updateData=(e)=>{
        e.preventDefault();
        setspinnerLoading(true)
        let data = {
            _id:id,
            cityName:cityName
        }

        ApiServices.updateCity(data)
        .then((res)=>{
            toast.success(res.data.message)
            console.log(res.data.error)
            setTimeout(() => {
              setLoading(false);
              setspinnerLoading(false)
              nav("/admin/ManageCity");
            }, 3000);
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
            <h1 className="fs-3 mt-5 fw-strong">Update City</h1>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
            <form onSubmit={updateData} style={{backgroundColor:'#8fbc8f',padding:'30px 30px'}} className="rounded-2">
                <label>Enter City Name:</label>
                <input className="form-control" required
                type="text" value={cityName} onChange={(e)=>{setcityName(e.target.value)}} /> <br />


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