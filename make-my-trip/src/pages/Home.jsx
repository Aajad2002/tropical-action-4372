import React from 'react';
import { useLocation } from 'react-router-dom';
import AeroplaneSearch from '../components/Aeroplane/AeroplaneSearch';
import Footer from '../components/Footer/Footer';
import MapCarosel1 from '../components/HandpickedSlider/MapCarousel1';
import MapCarosel2 from '../components/UnlockSlider/MapCarosel2';
// import Header from '../components/Header/Header';
// import Navbar from '../components/Navbar/Navbar';


const Home = () => {
  return (
    <div className='home'>
      {/* <Header />
      <Navbar/> */}
      <MapCarosel1/>
      <MapCarosel2/>
      <Footer/>
    </div>
  );
}

export default Home;
