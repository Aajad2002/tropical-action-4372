import React from 'react';
import styled from 'styled-components';
const FlightSideBar = () => {
  return (
    <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",backgroundColor:"white",borderRadius:"5px",padding:"1rem",width:"20%"}}>
    <DIV>
    <h3>Popular Filters</h3>
    <div>
    <input type="checkbox" value="non_stop"/>
    <label>Non Stop</label>
    </div>
    <div>
    <input type="checkbox" value="morning"/>
    <label>Morning Departures</label>
    </div>
    <div>
    <input type="checkbox" value="indigo" />
    <label>IndiGo</label>
    </div>
    <div>
    <input type="checkbox" value="vistara" />
    <label>Vistara</label>
    </div>
    <hr />
    </DIV>
    <DIV class="slidecontainer">
      <h3>One Way Price</h3>
  <input type="range" min="1" max="100" class="slider" id="priceRange"/>
  <hr />
    </DIV>
    <DIV>
    <h3>Stop From New Delhi</h3>
    <div>
    <input type="checkbox" value="non_stop"/>
    <label>Non Stop</label>
    </div>
    <div>
    <input type="checkbox" value="1stop"/>
    <label>1 Stop</label>
    </div>
    <div>
    <input type="checkbox" value="1+stop" />
    <label>1+Stop</label>
    </div>
    <hr />
    </DIV>
    <DIV>
    <h3>Airlines</h3>
    <div>
    <input type="checkbox" value="airindia"/>
    <label>Air India</label>
    </div>
    <div>
    <input type="checkbox" value="airasia"/>
    <label>Air Asia</label>
    </div>
    <div>
    <input type="checkbox" value="akasaair" />
    <label>Akasa Air</label>
    </div>
    <div>
    <input type="checkbox" value="gofirst"/>
    <label>Go First</label>
    </div>
    <div>
    <input type="checkbox" value="indigo"/>
    <label>IndiGo</label>
    </div>
    <div>
    <input type="checkbox" value="spicejet" />
    <label>SpiceJet</label>
    </div>
    </DIV>
    {/* <DIV onChange={handleSort}>
      <h3>Sorting..</h3>
      <div>
        <input type="radio" value={"asc"} name="sort" defaultChecked={order==="asc"}/>
        <label>Ascending</label>
      </div>
      <div>
        <input type="radio" value={"desc"} name="sort" defaultChecked={order==="desc"}/>
        <label>Descending</label>
      </div>
    </DIV> */}
    </div>
  );
}
const DIV=styled.div`
display:flex;
flex-direction:column;

h3{
  font-size:1.5em;
  font-weight: bold;
}
`
export default FlightSideBar;
