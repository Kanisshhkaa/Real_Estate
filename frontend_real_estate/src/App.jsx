import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ToastContainer} from 'react-toastify'
import Master from "./Layout/Master"
import Home from "./User/Home"
import About from "./User/About"
import Property from "./User/Property"
import Blog from "./User/Blog"
import PropertySingle from "./User/PropertySingle"
import BlogSingle from "./User/BlogSingle"
import AgentsSingle from "./User/AgentsSingle"
import AgentsGrid from "./User/AgentsGrid"
import Contact from "./User/Contact"
import Login from "./Authentication/Login"
import SignUp from "./Authentication/SignUp"
import AdvisorSignUp from "./Authentication/AdvisorSignUp"
import Dashboard from "./Admin/Dashboard"
import AdminMaster from "./Layout/AdminMaster"
import AddCatgeory from "./Admin/AddCategory"
import ManageCategory from "./Admin/ManageCategory"
import UpdateCategory from "./Admin/UpdateCategory"
import AddCity from "./Admin/AddCity"
import ManageCity from "./Admin/ManageCity"
import UpdateCity from "./Admin/UpdateCity"
import DealerDashboard from "./Property_Dealer/DealerDashboard"
import AdvisorMaster from "./Layout/AdvisorMaster"
import ViewMessages from "./Admin/ViewMessages"
import ViewCustomers from "./Admin/ViewCustomers"
import AddProperties from "./Property_Dealer/AddProperties"
import ManageProperties from "./Property_Dealer/ManageProperties"
import UpdateProperties from "./Property_Dealer/UpdateProperties"
import ViewProperty from "./Admin/ViewProperty"
import VerifyProperty from "./Admin/VerifyProperty"
import ViewSingleProperty from "./User/ViewSingleProperty"
import ViewCategoryProperty from "./User/ViewCategoryProperty"
import Booking from "./User/Booking"
import Category from "./User/Category"
import ManageBooking from "./Property_Dealer/ManageBooking"
import ViewBooking from "./Admin/ViewBooking"
import ManageMessages from "./Property_Dealer/ManageMessages"
import ManageCustomers from "./Admin/ManageCustomers"
import ManageAdvisor from "./Admin/ManageAdvisor"
import ManageAcceptedBooking from "./Property_Dealer/ManageAcceptedBooking"
import ManageRejectedBooking from "./Property_Dealer/ManageRejectedBooking"
import AddInquiry from "./Property_Dealer/AddInquiry"
import Profile from "./Property_Dealer/Profile"
import UpdateProfile from "./Property_Dealer/UpdateProfile"
import AddReviews from "./User/AddReviews"
import ViewReviews from "./User/ViewReviews"



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Master/>}>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/property" element={<Property/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/PropertySingle" element={<PropertySingle/>} />
    <Route path="/ViewSingleProperty/:id" element={<ViewSingleProperty/>} />
    <Route path="/ViewCatgeoryProperty/:id" element={<ViewCategoryProperty/>} />
    <Route path="/blogSingle" element={<BlogSingle/>} />
    <Route path="/Booking" element={<Booking/>} />
    <Route path="/category" element={<Category/>} />
    <Route path="/agentsSingle" element={<AgentsSingle/>} />
    <Route path="/agentsGrid" element={<AgentsGrid/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/reviews/:id" element={<AddReviews/>} />
    <Route path="/viewreviews" element={<ViewReviews/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/advisorSignup" element={<AdvisorSignUp/>} />
    </Route>


    <Route path="/admin" element={<AdminMaster/>}>
    <Route path="/admin" element={<Dashboard/>}/>
    <Route path="/admin/addCategory" element={<AddCatgeory/>}/>
    <Route path="/admin/manageCategory" element={<ManageCategory/>}/>
    <Route path="/admin/managecustomers" element={<ManageCustomers/>}/>
    <Route path="/admin/manageadvisor" element={<ManageAdvisor/>}/>
    <Route path="/admin/updateCategory/:id" element={<UpdateCategory/>}/>

    <Route path="/admin/addCity" element={<AddCity/>} />
    <Route path="/admin/manageCity" element={<ManageCity/>} />
    <Route path="/admin/updatecity/:id" element={<UpdateCity/>} />


    <Route path="/admin/viewQuery" element={<ViewMessages/>} />
    <Route path="/admin/viewCustomers" element={<ViewCustomers/>} />
    <Route path="/admin/viewProperty" element={<ViewProperty/>} />
    <Route path="/admin/verifyProperty" element={<VerifyProperty/>} />
    <Route path="/admin/viewBooking" element={<ViewBooking/>} />

    </Route>



    <Route path="/advisor" element={<AdvisorMaster/>}>
    <Route path="/advisor" element={<DealerDashboard/>}/>
    <Route path="/advisor/addProperty" element={<AddProperties/>}/>
    <Route path="/advisor/manageProperty" element={<ManageProperties/>}/>
    <Route path="/advisor/manageBooking" element={<ManageBooking/>}/>
    <Route path="/advisor/manageApprovedBooking" element={<ManageAcceptedBooking/>}/>
    <Route path="/advisor/manageRejectedBooking" element={<ManageRejectedBooking/>}/>
    <Route path="/advisor/addmessages" element={<AddInquiry/>}/>
    <Route path="/advisor/profile" element={<Profile/>}/>
    <Route path="/advisor/updateProperties/:id" element={<UpdateProperties/>}/>
    <Route path="/advisor/updateprofile/:id" element={<UpdateProfile/>}/>
    </Route>

   </Routes>
   <ToastContainer/>
   </BrowserRouter>
   
  )
}

export default App
