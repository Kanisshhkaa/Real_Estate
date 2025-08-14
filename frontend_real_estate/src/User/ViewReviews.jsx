import { useEffect, useState } from "react";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";

export default function ViewReviews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        ApiServices.getReviews()
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
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
                View Reviews
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
            <div className="container">
                <div className="row  mb-4">
                    <div className="col-12 text-center">
                        <h2 >View Reviews</h2>
                    </div>
                </div>

                <div className="row">
                    {data.map((el) => (
                        <div className="col-12 mb-4" key={el._id}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    
                                    <div className="rating" style={{display:'flex',justifyContent:'center'}}>
                                      <div className="col-md-8 col-sm-6">
                                    {
                                      Array.from({
                                        length:el.rating
                                      },(el,index)=>(
                                        <>
                                        <span  key={index}>⭐</span>
                                        </>
                                      ))
                                    }
                                    <p>{el.customerId?.name}</p>
                                    <p>{el.reviewMessage}</p>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                    <img src={BASE_IMAGE_URL+el.propertyId?.propertyImage} className="rounded-circle" height={'150px'} style={{width:'150px'}} />
                                    <div className="datap" style={{margin:'10px 30px'}}>
                                    <p>{el.propertyId?.name}</p>
                                    <p>Area : {el.propertyId?.area} sq.ft </p>
                                    </div>
                                    </div>
                                    </div>

                                    
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
