
import { Route, Routes } from "react-router-dom";
import { AfterBookingPage } from "../components/MainFlightPages/AfterBookingReview";
import { FlightTicketData } from "../components/MainFlightPages/FlightTicketData";
import {SingleProduct} from "../components/MainFlightPages/SingleProduct";
import Flight from "./Flight";
import HotelPage from "./HotelPage";



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
    </Routes>
    )
}