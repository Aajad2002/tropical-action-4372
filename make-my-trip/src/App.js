import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import NavbarHotel from './components/Navbar/NavbarHotel';
import ConstNav from './components/Navbar/ConstNav';
import Home from './pages/Home';
import NavbarHomeStay from './components/Navbar/NavbarHomeStay';
import HomeStay from './components/HomeStays/HomeStay';
import AdminHotel from './Admin/AdminHotel';
import AdminHomeStay from './Admin/AdminHomeStay';
import AdminNav from './Admin/AdminNav';
import { SingleProduct } from './components/MainFlightPages/SingleProduct';
import Footer from './components/Footer/Footer';
function App() {
  const {pathname} =useLocation()
  return (
    <div className="App">
             {(pathname=="/")?<Header />:null}
       {pathname=="/hotels_home"?<Header/>:"" }
       {pathname=="/home_stay_home"?<Header/>:"" }
       {(pathname=="/")?<Navbar/>:""} 
      {pathname=="/hotels_home"?<NavbarHotel/>:"" }
       {pathname=="/home_stay_home"?<NavbarHomeStay/>:"" } 
      {pathname=="/flight"?<ConstNav/>:"" }
      {pathname=="/hotel"?<ConstNav/>:"" }
      {pathname=="/home_stay"?<ConstNav/>:"" }
      {pathname=="/flightbook/:id"?<ConstNav/>:"" }
      {pathname=="/ticket"?<ConstNav/>:"" }
      {pathname=="/review_ticket"?<ConstNav/>:"" }
      {pathname=="/payment"?<ConstNav/>:"" }
      {pathname=="/homestays/:id"?<ConstNav/>:"" }
      {pathname=="/hotel/:id"?<ConstNav/>:"" }
      {pathname=="/login"?<ConstNav/>:"" }
      {pathname=="/admin"?<ConstNav/>:"" }
      <MainRoutes />
      {pathname=="/flightbook/:id"?<Footer/>:"" }
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
