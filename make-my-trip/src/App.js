import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import HomeStay from './components/HomeStays/HomeStay';
import AdminHotel from './Admin/AdminHotel';
import AdminHomeStay from './Admin/AdminHomeStay';
import AdminNav from './Admin/AdminNav';
import { SingleProduct } from './components/MainFlightPages/SingleProduct';
import Footer from './components/Footer/Footer';
import ConstNav from './components/Navbar/ConstNav';
import AeroplaneSearch from './components/Aeroplane/AeroplaneSearch';
import HotelSearch from './components/HotelSearch/HotelSearch';
import HomeStaySearch from './components/HomeStaySearch/HomeStaySearch';
function App() {
  const {pathname} =useLocation()
  return (
    <div className="App">
        {(pathname=="/")?<ConstNav/>:""} 
      {pathname=="/hotels_home"?<ConstNav/>:"" }
       {pathname=="/home_stay_home"?<ConstNav/>:"" }  
{(pathname=="/")?<AeroplaneSearch/>:""} 
      {pathname=="/hotels_home"?<HotelSearch/>:""}
       {pathname=="/home_stay_home"?<HomeStaySearch/>:"" }  
       {(pathname=="/flight")?<ConstNav/>:""} 
       {(pathname=="/hotel")?<ConstNav/>:""} 
       {(pathname=="/home_stay")?<ConstNav/>:""} 
      <MainRoutes />
      {/* {pathname=="/flightbook/:id"?<Footer/>:"" } */}
      {pathname=="/ticket"?<Footer/>:"" }
      {pathname=="/review_ticket"?<Footer/>:"" }
      {pathname=="/payment"?<Footer/>:"" }
      {pathname=="/homestays/:id"?<Footer/>:"" }
      {pathname=="/hotel/:id"?<Footer/>:"" }
      {pathname=="/login"?<Footer/>:"" }
      {pathname=="/admin"?<Footer/>:"" }
      {pathname=="/flight"?<Footer/>:"" }
      {pathname=="/hotel"?<Footer/>:"" }
      {pathname=="/home_stay"?<Footer/>:"" }
      {(pathname=="/")?<Home/>:""}
      {pathname=="/hotels_home"?<Home/>:"" }
      {pathname=="/home_stay_home"?<Home/>:"" }
      {/* <SingleProduct/> */}
    </div>
  );
}

export default App;
