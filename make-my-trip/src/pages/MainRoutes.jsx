
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


export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={""} />
    <Route path="/flight" element={<Flight/>} />
    <Route path="/flightbook" element={<SingleProduct />}/>
    <Route path="/ticket" element={<FlightTicketData/>} /> 
    <Route path="/review_ticket" element={<AfterBookingPage/>} /> 
    <Route path="/payment" element={"Please import payment page"} />
    <Route path="/hotels_home" element={""} /> 
    <Route path="/hotel" element={<HotelPage/>} />
    <Route path="/home_stay_home" element={""}/>
    <Route path="/home_stay" element={<HomeStay/>} />
    <Route path="/homestays/:id" element={<SingalHomeStays/>} />
    <Route path="/hotel/:id" element={<SingalHotelPage/>} />

    <Route path="/adminHotel" element={<AdminHotel/>}/>
    {/* <Route path='/adminHotel/:id'element={<EditData/>}/> */}
    </Routes>
    )
}