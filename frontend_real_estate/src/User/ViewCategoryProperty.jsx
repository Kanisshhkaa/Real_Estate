import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link, useParams } from "react-router-dom"

export default function ViewSingleProperty(){
  const[mydata,setmydata]=useState([])
  const params = useParams()

  const id = params.id

  useEffect(()=>{
    
    let data = {
        categoryId:id,

    }
    ApiServices.getProperties(data)
    .then((res)=>{
        console.log("API response:", res.data);
        console.log("API response:", res.data.message);
      setmydata(res.data.data)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  },[id])

    return(
        <>
        <>

        <div className="container">
            <div className="row">
            <h3 style={{display:'flex',justifyContent:'center',fontStyle:'italic',marginTop:'140px'}}>Properties</h3>
                <div className="col">
                     {/* Property Cards Section */}
    <div className="row" style={{marginTop:'200px'}}>

      {mydata.map((el) => (
        <>
        {
          el.status==="Accept"?(
            el.dealerstatus==="Active"?(
              <div className="col-md-4 col-sm-6" key={el._id}>
          <div className="card-box-a card-shadow mt-5" style={{height:'300px'}}>
          <span
                 className="badge bg-danger position-absolute"
                 style={{ top: '10px', left: '10px', fontSize: '1rem', padding: '6px 10px',color:'white' }}
               >
                 {el.propertyType}
               </span>
            <div className="img-box-a">
              <img
                src={BASE_IMAGE_URL + el.propertyImage}
                alt={el.name}
                className="img-a img-fluid"
              />
            </div>
            <div className="card-overlay">
              <div className="card-overlay-a-content">
                <div className="card-header-a">
                  <h2 className="card-title-a">
                    <a href="property-single.html">{el.name}</a>
                  </h2>
                </div>
                <div className="card-body-a">
                  <div className="price-box d-flex">
                    <span className="price-a">
                      rent | {el.price}
                    </span>
                  </div>
                  <Link to={'/ViewSingleProperty/'+ el._id} className="link-a">
                    Click here to view
                    <span className="ion-ios-arrow-forward" />
                  </Link>
                </div>
                <div className="card-footer-a">
                  <ul className="card-info d-flex justify-content-around">
                    <li>
                      <h4 className="card-info-title">Area</h4>
                      <span>
                        {el.area}
                        <sup>2</sup>
                      </span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Rooms</h4>
                      <span>{el.rooms}</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Baths</h4>
                      <span>{el.washroom}</span>
                    </li>
                    <li>
                      <h4 className="card-info-title">Garages</h4>
                      <span>{el.garage}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
            ):(
              null
            )
          ):(
            null
          )
        }
        </>
      ))}
    </div>
                </div>
            </div>
        </div>

</>

        </>
    )
}
