
import { Route, Routes } from "react-router-dom";
import Flight from "./Flight";
import Home from "./Home";
export const MainRoutes=()=>{
    return(
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/flight" element={<Flight/>} />

    </Routes>
    )
}