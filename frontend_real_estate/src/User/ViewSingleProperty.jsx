import { useEffect, useState } from "react";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DotLoader } from "react-spinners";

export default function ViewSingleProperty() {
  const [mydata, setmydata] = useState([]);
  const [advisorId, setadvisorId] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const nav = useNavigate();
  const id = params.id;
  const customerId = sessionStorage.getItem("token");

  useEffect(() => {
    const data = { _id: id };

    ApiServices.getProperties(data)
      .then((res) => {
        setmydata(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    ApiServices.getSingleProperties(data)
      .then((res) => {
        setadvisorId(res.data.data.advisorId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const addBooking = (e) => {
    e.preventDefault();
    const bookingData = {
      advisorId: advisorId,
      customerId: sessionStorage.getItem("customerId"),
      propertyId: id,
    };

    setLoading(true);

    ApiServices.addBooking(bookingData)
      .then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          nav("/Booking");
          setLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
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
        <section className="py-5 bg-light" style={{marginTop:'110px'}}>
          <div className="container">
            <h2 className="text-center mb-5" style={{ fontStyle: "italic" }}>
              View Single Property
            </h2>

            {mydata.map((el) => (
              <div className="row align-items-center mb-5" key={el._id}>
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img
                    src={BASE_IMAGE_URL + el.propertyImage}
                    alt={el.name}
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "1100px"}}
                  />
                </div>

                <div className="col-lg-6">
                  <h3 className="mb-3">{el.name}</h3>
                  <p className="text-muted mb-2">
                    <strong>{el.rooms}</strong> Rooms &nbsp;/&nbsp;
                    <strong>{el.washroom}</strong> Baths &nbsp;/&nbsp;
                    <strong>{el.garage}</strong> Garages
                  </p>
                  <p className="text-muted mb-2">
                    Area: <strong>{el.area} sq.ft</strong>
                  </p>
                  <p className="text-muted mb-2">
                    City: <strong>Available at {el.cityId?.cityName}</strong>
                  </p>
                  <p className="fs-5 text-primary">
                    <strong>₹ {el.price}</strong>
                  </p>

                  {customerId ? (
                    <div className="btns">
                      <button
                      onClick={addBooking}
                      className="btn btn-success me-3 btn-sm mt-3"
                    >
                      Book Now
                    </button>

                    </div>
                  ):(
                    <>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
