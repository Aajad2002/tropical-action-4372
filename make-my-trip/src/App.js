import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import NavbarHotel from './components/Navbar/NavbarHotel';
function App() {
  const {pathname} =useLocation()
  console.log(pathname)
  return (
    <div className="App">
       <Header />
      {(pathname=="/")?<Navbar/>:""}
      {pathname=="/hotels_home"?<NavbarHotel/>:"" }
      <MainRoutes />
    </div>
  );
}

export default App;
