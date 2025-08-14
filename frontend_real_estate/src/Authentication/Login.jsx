import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();

    const handleform = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        };
        setLoading(true); 
        axios.post("http://localhost:3021/api/customer/login", data)
            .then((res) => {
                if (res.data.success) {
                    sessionStorage.setItem("token", res.data.token);
                    sessionStorage.setItem("name", res.data.name);
                    sessionStorage.setItem("userId", res.data._id);
                    sessionStorage.setItem("userType", res.data.userType);
                    if (res.data.data.userType === 1) {
                        toast.success(res.data.message, { position: 'top-center' });
                        setTimeout(() => {
                            setLoading(false);
                            nav("/admin");
                        }, 2000);
                    } else if (res.data.data.userType === 2) {
                      if(res.data.data.status==="Accepted"){
                        sessionStorage.setItem("advisorId", res.data.data.advisorId);
                        console.log("after login id is:",sessionStorage.getItem('advisorId'))
                        toast.success(res.data.message, { position: 'top-center' });
                        setTimeout(() => {
                            setLoading(false);
                            nav("/advisor");
                        }, 2000);
                      }else {
                        sessionStorage.clear();
                        toast.error("You need admin approval! Please wait for approval", { position: 'top-center' });
                        setTimeout(() => {
                          setLoading(false);
                        }, 2000);
                      }
                    } else if (res.data.data.userType === 3) {
                      if (res.data.data.status === "Accepted") {
                          if (res.data.data.customerId) {
                              sessionStorage.setItem("customerId", res.data.data.customerId); 
                          }
                          toast.success(res.data.message, { position: 'top-center' });
                          setTimeout(() => {
                              setLoading(false);
                              nav("/");
                          }, 2000);
                      } else {
                          sessionStorage.clear(); 
                          toast.error("You need admin approval! Please wait for approval", { position: 'top-center' });
                          setTimeout(() => {
                              setLoading(false);
                          }, 2000);
                      }
                  }
                  
                    
                } else {
                    toast.error(res.data.message, { position: 'top-center' });
                    setLoading(false);
                }
            })
            .catch((err) => {
                toast.error(err.message, { position: 'top-center' });
                setLoading(false);
            });
    };

    return (
        <>
        {
          loading?(
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
             {/*/ Intro Single star /*/}
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
                Login
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
  {/*/ Intro Single End /*/}

  <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <h2 style={{ display: "flex", justifyContent: 'center', alignItems: 'center', fontStyle: 'italic', marginTop: '-50px', color: '#333' }}>LOGIN</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <form onSubmit={handleform} style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setemail(e.target.value) }}
                                    className="form-control"
                                    required
                                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password:</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setpassword(e.target.value) }}
                                    className="form-control"
                                    required
                                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                                />
                            </div>

                            <button type="submit" className="btn btn-warning" style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#ffc107', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                                {loading ? "Loading..." : "Login"}
                            </button>
                        </form>
                    </div>
                </div>
  </div>
            </>
          )
        }
        </>
    );
}