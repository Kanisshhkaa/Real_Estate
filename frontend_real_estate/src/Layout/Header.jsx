import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"

export default function Header(){
  const [token , setToken ] = useState(sessionStorage.getItem("token"));
  const nav = useNavigate();
  const tokenn=sessionStorage.getItem("token")

  useEffect(() => {
    const interval = setInterval(() => {
      setToken(sessionStorage.getItem("token")); // Update Token whenever it changes
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  console.log("Token in Header:", token);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("userId");
    toast.success("Logout Successfuly");
    setTimeout(() => {
      nav('/');
    }, 1000);
  }
    return(
        <>
        <>
  <div className="click-closed" />
  {/*/ Form Search Star /*/}
  <div className="box-collapse">
    <div className="title-box-d">
      <h3 className="title-d">Search Property</h3>
    </div>
    <span className="close-box-collapse right-boxed ion-ios-close" />
    <div className="box-collapse-wrap form">
      <form className="form-a">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Keyword</label>
              <input
                type="text"
                className="form-control form-control-lg form-control-a"
                placeholder="Keyword"
              />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="Type">Type</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="Type"
              >
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="city"
              >
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bedrooms">Bedrooms</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="bedrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="garages">Garages</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="garages"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="bathrooms">Bathrooms</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="bathrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group">
              <label htmlFor="price">Min Price</label>
              <select
                className="form-control form-control-lg form-control-a"
                id="price"
              >
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">
              Search Property
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/*/ Form Search End /*/}
  {/*/ Nav Star /*/}
  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <a className="navbar-brand text-brand" href="#">
        Estate<span className="color-b">Agency</span>
      </a>
      <button
        type="button"
        className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-expanded="false"
      >
        <span className="fa fa-search" aria-hidden="true" />
      </button>
      <div
        className="navbar-collapse collapse justify-content-center"
        id="navbarDefault"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to={'/'}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/about'}>
              About
            </Link>
          </li>
          
  
          <li className="nav-item">
            <Link className="nav-link" to={'/viewreviews'}>
             Reviews
            </Link>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              

            <Link className="dropdown-item" to={'/category'}>
                Category
              </Link>

               <Link className="dropdown-item" to={'/property'}>
                Property
              </Link>

              <Link className="dropdown-item" to={'/agentsGrid'}>
                Advisor Grid
              </Link>

             
              
            </div>
          </li>
          {
            tokenn?(
              <>
              <li className="nav-item">
            <Link className="nav-link" to={'/Booking'}>
              Booking
            </Link>
          </li>
              </>
            ):(
              null
            )
          }
          <li className="nav-item">
            <Link className="nav-link" to={'/contact'}>
              Contact
            </Link>
          </li>
         {
          token ? (
            <>
            <Link onClick={logout}>
            <button className="btn btn-warning mt-2">LogOut</button>
            </Link>
            </>
          ):(
            <>
             <div className="nav-item dropdown">
            <Link
            to={"#"}
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
             >
                 <button className="btn btn-success">Registration</button>
            </Link>
            <div className="dropdown-menu">
              <Link to={"/SignUp"} className="dropdown-item">
                User Registration
              </Link>
              <Link to={"/advisorSignUp"} className="dropdown-item">
              Advisor Registration
              </Link>
            </div>
            </div>

              <Link to={'/login'}>
              <button className="btn btn-danger" style={{marginTop:'9px'}} >Login</button>
              </Link>
            </>
          )
         } 
         
        </ul>
      </div>
      
    </div>
  </nav>
  {/*/ Nav End /*/}
</>

        </>
    )
}