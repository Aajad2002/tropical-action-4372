import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
<<<<<<< HEAD
import HotelSideBar from './components/HotelCompo/HotelSideBar';
import HotelsData from './components/HotelCompo/HotelsData';
import Hotel from './components/HotelCompo/Hotel';
=======
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import NavbarHotel from './components/Navbar/NavbarHotel';
import ConstNav from './components/Navbar/ConstNav';
>>>>>>> 5943a9b8da5d1c6e672124d2e7ee47f4ca7e8864
function App() {
  const {pathname} =useLocation()
  // console.log(pathname)
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <MainRoutes />
       */}
       {/* <HotelSideBar/>
       <HotelsData/> */}
       <Hotel/>
=======
       {(pathname=="/")?<Header />:null}
       {pathname=="/hotels_home"?<Header/>:"" }
      {(pathname=="/")?<Navbar/>:""}
      {pathname=="/hotels_home"?<NavbarHotel/>:"" }
      {pathname=="/flight"?<ConstNav/>:"" }
      <MainRoutes />
>>>>>>> 5943a9b8da5d1c6e672124d2e7ee47f4ca7e8864
    </div>
  );
}

export default App;
