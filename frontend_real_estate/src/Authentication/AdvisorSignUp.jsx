import { useState } from "react";
import ApiServices from "../ApiServices/ApiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

export default function AdvisorSignUp() {
    const [name, setname] = useState("");
    const [advisorImage, setadvisorImage] = useState(null);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [contact, setcontact] = useState("");
    const [gender, setgender] = useState("");

    const[loading,setLoading]=useState(false)

    const nav = useNavigate()

    const changeImage = (e) => {
        setadvisorImage(e.target.files[0]);
    };

    const addData = (e) => {
        e.preventDefault();
        setLoading(true)
        let data = new FormData();
        data.append("name", name);
        data.append("advisorImage", advisorImage);
        data.append("email", email);
        data.append("contact", contact);
        data.append("password", password);
        data.append("gender", gender);
        

        ApiServices.addAdvisor(data)
            .then((res) => {
                toast.success(res.data.message);
                console.log(res.data)
                setTimeout(()=>{
                  nav('/login')
                  setLoading(true)
                },2000)
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <>
           {
            loading?(
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
                Advisor SignUp
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
        </section>
        <div className="container mt-3" style={{ maxWidth: '600px', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f9fa' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333',marginTop:'30px' }}>Advisor Registration</h1>
            <form onSubmit={addData}>
                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Enter Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => { setname(e.target.value) }}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Enter Advisor Image:</label>
                    <input
                        type="file"
                        onChange={changeImage}
                        className="form-control"
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Enter Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Enter Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => { setpassword(e.target.value) }}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Contact:</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={contact}
                        pattern="^\d{10}$"
                      minLength={10}
                      maxLength={10}
                        onChange={(e) => { setcontact(e.target.value) }}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="form-group" style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold' }}>Gender:</label>
                    <input
                        type="tel"
                        className="form-control"
                        value={gender}
                        
                        onChange={(e) => { setgender(e.target.value) }}
                        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        required
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success" style={{ padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#28a745', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
                        Save
                    </button>
                </div>
            </form>
        </div>
              </>
            )
           }
        </>
    );
}