
import { Route, Routes } from "react-router-dom";
import Flight from "./Flight";
import Home from "./Home";
import Hotels from "./Hotels";
export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/flight" element={<Flight/>} />
    <Route path="/hotels_home" element={<Hotels/>} />
    </Routes>
    )
}