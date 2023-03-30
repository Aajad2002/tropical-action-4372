import React from 'react';
import styled from 'styled-components';
const AvailFlights = () => {
    return (
        <div style={{width: "80%" }}>
            <H3>Flights from Chennai to Bengaluru</H3>
            <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", backgroundColor: "white", borderRadius: "5px", padding: "1rem", width: "100%",height:"100%" }}>
            </div>
        </div>
    );
}
const H3=styled.h3`
  font-size:1.5em;
  font-weight: bold;
`
export default AvailFlights;
