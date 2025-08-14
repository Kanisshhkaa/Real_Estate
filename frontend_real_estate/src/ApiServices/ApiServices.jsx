import axios from "axios";
import qs from "qs";

const BASE_URL = "http://localhost:3021/api/";
export const BASE_IMAGE_URL = "http://localhost:3021/";  

class ApiServices {
    getToken(){
         let obj = {
            Authorization:sessionStorage.getItem("token")
        }
        return obj;
    }
    addCategories(data){
        return axios.post(BASE_URL + "category/add", data, {headers: this.getToken()});
    }

    getCategoryData(data){
        return axios.post(BASE_URL + "category/getall", qs.stringify(data));
    }
    deleteCategory(data){
        return axios.post(BASE_URL+"category/deleteData",qs.stringify(data))
    }
    getSingleData(data){
        return axios.post(BASE_URL+ "category/getSingleData", qs.stringify(data))
    }
    updateCategory(data){
        return axios.post(BASE_URL + "category/updateData", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }



    addCity(data){
        return axios.post(BASE_URL+"city/add",data)
    }
    getCity(data){
        return axios.post(BASE_URL+"city/getall",qs.stringify(data))
    }
    getSingleCity(data){
        return axios.post(BASE_URL+"city/getSingleData",qs.stringify(data))
    }
    deleteCity(data){
        return axios.post(BASE_URL+"city/deleteData",qs.stringify(data))
    }
    updateCity(data){
        return axios.post(BASE_URL+"city/updateData",data)
    }



    addBooking(data){
        return axios.post(BASE_URL+"booking/add",data)
    }
    getBooking(data){
        return axios.post(BASE_URL+"booking/getall",qs.stringify(data))
    }
    getSingleBooking(data){
        return axios.post(BASE_URL+"booking/getSingleData",qs.stringify(data))
    }
    updateBooking(data){
        return axios.post(BASE_URL+"booking/updateData",qs.stringify(data))
    }


    addProperties(data){
        return axios.post(BASE_URL + "property/add", data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
    getProperties(data){
        return axios.post(BASE_URL+"property/getall",qs.stringify(data))
    }
    getSingleProperties(data){
        return axios.post(BASE_URL+"property/getSingleData",qs.stringify(data))
    }
    deleteProperties(data){
        return axios.post(BASE_URL+"property/deleteData",qs.stringify(data))
    }
    updateProperties(data){
        return axios.post(BASE_URL+"property/updateData",data)
    }

    addReviews(data){
        return axios.post(BASE_URL+"review/add",data)
    }
    getReviews(data){
        return axios.post(BASE_URL+"review/getall",qs.stringify(data))
    }

    addQuery(data){
        return axios.post(BASE_URL+"query/add",data)
    }
    getQuery(data){
        return axios.post(BASE_URL+"query/getall",qs.stringify(data))
    }

    updateUserStatus(data){
        return axios.post(BASE_URL+"user/update",data)
    }
    updateCustomerStatus(data){
        return axios.post(BASE_URL+"customer/updateData",qs.stringify(data))
    }
    updateUser(data){
        return axios.post(BASE_URL+"user/update",data)
    }

    addCustomers(data){
        return axios.post(BASE_URL + "customer/register", data);
    }
    getCustomers(data){
        return axios.post(BASE_URL+"customer/getall",qs.stringify(data))
    }
    getSingleCustomers(data){
        return axios.post(BASE_URL+"customer/getSingleData",qs.stringify(data))
    }
    UpdateCustomers(data){
        return axios.post(BASE_URL+"customer/updateData",data)
    }
    addAdvisor(data){
        return axios.post(BASE_URL+"advisor/register",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
    getSingleAdvisor(data){
        return axios.post(BASE_URL+"advisor/getSingleData",qs.stringify(data))
    }
    getAdvisor(data){
        return axios.post(BASE_URL+"advisor/getallAdvisor",qs.stringify(data))
    }
    updateAdvisor(data){
        return axios.post(BASE_URL+"advisor/updateData",data,{
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }
}

export default new ApiServices();
