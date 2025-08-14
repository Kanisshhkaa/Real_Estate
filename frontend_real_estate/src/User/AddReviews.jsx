import {useEffect, useState } from "react"
import ApiServices from "../ApiServices/ApiServices"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"; // Make sure to install react-icons

export default function AddReviews(){
    //const[rating,setrating]=useState([])
    const[reviewmessage,setreviewmessage]=useState("")
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    
    const params = useParams()
    const id = params.id
    const[propertyId,setpropertyId]=useState("")
    const[advisorId,setadvisorId]=useState("")
    
    
    useEffect(()=>{
        let data = {
            _id:id
        }
        ApiServices.getSingleBooking(data)
        .then((res)=>{
            setpropertyId(res.data.data.propertyId)
            setadvisorId(res.data.data.advisorId)
        })
    },[id])

    const addData=(e)=>{
        e.preventDefault()
        let data= {
            rating:rating,
            reviewMessage:reviewmessage,
            customerId:sessionStorage.getItem("customerId"),
            propertyId:propertyId,
            advisorId:advisorId
        }
        console.log(data)
        ApiServices.addReviews(data)
        .then((res)=>{
            toast.success(res.data.message)
            console.log(res.data)
        })
    } 
    return(
        <>
         <div className="container" style={{marginTop:'150px'}}>
            <div className="row">
                <h1 style={{marginLeft:'450px'}}>Add Review Here</h1>
                <div className="col-12 mx-auto">
                    <form onSubmit={addData} style={{padding:'20px 20px'}}>
                        <div className="row">
                            <div className="col-12">
                            
                            <div className="mb-4">
                  <label className="form-label">Select Rating:</label>
                  <div className="d-flex align-items-center">
                    {[...Array(5)].map((_, index) => {
                      const starValue = index + 1;
                      return (
                        <FaStar
                          key={index}
                          size={32}
                          className="me-2 cursor-pointer"
                          color={
                            starValue <= (hoverRating || rating)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(0)}
                          style={{ transition: "color 200ms" }}
                        />
                      );
                    })}
                  </div>
                </div>
                              
                        
                        
                        

                        <div className="des mt-3">
                            <label>Enter your Reviews:</label>
                            <textarea className="form-control" rows={5} cols={20}  onChange={(e)=>{setreviewmessage(e.target.value)}} ></textarea>
                        </div>
                        <div className="button mt-4">
                            <button type="submit" className="btn btn-success offset-5">Save</button>
                        </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}