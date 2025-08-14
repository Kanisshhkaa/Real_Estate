import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"

export default function ManageRejectedBooking(){
    const[data,setdata]=useState([])
    useEffect(()=>{
      let data ={
        advisorId:sessionStorage.getItem("advisorId")
      }
        ApiServices.getBooking(data)
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })

   

    return(
        <>
        <div className="container" style={{marginTop:'120px'}}>
        <h3 style={{fontStyle:'italic',marginTop:'150px',marginBottom:'50px'}}>~ View Rejected Bookings</h3>
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
   
    </tr>
  </thead>
  <tbody>
    {
        data.map((el)=>(
            el.status=="Reject"?(
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