import React from 'react'
import styled from 'styled-components'
import HotelsData from './HotelsData'
import HotelSideBar from './HotelSideBar'

const Hotel = () => {
  return (
    <DIV>
        <div className="side">

        <HotelSideBar/>
        </div>
        <div className="data1">

        <HotelsData/>
        </div>
    </DIV>
  )
}

const DIV=styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: center;
    .side{
        width: 15%;
        border: 1px solid black;
    }
    .data1{
        width: 85%;
       
    }
`
export default Hotel