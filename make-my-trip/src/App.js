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
function App() {
  const {pathname} =useLocation()
  // console.log(pathname)
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
      <MainRoutes />
      {(pathname=="/")?<Home/>:""}
      {pathname=="/hotels_home"?<Home/>:"" }
      {pathname=="/home_stay_home"?<Home/>:"" }
       {/* {(pathname=="/")?<Header />:null}
       {pathname=="/hotels_home"?<Header/>:"" }
      {(pathname=="/")?<Navbar/>:""}
      {pathname=="/hotels_home"?<NavbarHotel/>:"" }
      {pathname=="/flight"?<ConstNav/>:"" }
      <MainRoutes />
      {(pathname=="/")?<Home/>:""}
      {pathname=="/hotels_home"?<Home/>:"" }
      <HomeStay/>    
      <AdminHotel/>
      <AdminHomeStay/>
      
      <AdminNav/> */}
    </div>
  );
}

export default App;
