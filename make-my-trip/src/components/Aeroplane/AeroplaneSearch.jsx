import React from 'react';
import "./AeroplaneSearch.css"
const AeroplaneSearch = () => {
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
                    <h1 className='first_bold'>Delhi</h1>
                    <p>DEL,Delhi Airport India</p>
                </div>
                <div>
                    <span className='location_opt_float'>&#8651;</span>
                </div>
                <div className='location_opt'>
                    <p>To</p>
                    <h1 className='first_bold'>Bengaluru</h1>
                    <p>BLR,Bengaluru Airport India</p>
                </div>
                <div className='location_opt'>
                    <p>Departure </p>
                    <span className='first_bold'>29</span><span className='second_bold'>Mar'23</span>
                    <p>wednesday</p>
                </div>
                <div className='location_opt'>
                    <p>Return </p>
                    <span className='first_bold'>29</span><span className='second_bold'>Mar'23</span>
                    <p>Thursday</p>
                </div>
                <div className='location_opt'>
                    <p>Traveller & Class </p>
                    <span className='first_bold'>1</span><span className='second_bold'>Traveller</span>
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
