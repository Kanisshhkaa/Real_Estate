import { useEffect, useState } from "react";
import ApiServices, { BASE_IMAGE_URL } from "../ApiServices/ApiServices";  // Correct import
import { Link } from "react-router-dom";
import {toast} from 'react-toastify'

export default function ManageCategory() {
    const [data, setData] = useState([]);
    const[isDelete,setIsDelete]=useState(false)

    useEffect(() => {
        ApiServices.getCategoryData()
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [isDelete]);

    const deleteData=(id)=>{
        setIsDelete(true)
        let data = {
            _id:id
        }
        ApiServices.deleteCategory(data)
        .then((res)=>{
            toast.success(res.data.message)
            setIsDelete(false)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    return (
        <>
            <div className="container">
                <div className="col-12">
                    <div className="row">
                        <h2 style={{ marginTop: '150px',marginLeft:'380px' }}>Manage Category</h2>
                    </div>
                </div>
            </div>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Sr.No.</th>
                        <th scope="col">CategoryName</th>
                        <th scope="col">CategoryImage</th>
                        <th scope="col">Description</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Update</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, index) => (
                        <tr key={el._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{el.categoryName}</td>
                            <td>
                                <img src={BASE_IMAGE_URL + el.categoryImage} height={'200px'} />
                            </td>
                            <td>{el.description}</td>
                            <td><button onClick={()=>deleteData(el._id)} className="btn btn-danger">Delete</button></td>
                            <td>
                                <Link to={"/admin/updatecategory/" + el._id}>
                                    <button className="btn btn-success">Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
