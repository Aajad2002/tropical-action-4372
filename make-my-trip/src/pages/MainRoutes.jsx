
import { Route, Routes } from "react-router-dom";
import { AfterBookingPage } from "../components/MainFlightPages/AfterBookingReview";
import { FlightTicketData } from "../components/MainFlightPages/FlightTicketData";
import {SingleProduct} from "../components/MainFlightPages/SingleProduct";
import Flight from "./Flight";
import HotelPage from "./HotelPage";
import SingalHotelPage from "../components/HotelCompo/SingalHotelPage";
import HomeStay from "../components/HomeStays/HomeStay";
import SingalHomeStays from "../components/HomeStays/SingalHomstaysPage";
// import EditData from "../Admin/EditHotelData";
import AdminHotel from "../Admin/AdminHotel";
import AdminNav from "../Admin/AdminNav";
import Payment from "./Payment";
import Login from "./Authentication";
import Footer from "../components/Footer/Footer";

import PrivatRouting from "./PrivatRouting";
import Signup from "./Signup";
import AdminLoginPage from "../components/adminLogin/AdminLoginPage";
export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={""} />
    <Route path="/flight" element={<Flight/>} />
    <Route path="/flightbook/:id" element={
    <PrivatRouting>

        <SingleProduct />
    </PrivatRouting>
    }/>
    <Route path="/ticket" element={<FlightTicketData/>} /> 
    <Route path="/review_ticket" element={<AfterBookingPage/>} /> 
    <Route path="/payment" element={<Payment/>} />
    <Route path="/hotels_home" element={""} /> 
    <Route path="/hotel" element={<HotelPage/>} />
    <Route path="/home_stay_home" element={""}/>
    <Route path="/home_stay" element={<HomeStay/>} />
    <Route path="/adinLogin" element={<AdminLoginPage/>}/>
    <Route path="/homestays/:id" element={
        <PrivatRouting>
            <SingalHomeStays/>
        </PrivatRouting>
    } />
    <Route path="/hotel/:id" element={
        <PrivatRouting>
            <SingalHotelPage/>
        </PrivatRouting>
    } />
<Route path='/login' element={<Login/>}/>
<Route path="/signup" element={<Signup/>} />
    <Route path="/admin" element={
            <AdminNav/>
    }/>
    </Routes>
    )
}