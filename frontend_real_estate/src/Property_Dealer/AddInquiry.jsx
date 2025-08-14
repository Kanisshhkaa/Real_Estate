import { toast } from "react-toastify"
import ApiServices from "../ApiServices/ApiServices"
import { useState } from "react"
import { DotLoader } from "react-spinners"

export default function AddInquiry(){
     const[name,setname]=useState("")
      const[email,setemail]=useState("")
      const[subject,setsubject]=useState("")
      const[message,setmessage]=useState("")
      const[loading,setLoading]=useState(false)
      const addData=(e)=>{
        e.preventDefault()
        setLoading(true)
        let data = {
          name:name,
          email:email,
          subject:subject,
          message:message
        }
        ApiServices.addQuery(data)
        .then((res)=>{
          if(res.data.success === true){
            toast.success(res.data.message)
            
            setTimeout(()=>{
                setname('')
                setemail('')
                setsubject('')
                setmessage('')
                setLoading(false)
            },3000)
          }
          else{
            toast.error(res.data.message)
            setLoading(false)
          }
        })
        .catch((err)=>{
          toast.error(err.message)
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
            <div className="container" style={{marginTop:'150px'}}>
            <div className="row">
                <h1 style={{marginLeft:'450px'}}>Add Inquiry</h1>
                <div className="col-md-8 mx-auto">
                    <form onSubmit={addData} style={{padding:'20px 20px'}}>
                        <div className="row">
                           <div className="col-12">
                            <div className="name">
                                <label>Enter Name:</label>
                                <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" required />
                            </div>
                            <div className="email">
                                <label>Enter Email:</label>
                                <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" required />
                            </div>
                            <div className="sub">
                                <label>Enter Subject:</label>
                                <input type="text" value={subject} onChange={(e)=>{setsubject(e.target.value)}} className="form-control" required />
                            </div>
                            <div className="msg">
                                <label>Enter Message:</label>
                                <textarea required className="form-control" value={message} onChange={(e)=>{setmessage(e.target.value)}} rows={5} cols={10}></textarea>
                            </div>

                            <div className="btn mt-3 offset-5">
                                <button type="submit" className="btn btn-success">Save</button>
                            </div>
                           </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )}
        </>
    )
}