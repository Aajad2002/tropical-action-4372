import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HotelCard from './HotelCard';
import styled from 'styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';
const HotelsData = () => {
   const [data,setData]=useState([]);
   const [searchParams]=useSearchParams()
console.log(searchParams)
const location=useLocation()
useEffect(()=>{
  let obj={
    params:{
        star:searchParams.getAll("star"),
        _sort: searchParams.get("sort")&&"price",
        _order:searchParams.get("sort"),
        //  q:searchParams.get("search")
    }
  }
  axios.get(`http://localhost:8080/Data`,obj).then((res)=>{
     setData(res.data)
  })
},[location.search])
  return (
    <DIV>
      {data?.map((el,i)=>{
        return <HotelCard key={i} {...el}/>
      })}
    </DIV>
  )
}
const DIV=styled.div`
padding: 10px;
  height: 100vh;
  overflow-x: auto;
  ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background: #fff;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  height: 70px;
  background: #0084FF;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: red;
}
`
export default HotelsData