import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"

export default function ManageBooking(){
    const[data,setdata]=useState([])
    useEffect(()=>{
      let data ={
        advisorId:sessionStorage.getItem("advisorId")
      }
        ApiServices.getBooking(data)
        .then((res)=>{
            setdata(res.data.data)
            console.log(res.data.data)
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
        ApiServices.updateBooking(data)
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
        <h3 style={{fontStyle:'italic',marginTop:'170px',marginBottom:'50px'}}>~ Manage Pending Bookings</h3>
            <div className="row">
                <div className="col">
                    
                <table className="table table-responsive">
  <thead>
    <tr>
      
      <th scope="col">Property Name</th>
      <th scope="col">Property Image</th>
      <th scope="col">Area</th>
      <th scope="col">Rooms</th>
      <th scope="col">Bath</th>
      <th scope="col">Garage</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
   
    </tr>
  </thead>
  <tbody>
    {
        data.map((el)=>(
            el.status=="Pending"?(
              <tr>
                
                <td>{el.propertyId?.name}</td>
                <td>
                <img className="card-img-top" src={BASE_IMAGE_URL+ el.propertyId?.propertyImage } alt="Card image cap" style={{height:'200px'}} />
                    </td>
                <td>{el.propertyId?.area}</td>
                <td>{el.propertyId?.rooms}</td>
                <td>{el.propertyId?.washroom}</td>
                <td>{el.propertyId?.garage}</td>
                
                <td>{el.status}</td>
                

                <td>
              {
                el.status == "Approved"?(
                  <>
                  <button onClick={()=>{updateStatus(el._id,"Reject",el.userId)}} className="btn btn-danger">Reject</button>
                  </>
                ):el.status == "Reject"?(
                  <button onClick={()=>{updateStatus(el._id,"Approved",el.userId)}} className="btn btn-success">Approved</button>
                ):el.status == "Pending"?(
                  <>
                  <div className="d-flex justify-content-center">
                  <button onClick={()=>{updateStatus(el._id,"Approved",el.userId)}} className="btn btn-success btn-sm">Approved</button>
                  <button onClick={()=>{updateStatus(el._id,"Reject",el.userId)}} className="btn btn-danger btn-sm">Reject</button>
                  </div>
                  </>
                ):(
                  <>
                  </>
                )
              }
              </td>
            </tr>
            ):(
              null
            )
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