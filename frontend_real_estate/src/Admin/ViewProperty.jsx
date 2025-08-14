import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"

export default function ViewProperty(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        ApiServices.getProperties()
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    return(
        <>
       <div className="container"style={{marginTop:'130px'}}>
        <div className="row">
            <div className="col-12">
            <table className="table table-responsive">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">Name</th>
      <th scope="col">Category Name</th>
      <th scope="col">Property Image</th>
      <th scope="col">Area</th>
      <th scope="col">Price</th>
      <th scope="col">Rooms</th>
      <th scope="col">Washrooms</th>
      <th scope="col">Garage</th>
      <th scope="col">Advisor Name</th>
      <th scope="col">City Name</th>
      <th scope="col">Status</th>
    
    </tr>
  </thead>
  <tbody>
    {
        data.map((el,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{el.name}</td>
                <td>{el.categoryId?.categoryName}</td>
                <td><img src={BASE_IMAGE_URL+el.propertyImage} height={'200px'} alt="" /></td>
                <td>{el.price}</td>
                <td>{el.area}</td>
                <td>{el.rooms}</td>
                <td>{el.washroom}</td>
                <td>{el.garage}</td>
                <td>{el.advisorId?.name}</td>
                <td>{el.cityId?.cityName}</td>
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