import { useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function AddProperties(){
    const[name,setname]=useState("")
    const[categoryId,setcategoryId]=useState("")
    const[cityId,setcityId]=useState("")
    const[propertyImage,setpropertyImage]=useState([])
    // eslint-disable-next-line no-unused-vars
    const[propertyImageName,setpropertyImageName]=useState("")
    const[area,setarea]=useState("")
    const[price,setprice]=useState("")
    const[rooms,setrooms]=useState("")
    const[washroom,setwashroom]=useState("")
    const[garage,setgarage]=useState("")
    const[propertyType,setpropertyType]=useState("")


    const[loading,setloading]=useState(false)
    const nav = useNavigate()

    const[data,setdata]=useState([])
    const[citydata,setcitydata]=useState([])

    useEffect(()=>{
        ApiServices.getCategoryData()
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
    useEffect(()=>{
        var advsiorId = sessionStorage.getItem('advsiorId');
        console.log("advisor id is :",advsiorId)
        ApiServices.getCity()
        .then((res)=>{
            setcitydata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])

    const changeImage=(e)=>{
        setpropertyImage(e.target.files[0])
        setpropertyImageName(e.target.value)
    }

    const addData=(e)=>{
        e.preventDefault()
        setloading(true)
        let data = new FormData()
        data.append("name",name)
        data.append("categoryId",categoryId)
        data.append("cityId",cityId)
        data.append("propertyImage",propertyImage)
        data.append("area",area)
        data.append("price",price)
        data.append("rooms",rooms)
        data.append("washroom",washroom)
        data.append("garage",garage)
        data.append("propertyType",propertyType)
        data.append("advisorId",sessionStorage.getItem('advisorId'))
        setloading(true)

        ApiServices.addProperties(data)
        .then((res)=>{
            toast.success(res.data.message)
            setTimeout(()=>{
                
                nav('/advisor/manageProperty')
                setloading(false)
            },3000)
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
        <>
         <div className="container" style={{marginTop:'150px'}}>
            <div className="row">
                <h1 style={{marginLeft:'450px'}}>Add Properties</h1>
                <div className="col-md-8 mx-auto">
                    <form onSubmit={addData} style={{padding:'20px 20px'}}>
                        <div className="row">
                            <div className="col-12">
                            <div className="name mt-3">
                            <label>Enter Property Name:</label>
                            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" />
                        </div>
                        
                        <div className="name mt-3">
                            <label htmlFor="">Enter CategoryId</label>
                            <select className="form-control" value={categoryId} onChange={(e)=>{setcategoryId(e.target.value)}}>
                            <option selected>Select Category</option>
                              {
                                data.map((el)=>(
                                    
                              <option value={el._id}>{el?.categoryName}</option>
                              
                                ))
                              }
                        </select>
                        
                        </div>

                        <div className="name mt-3">
                            <label htmlFor="">Enter City</label>
                            <select className="form-control" value={cityId} onChange={(e)=>{setcityId(e.target.value)}}>
                            <option selected>Select City</option>
                              {
                                citydata.map((el)=>(
                                    
                              <option value={el._id}>{el?.cityName}</option>
                              
                                ))
                              }
                        </select>
                        
                        </div>

                        <div className="image mt-3">
                            <label>Enter Property Image:</label>
                            <input type="file" onChange={changeImage} className="form-control"  />
                        </div>

                        <div className="des mt-3">
                            <label>Enter Area:</label>
                            <input type="text" value={area} onChange={(e)=>{setarea(e.target.value)}}  className="form-control" />
                        </div>

                        <div className="des mt-3">
                            <label>Enter Price:</label>
                            <input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}}  className="form-control" />
                        </div>

                        <div className="des mt-3">
                            <label>Enter No. of Rooms:</label>
                            <input type="text" value={rooms} onChange={(e)=>{setrooms(e.target.value)}}  className="form-control" />
                        </div>


                        <div className="name mt-3">
                            <label>Enter No. of Washrooms:</label>
                            <input type="text" value={washroom} onChange={(e)=>{setwashroom(e.target.value)}} className="form-control" />
                        </div>

                        <div className="name mt-3">
                            <label>Enter No. of Garage:</label>
                            <input type="text" value={garage} onChange={(e)=>{setgarage(e.target.value)}} className="form-control" />
                        </div>
                        <div className="name mt-3">
                            <label>Enter Property Type (for Sale or Rent):</label>
                            <input type="text" value={propertyType} onChange={(e)=>{setpropertyType(e.target.value)}} className="form-control" />
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
       )}
        </>
    )
}