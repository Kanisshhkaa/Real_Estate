import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"


export default function ViewBooking(){
    const[data,setdata]=useState([])

    useEffect(()=>{
        ApiServices.getBooking()
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
            <div className="row">
                <div className="col">
                    
                <table className="table table-responsive">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Property Detail</th>
      <th scope="col">Advisor Detail</th>
      <th scope="col">Customer Detail</th>
      <th scope="col">Status</th>

    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                
                <td>
                    <ul>
                        <p>
                        <img className="card-img-top" src={BASE_IMAGE_URL+ el.propertyId?.propertyImage } alt="Card image cap" style={{height:'250px',width:'250px'}} />
                        </p>
                        <p>{el.propertyId?.name} / {el.propertyId?.area} sq.ft / {el.propertyId?.rooms} Rooms</p>
                        <p>{el.propertyId?.washroom} Bath / {el.propertyId?.garage} Garage / Rs. {el.propertyId?.price} /-</p>
                        
                    </ul>
                </td>

                <td>
                    <ul>
                        <p>  <img className="card-img-top" src={BASE_IMAGE_URL+ el.advisorId?.advisorImage } alt="Card image cap" style={{height:'250px',width:'250px'}} />
                        </p>
                        <p>{el.advisorId?.name}</p>
                        <p>{el.advisorId?.email}</p>
                        <p>{el.advisorId?.contact}</p>
                    </ul>
                </td>

                <td>
                    <ul>
                        
                        <p>{el.customerId?.name} </p>
                        <p>{el.customerId?.email}</p>
                        <p>{el.customerId?.contact}</p>
                    </ul>
                </td>
                
                <td>{el.status}</td>
                

                
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