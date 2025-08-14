import { useEffect, useState } from "react";
import ApiServices from "../ApiServices/ApiServices";

export default function DealerDashboard() {
  const[properties,setproperties]=useState([])
  const[enquiry,setenquiry]=useState([])
  const[booking,setbooking]=useState([])
  const[customers,setcustomers]=useState([])
  useEffect(()=>{
    let data = {
      advisorId : sessionStorage.getItem("advisorId")
    }
    ApiServices.getProperties(data)
    .then((res)=>{
      setproperties(res.data.data.length)
    })
  },[])

  useEffect(()=>{
    let data = {
      advisorId : sessionStorage.getItem("advisorId")
    }
    ApiServices.getQuery(data)
    .then((res)=>{
      setenquiry(res.data.data.length)
    })
  },[])

  useEffect(()=>{
    let data = {
      advisorId : sessionStorage.getItem("advisorId")
    }
    ApiServices.getBooking(data)
    .then((res)=>{
      setbooking(res.data.data.length)
    })
  },[])

  useEffect(()=>{
    let data = {
      advisorId : sessionStorage.getItem("advisorId")
    }
    ApiServices.getCustomers(data)
    .then((res)=>{
      setcustomers(res.data.data.length)
    })
  },[])

    return (
      <>
        <div className="container-fluid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
          {/* Header */}
          <div className="row justify-content-center mb-5" style={{marginTop:'500px'}}>
            <div className="col-md-8 text-center">
              <h1 className="font-italic" style={{ color: '#3c3c3c' }}>Welcome Back, Dealer!</h1>
              <h3 className="text-muted" style={{ fontSize: '1.2rem', color: '#888' }}>Real Estate Management Dashboard</h3>
            </div>
          </div>
  
          {/* Dashboard Cards */}
          <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style={{ marginBottom: '30px' }}>
            {/* Properties Card */}
            <div className="col" style={{width:'250px',height:'250px'}}>
              <div className="card shadow" style={{ borderRadius: '15px', overflow: 'hidden' , height:'300px' }}>
                <img
                  src="/img/home1.jpg"
                  height={'100px'}
                  className="card-img-top"
                  alt="Properties"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <div className="card-body">
                  <i className="fas fa-building icon text-primary" style={{ fontSize: '40px', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Properties</h5>
                  <p className="card-text" style={{ color: '#555' }}>{properties} Active Listings</p>
                </div>
              </div>
            </div>
  
            {/* Users Card */}
            <div className="col" style={{width:'250px',height:'250px'}}>
              <div className="card shadow" style={{ borderRadius: '15px', overflow: 'hidden', height:'300px' }}>
                <img
                  src="/img/home1.jpg"
                  height={'100px'}
                  className="card-img-top"
                  alt="Users"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <div className="card-body">
                  <i className="fas fa-users icon text-success" style={{ fontSize: '40px', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Inquiry</h5>
                  <p className="card-text" style={{ color: '#555' }}>{enquiry} New Inquiries</p>
                </div>
              </div>
            </div>
  
            {/* Bookings Card */}
            <div className="col" style={{width:'250px',height:'250px'}}>
              <div className="card shadow" style={{ borderRadius: '15px', overflow: 'hidden' , height:'300px' }}>
                <img
                  src="/img/home1.jpg"
                  height={'100px'}
                  className="card-img-top"
                  alt="Bookings"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <div className="card-body">
                  <i className="fas fa-calendar-check icon text-warning" style={{ fontSize: '40px', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Bookings</h5>
                  <p className="card-text" style={{ color: '#555' }}>{booking} Bookings</p>
                </div>
              </div>
            </div>
          </div>
  
          <br />
  
          {/* Additional Cards Section (Inquiries & Transactions) */}
          <div className="row row-cols-1 mt-5 row-cols-md-2 g-4 justify-content-center">
            {/* Inquiries Card */}
            <div className="col" style={{width:'250px',height:'250px'}}>
              <div className="card shadow" style={{ borderRadius: '15px', overflow: 'hidden' , height:'300px'}}>
                <img
                 src="/img/home1.jpg"
                 height={'100px'}
                  className="card-img-top"
                  alt="Inquiries"
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <div className="card-body">
                  <i className="fas fa-question-circle icon text-danger" style={{ fontSize: '40px', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Customers</h5>
                  <p className="card-text" style={{ color: '#555' }}>{customers} Registered User</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> 
    );
  }
  