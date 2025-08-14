import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"

export default function ManageCustomers(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        ApiServices.getCustomers()
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })

    const updateStatus=(id,status,userId)=>{
        let data={
            _id:id,
            status:status
        }
        ApiServices.UpdateCustomers(data)
        .then((res)=>{
            toast.success(res.data.message)
        })
        
        let data1 = {
            _id:userId,
            status:status
        }
        ApiServices.updateUserStatus(data1)
        .then((res)=>{
            console.log(res.data.message)
        })

        
    }

    return(
        <>
        <div className="container" style={{marginTop:'120px'}}>
            <div className="row">
                <div className="col">
                    
                <table className="table table-responsive">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
   
    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                
                <td>{el.name}</td>
                
                <td>{el.email}</td>
                <td>{el.contact}</td>
                
                <td>{el.status}</td>
                

                <td>
              {
                el.status == "Accepted"?(
                  <>
                  <button onClick={()=>{updateStatus(el._id,"Rejected",el.userId)}} className="btn btn-danger">Rejected</button>
                  </>
                ):el.status == "Rejected"?(
                  <button onClick={()=>{updateStatus(el._id,"Accepted",el.userId)}} className="btn btn-success">Accepted</button>
                ):(
                  <>

                  </>
                )
              }
              </td>
            </tr>
    
        ))
    }
  </tbody>
</table>
                </div>
            </div>
        </div>
        </>
    )
}