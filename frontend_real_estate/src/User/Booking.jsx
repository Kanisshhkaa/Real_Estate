import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link } from "react-router-dom"

export default function Booking(){
    const[data,setdata]=useState([])
    useEffect(()=>{
        let data = {
            customerId:sessionStorage.getItem("customerId")
        }
        ApiServices.getBooking(data)
        .then((res)=>{
            setdata(res.data.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    },[])
    return(
        <>
        <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">
              We Do Great Design For Creative Folks
            </h1>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-box d-flex justify-content-lg-end"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Bookings
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
        <div className="container">
            <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'italic',marginBottom:'20px',marginTop:'200px'}}>My Bookings </h1>
            <div className="row">

                {
                data?.map((el)=>(
                    <>
                      {
                        el.status == "Approved"?(
                            <>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="card mb-5 mx-auto " style={{ width: "22rem" }}>
                                 <img className="card-img-top" src={BASE_IMAGE_URL+ el.propertyId?.propertyImage } alt="Card image cap" style={{height:'200px'}} />
                                 <div className="card-body">
                                   <h5 className="card-title">{el.propertyId?.name}</h5>
                                   <h5 className="card-title">Area:{el.propertyId?.area}</h5>
                                   <h6>Bedrooms:{el.propertyId?.rooms}</h6>
                                   <h6>Bath:{el.propertyId?.washroom}</h6>
                                   <div className="review">
                                   <Link to={'/reviews/'+el._id}>
                                   <button className="btn btn-warning  me-3 btn-sm mt-3">
                                     Add Reviews
                                   </button>
                                   </Link>
                                   </div>
                                 </div>
                        </div>

                </div> 
                            </>
                        ):el.status=="Pending"?(
                          <h4 style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'italic',marginLeft:'30px'}}>Wait for Advisor Approval</h4>
                        ):(
                          null
                        )
                      }
                    </>
                ))
              }
              
            </div>
        </div>
        </>
    )
}