import { useState } from "react";
import ApiServices from "../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contact, setcontact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const data = { name, email, password, contact };
  
    ApiServices.addCustomers(data)
      .then((res) => {
        toast.success(res.data.message, { position: "top-center" });

        
        setTimeout(() => {
          nav("/login");
          setIsLoading(false); 
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.message);
        setIsLoading(false); 
      });
  };
  

  return (
    <>
      {isLoading ? (
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
      ) : (
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
                        User SignUp
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12">
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontStyle: "italic",
                    marginTop: "-50px",
                    color: "#333",
                  }}
                >
                  USER REGISTRATION
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-sm-12">
                <form
                  onSubmit={addData}
                  style={{
                    backgroundColor: "#f8f9fa",
                    padding: "25px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label className="form-label">Name:</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        className="form-control"
                        required
                        style={{
                          padding: "10px",
                          borderRadius: "4px",
                          border: "1px solid #ced4da",
                        }}
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Email:</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="form-control"
                        required
                        style={{
                          padding: "10px",
                          borderRadius: "4px",
                          border: "1px solid #ced4da",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="form-control"
                      required
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contact:</label>
                    <input
                      type="tel"
                      value={contact}
                      onChange={(e) => setcontact(e.target.value)}
                      className="form-control"
                      pattern="^\d{10}$"
                      minLength={10}
                      maxLength={10}
                      required
                      style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ced4da",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "4px",
                      border: "none",
                      backgroundColor: "#ffc107",
                      color: "#fff",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    SignUp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
