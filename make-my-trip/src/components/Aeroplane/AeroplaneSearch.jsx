import React, { useState } from 'react';
import "./AeroplaneSearch.css"
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineUserDelete } from "react-icons/ai"
import { DataCalender } from './DateCalender';
const AeroplaneSearch = () => {
    const [traveller, setTraveller] = useState(1)

    return (
        <div className='outer_div'>
            <div className='first_div'>
                <div className='way_options'>
                    <span className='way_type'>
                        <input type="radio" />
                        <label>One Way</label>
                    </span>
                    <span className='way_type'>
                        <input type="radio" />
                        <label>Round Trip</label>
                    </span>
                    <span className='way_type'>
                        <input type="radio" />
                        <label>Multi city</label>
                    </span>
                </div>
                <div>
                    <p>Book International and Domestic Flight</p>
                </div>
            </div>
            <div className='location_select'>
                <div className='location_opt'>
                    <p>From</p>
                    <select className='first_bold'
                        type="text"
                        name="from"
                        placeholder=""
                    >
                        <option>select</option>
                        <option value='Hyderabad'>Hyderabad</option>
                        <option value='Bangalore'>Bangalore</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Chennai'>Chennai</option>
                    </select>
                </div>
                <div>
                    <span className='location_opt_float'>&#8651;</span>
                </div>
                <div className='location_opt'>
                    <p>To</p>
                    <select className='first_bold'
                        type="text"
                        name="from"
                        placeholder=""
                    >
                        <option>select</option>
                        <option value='Hyderabad'>Hyderabad</option>
                        <option value='Bangalore'>Bangalore</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Chennai'>Chennai</option>
                    </select>
                </div>
                <div className='location_opt'>
                    <p>Departure </p>
                    <div className='second_bold' style={{ paddingTop: "25px" }}><DataCalender /></div>
                </div>
                <div className='location_opt'>
                    <p>Return </p>
                    <div className='second_bold' style={{ paddingTop: "25px" }}><DataCalender /></div>
                </div>
                <div className='location_opt'>
                    <p>Traveller & Class </p>
                    <span className='first_bold'>{traveller}</span><span className='second_bold'>Traveller</span><span>&nbsp;&nbsp;</span><span>
                        <button onClick={() => setTraveller(traveller + 1)}><AiOutlineUserAdd /></button>
                        /<button onClick={() => setTraveller(traveller - 1)} disabled={traveller == 1}><AiOutlineUserDelete /></button>
                    </span>
                    <p>Economy/Premium Economy</p>
                    <p style={{ color: "red" }}>Group Bookings Available!</p>
                </div>
            </div>
            <div className='last_opts'>
                <div className='first_div_last'>
                    <span>Select A Fare Type:</span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label></span>
                </div>
                <div className='second_div_last'>
                    <span>Trending Search:</span>
                    <span className='back_shadow'>Chenni
                        <span>&#8594;</span>Kuala Lumpur</span>
                    <span className='back_shadow'>Chenni
                        <span>&#8594;</span>Hyderabad</span>
                </div>
            </div>
            <button className='src_btn'>SEARCH</button>
        </div>
    );
}

export default AeroplaneSearch;
