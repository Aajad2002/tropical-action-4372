
import { Route, Routes } from "react-router-dom";
import Hotel from "../components/HotelCompo/Hotel";
import {SingleProduct} from "../components/MainFlightPages/SingleProduct";
import Flight from "./Flight";

import Home from "./Home";

export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/flight" element={<Flight/>} />
    <Route path="/hotels_home" element={<Hotel/>} />  
    <Route path="/flightbook"
    element={<SingleProduct />}/>
    </Routes>
    )
}