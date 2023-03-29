import React from 'react';
import AeroplaneSearch from '../components/Aeroplane/AeroplaneSearch';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


const Home = () => {
  return (
    <div className='home2'>
      <Header />
      <Navbar/>
      {/* <div style={{position:'relative',top:'-380px', marginLeft:"6%"}}>
      <AeroplaneSearch/> */}
      {/* </div> */}
    </div>
  );
}

export default Home;
