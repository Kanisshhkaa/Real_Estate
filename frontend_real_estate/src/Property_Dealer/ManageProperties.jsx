import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

export default function ManageProperties(){
    const[data,setdata]=useState([])
    // eslint-disable-next-line no-unused-vars
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
       let data={
        advisorId:sessionStorage.getItem("advisorId")
       }
        ApiServices.getProperties(data)
        .then((res)=>{
            setdata(res.data.data)
            
        })

        .catch((err)=>{
            console.log(err.message)
        })
    })

    const updateStatus=(id,dealerstatus,userId)=>{
            let data={
                _id:id,
                dealerstatus:dealerstatus
            }
            

            ApiServices.updateProperties(data)
            .then((res)=>{
                toast.success(res.data.message)
            })
            let data1 = {
                _id:userId,
                dealerstatus:dealerstatus
            } 
            setLoading(true) 
            ApiServices.updateUserStatus(data1)
            .then((res)=>{
                console.log(res.data.message)
                setLoading(false)
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
      <th scope="col">PropertyType</th>
      <th scope="col">Advisor Name</th>
      <th scope="col">City Name</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      <th scope="col">Update</th>
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
                <td>{el.area}</td>
                <td>{el.price}</td>
                <td>{el.rooms}</td>
                <td>{el.washroom}</td>
                <td>{el.garage}</td>
                <td>{el.propertyType}</td>
                <td>{el.advisorId?.name}</td>
                <td>{el.cityId?.cityName}</td>
                <td>{el.dealerstatus}</td>
                <td>
                {
                el.dealerstatus == "Active"?(
                  <>
                  <button onClick={()=>{updateStatus(el._id,"Inactive",el.userId)}} className="btn btn-sm btn-danger">Inactive</button>
                  </>
                ):el.dealerstatus == "Inactive"?(
                  <button onClick={()=>{updateStatus(el._id,"Active",el.userId)}} className="btn btn-sm btn-success">Active</button>
                ):(
                  <>

                  </>
                )
              }
                </td>

                <td>
                    <Link to={'/advisor/updateProperties/'+ el._id}>
                    <button className="btn btn-sm btn-warning">
                        Update
                    </button>
                    </Link>
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