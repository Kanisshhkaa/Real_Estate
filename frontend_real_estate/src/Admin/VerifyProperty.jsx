import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"

export default function VerifyProperty(){
    const[data,setdata]=useState([])
    const[isupdate,setisupdate]=useState(false)
    useEffect(()=>{
        
        ApiServices.getProperties()
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[isupdate])

    const updateStatus=(id,status)=>{
        setisupdate(true)
        let data={
            _id:id,
            status:status
        }
        ApiServices.updateProperties(data)
        .then((res)=>{
            toast.success(res.data.message)
            setisupdate(false)

        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }

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
                <td>
                    {
                        el.status==="Pending"?(
                            <>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-success ms-3 btn-sm" onClick={()=>{updateStatus(el._id,"Accept")}}>
                                Accept
                            </button>
                            <button className="btn btn-danger ms-3 btn-sm" onClick={()=>{updateStatus(el._id,"Reject")}}>
                                Reject
                            </button>
                            </div>
                            </>
                        ):el.status==="Accept"?(
                            <>
                            <button className="btn btn-danger btn-sm" onClick={()=>{updateStatus(el._id,"Reject")}}>
                                Reject
                            </button>
                            </>
                        ):el.status==="Reject"?(
                            <button className="btn btn-success btn-sm" onClick={()=>{updateStatus(el._id,"Accept")}}>
                                Accept
                            </button>
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