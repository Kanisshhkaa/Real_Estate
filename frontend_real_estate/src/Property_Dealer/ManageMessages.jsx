import { useEffect, useState } from "react";
import ApiServices from "../ApiServices/ApiServices";

export default function ManageMessages(){
    const [data, setData] = useState([]);
    console.log(sessionStorage.getItem("advisorId"))
        useEffect(() => {
            let data = {
                advisorId:sessionStorage.getItem("advisorId")
            }
            ApiServices.getQuery(data)
                .then((res) => {
                    setData(res.data.data);
                    console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);


        const handleReply = (email, subject, message) => {
            const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
            window.open(gmailURL, '_blank');
        };
           

    return(
        <>
        <>
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <h2 style={{ marginTop: '150px',marginLeft:'380px' }}>Manage Enquiry</h2>
                    </div>
                </div>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Message</th>
                        <th scope="col">Reply</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, index) => (
                        <tr key={el._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.subject}</td>
                            <td>{el.message}</td>
                            <td>
                                <button onClick={() => handleReply(el?.email, el?.subject, el?.message)} className="btn btn-sm btn-warning">
                                    Reply
                                </button>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        </>
    )
}