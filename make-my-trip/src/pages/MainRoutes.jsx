
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import {SingleProduct} from "../components/MainFlightPages/SingleProduct";
import Flight from "./Flight";
import HotelPage from "./HotelPage";



export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={""} />
    <Route path="/flight" element={<Flight/>} />
    <Route path="/hotels_home" element={""} /> 
    <Route path="/hotel" element={<HotelPage/>} /> 
    <Route path="/flightbook"
    element={<SingleProduct />}/>
    </Routes>
    )
}