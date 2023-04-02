import React, { useState } from 'react';
import "./AeroplaneSearch.css"
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineUserDelete } from "react-icons/ai"
import DataCalender from './DateCalender';
import { Link } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getDate } from '../../Redux/FlightReducer/action';
const AeroplaneSearch = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const [firstVal,setFirstVal]=useState("")
    const [lastVal,setLastVal]=useState("")
    const [search,setSearch]=useState("")
    const [traveller, setTraveller] = useState(1)
    const dispatch=useDispatch()
    const handleFirstVal=(e)=>{
        setFirstVal(e.target.value)
    }
    const handleLastVal=(e)=>{
        setLastVal(e.target.value)
    }
    console.log(firstVal)
    console.log(lastVal)
    if(firstVal==="Hyderabad" && lastVal==="Bangalore"){
        setSearch("hyderabad_bangalore")
    }else if(firstVal==="Hyderabad" && lastVal==="Delhi"){
        setSearch("hyderabad_delhi")
    }else if(firstVal==="Hyderabad" && lastVal==="Chennai"){
        setSearch("hyderabad_chenni")
    }else if(firstVal==="Hyderabad" && lastVal==="Mumbai"){
        setSearch("hyderabad_mumbai")
    }
    console.log(search,"search")
    const handleSrc=()=>{
    
        // let params = {
        //   }
        //   search && (params.search=search);
        //   setSearchParam(params)
    }
    // console.log((DataCalender().props.selected))
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
                       onChange={handleFirstVal}
                    >
                        <option>select</option>
                        <option value='Hyderabad'>Hyderabad</option>
                        <option value='Bangalore'>Bangalore</option>
                        <option value='Mumbai'>Mumbai</option>
                        <option value='Delhi'>Delhi</option>
                        <option value='Chennai'>Chennai</option>
                    </select>
                </div>
                {/* <div>
                    <span className='location_opt_float'>&#8651;</span>
                </div> */}
                <div className='location_opt'>
                    <p>To</p>
                    <select className='first_bold'
                        type="text"
                        name="from"
                        onChange={handleLastVal}
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
                    <div className='second_bold' style={{ paddingTop: "25px",zIndex:"999" }}><DataCalender /></div>
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
                        <label>Regula</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label>
                    </span>
                    <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular</label>
                    </span>
                    {/* <span className='back_shadow'>
                        <input type="radio" />
                        <label>Regular Fares</label></span> */}
                </div>
                {/* <div className='second_div_last'>
                    <span>Trending Search:</span>
                    <span className='back_shadow' style={{textAlign:"center"}}>Chenni
                        <span>&#8594;</span>Kuala Lumpur</span>
                    <span className='back_shadow'>Chenni
                        <span>&#8594;</span>Hyderabad</span>
                </div> */}
            </div>
            <Link href="/flight">
            <button className='src_btn' onClick={handleSrc}>SEARCH</button>
                </Link>
            
        </div>
    );
}

export default AeroplaneSearch;
