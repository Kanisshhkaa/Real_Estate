/* eslint-disable no-extra-boolean-cast */
import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { DotLoader } from "react-spinners"

export default function UpdateProperties(){
    const[name,setname]=useState("")
    const[categoryId,setcategoryId]=useState("")
    const[cityId,setcityId]=useState("")
    const[propertyImage,setpropertyImage]=useState([])
    const[propertyImageName,setpropertyImageName]=useState("")
    const[area,setarea]=useState("")
    const[price,setprice]=useState("")
    const[rooms,setrooms]=useState("")
    const[washroom,setwashroom]=useState("")
    const[garage,setgarage]=useState("")
    const[propertyType,setpropertyType]=useState("")
    const[data,setdata]=useState([])
    const[citydata,setcitydata]=useState([])
    
    const[loading,setloading]=useState(false)
    const nav = useNavigate()

    const params = useParams()
    const id = params.id

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

    useEffect(()=>{
        let data = {
            _id:id
        }
        ApiServices.getSingleProperties(data)
        .then((res)=>{
            setname(res.data.data.name)
            setcategoryId(res.data.data.categoryId)
            setcityId(res.data.data.cityId)
            setpropertyImage(res.data.data.propertyImage)
            setarea(res.data.data.area)
            setprice(res.data.data.price)
            setrooms(res.data.data.rooms)
            setwashroom(res.data.data.washroom)
            setgarage(res.data.data.garage)
            setpropertyType(res.data.data.propertyType)
        })
    },[id])
   

    const changeImage=(e)=>{
        setpropertyImage(e.target.files[0])
        setpropertyImageName(e.target.value)
    }

    const updateData=(e)=>{
        e.preventDefault()
        setloading(true)
        let data = new FormData()
        data.append("name",name)
        data.append("categoryId",categoryId)
        data.append("cityId",cityId)
        if(!!propertyImageName){
            data.append("propertyImage",propertyImage)
        }
        data.append("area",area)
        data.append("price",price)
        data.append("rooms",rooms)
        data.append("washroom",washroom)
        data.append("garage",garage)
        data.append("propertyType",propertyType)
        data.append("advisorId",sessionStorage.getItem('advisorId'))
        data.append("_id",id)

        ApiServices.updateProperties(data)
        .then((res)=>{
            toast.success(res.data.message)
            console.log(res.data.data)
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
                <h1 style={{marginLeft:'450px'}}>Add Properties</h1>
                <div className="col-md-8 mx-auto">
                    <form onSubmit={updateData} style={{padding:'20px 20px'}}>
                        <div className="row">
                            <div className="col-12">
                            <div className="name mt-3">
                            <label>Enter Property Name:</label>
                            <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} className="form-control" required />
                        </div>
                        
                        <div className="name mt-3">
                            <label htmlFor="">Enter CategoryId</label>
                            <select className="form-control" value={categoryId} onChange={(e)=>{setcategoryId(e.target.value)}}>
                            <option selected>Select Category</option>
                              {
                                data.map((el)=>(
                                    
                              <option required value={el._id}>{el.categoryName}</option>
                              
                                ))
                              }
                        </select>
                        
                        </div>

                        <div className="name mt-3">
                            <label htmlFor="">Enter City</label>
                            <select className="form-control" value={cityId} onChange={(e)=>{setcityId(e.target.value)}}>
                            <option  selected>Select City</option>
                              {
                                citydata.map((el)=>(
                                    
                              <option required value={el._id}>{el?.cityName}</option>
                              
                                ))
                              }
                        </select>
                        
                        </div>
                        <div className="image mt-3">
                            <label>Previous Image:</label>
                          <img src={BASE_IMAGE_URL + propertyImage}  height={'200PX'} alt="" />
                        </div>

                        <div className="image mt-3">
                            <label>Enter Property Image:</label>
                            <input type="file" onChange={changeImage} className="form-control"  />
                        </div>

                        <div className="des mt-3">
                            <label>Enter Area:</label>
                            <input required type="text" value={area} onChange={(e)=>{setarea(e.target.value)}}  className="form-control" />
                        </div>

                        <div className="des mt-3">
                            <label>Enter Price:</label>
                            <input required type="text" value={price} onChange={(e)=>{setprice(e.target.value)}}  className="form-control" />
                        </div>

                        <div className="des mt-3">
                            <label>Enter No. of Rooms:</label>
                            <input required type="text" value={rooms} onChange={(e)=>{setrooms(e.target.value)}}  className="form-control" />
                        </div>


                        <div className="name mt-3">
                            <label>Enter No. of Washrooms:</label>
                            <input required type="text" value={washroom} onChange={(e)=>{setwashroom(e.target.value)}} className="form-control" />
                        </div>

                        <div className="name mt-3">
                            <label>Enter No. of Garage:</label>
                            <input required type="text" value={garage} onChange={(e)=>{setgarage(e.target.value)}} className="form-control" />
                        </div>

                        <div className="name mt-3">
                            <label>Enter Property Type:</label>
                            <input type="text" value={propertyType} onChange={(e)=>{setpropertyType(e.target.value)}} className="form-control" required />
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