import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';

import HotelSideBar from './components/HotelCompo/HotelSideBar';
import HotelsData from './components/HotelCompo/HotelsData';
import Hotel from './components/HotelCompo/Hotel';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import NavbarHotel from './components/Navbar/NavbarHotel';
import ConstNav from './components/Navbar/ConstNav';

function App() {
  const {pathname} =useLocation()
  // console.log(pathname)
  return (
    <div className="App">
       {/* <Hotel/> */}
       {(pathname=="/")?<Header />:null}
       {pathname=="/hotels_home"?<Header/>:"" }
      {(pathname=="/")?<Navbar/>:""}
      {pathname=="/hotels_home"?<NavbarHotel/>:"" }
      {pathname=="/flight"?<ConstNav/>:"" }
      <MainRoutes />
    </div>
  );
}

export default App;
