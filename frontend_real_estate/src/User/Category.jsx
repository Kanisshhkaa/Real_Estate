import { useEffect, useState } from "react"
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices"
import { Link } from "react-router-dom"

export default function Category(){
  const[data,setdata]=useState([])
   useEffect(()=>{
      ApiServices.getCategoryData()
      .then((res)=>{
        setdata(res.data.data)
      })
      .catch((err)=>{
        console.log(err.message)
      })
    },[])
    return(
        <>
        <>
  {/*/ Intro Single star /*/}
  <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Properties Category</h1>
            <span className="color-text-a">Grid Properties</span>
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
                Category
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Intro Single End /*/}
  {/*/ Property Grid Star /*/}
  <section className="property-grid grid">
    <div className="row">
        <div className="col">
            
    {/*/ Category Start /*/}
    <section className="section-services section-t8">
    <div className="container">
      <div className="row">
        
        {
          data.map((el)=>(
            <>
            <div className="col-md-4 col-sm-12">
            <div className="card mt-4" style={{ width: "22rem" ,height:'440px' }}>
           <div className="category-content" style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'20px 20px'}}>
           <img src={BASE_IMAGE_URL+el.categoryImage} height={'250px'} className="rounded-3 card-img-top" alt="..." />
           
           </div>
           <div className="card-body">
             <h5 className="card-title">{el.categoryName}</h5>
             <p className="card-text">
               {el.description}
             </p>
             <Link to={'/ViewCatgeoryProperty/'+ el._id} className="btn btn-primary">
               Explore Properties
             </Link>
           </div>
      </div>
            </div>

            </>
          ))
        }
      </div>
    </div>
  </section>
        </div>
    </div>
    
  </section>
  {/*/ Property Grid End /*/}
</>

        </>
    )
}