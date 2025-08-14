import { useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddCity(){
    const[cityName,setcityName]=useState("")
    const[loading,setLoading]=useState(false)
    const nav = useNavigate()
    const addData=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data = {
        cityName:cityName
        }

        ApiServices.addCity(data)
        .then((res)=>{
            if(res.data.success===true){
                toast.success(res.data.message)
            setTimeout(()=>{
                nav('/admin/manageCity')
                setLoading(false)
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
            setLoading(false)
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
                <h1 style={{marginLeft:'450px'}}>Add City</h1>
                <div className="col-12 mx-auto">
                    <form onSubmit={addData} style={{padding:'20px 20px'}}>
                        <div className="row">
                            <div className="col-12">
                            <div className="name mt-3">
                            <label>Enter cityName:</label>
                            <input type="text" className="form-control" value={cityName} required onChange={(e)=>{setcityName(e.target.value)}} />
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