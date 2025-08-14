import { useEffect, useState } from "react";
import ApiServices from "../ApiServices/ApiServices";

export default function ViewCustomers(){
    const [data, setData] = useState([]);
    
        useEffect(() => {
            ApiServices.getCustomers()
                .then((res) => {
                    setData(res.data.data);
                    console.log(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, []);
    return(
        <>
        <>
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <h2 style={{ marginTop: '150px',marginLeft:'380px' }}>View Customers</h2>
                    </div>
                </div>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Contact</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, index) => (
                        <tr key={el._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.password}</td>
                            <td>{el.contact}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        </>
    )
}