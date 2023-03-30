import logo from './logo.svg';
import './App.css';
import { MainRoutes } from './pages/MainRoutes';
import HotelSideBar from './components/HotelCompo/HotelSideBar';
import HotelsData from './components/HotelCompo/HotelsData';
import Hotel from './components/HotelCompo/Hotel';
function App() {
  return (
    <div className="App">
      {/* <MainRoutes />
       */}
       {/* <HotelSideBar/>
       <HotelsData/> */}
       <Hotel/>
    </div>
  );
}

export default App;
