import React, { useState } from 'react';
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineUserDelete } from "react-icons/ai"
import { Center, Link } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getDate } from '../../Redux/FlightReducer/action';
import {
    Flex,Box,Wrap,FormLabel,Text,Input
  } from '@chakra-ui/react'
const AeroplaneSearch = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const [firstVal, setFirstVal] = useState("")
    const [lastVal, setLastVal] = useState("")
    const [traveller, setTraveller] = useState(1)
    const dispatch = useDispatch()
    const handleFirstVal = (e) => {
        setFirstVal(e.target.value)
    }
    const handleLastVal = (e) => {
        setLastVal(e.target.value)
    }
    let search;
    if (firstVal === "Hyderabad" && lastVal === "Bangalore") {
        search = ("hyderabad_bangalore")
    } else if (firstVal === "Hyderabad" && lastVal === "Delhi") {
        search = ("hyderabad_delhi")
    } else if (firstVal === "Hyderabad" && lastVal === "Chennai") {
        search = ("hyderabad_chenni")
    } else if (firstVal === "Hyderabad" && lastVal === "Mumbai") {
        search = ("hyderabad_mumbai")
    }
    // console.log(search,"search")
    const handleSrc = () => {
        //     localStorage.setItem("search", JSON.stringify(search));
        //     let params = {
        //       }
        //       search && (params.search=search);
        //       setSearchParam(params)
    }
    const basicBoxStyles = {
        // display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'center',
        boxSize: '200px',
        color: 'black',
        px: 4,
        borderRadius: 'md',
        boxShadow: 'md',
      }
      
      return (
        <Box px="10%">
          <Flex flexWrap='wrap' justifyContent='space-evenly' alignItems='center'>
            <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <Text fontSize='3xl'>From</Text>
      <select style={{
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        fontSize: '16px'
      }} className='first_bold'
        type="text"
        name="from"
        onChange={handleFirstVal}
      >
        <option>Select</option>
        <option value='Hyderabad'>Hyderabad</option>
        <option value='Bangalore'>Bangalore</option>
        <option value='Mumbai'>Mumbai</option>
        <option value='Delhi'>Delhi</option>
        <option value='Chennai'>Chennai</option>
      </select>
            </Box>
            <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <Text fontSize='3xl'>To</Text>
      <select style={{
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        fontSize: '16px'
      }} className='first_bold'
        type="text"
        name="from"
        onChange={handleFirstVal}
      >
        <option>Select</option>
        <option value='Hyderabad'>Hyderabad</option>
        <option value='Bangalore'>Bangalore</option>
        <option value='Mumbai'>Mumbai</option>
        <option value='Delhi'>Delhi</option>
        <option value='Chennai'>Chennai</option>
      </select>
            </Box>
            <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
              <p>Traveller & Class </p>
              <span className='first_bold'>{traveller}</span><span className='second_bold'>Traveller</span><span>&nbsp;&nbsp;</span><span>
                <button onClick={() => setTraveller(traveller + 1)}><AiOutlineUserAdd /></button>
                /<button onClick={() => setTraveller(traveller - 1)} disabled={traveller == 1}><AiOutlineUserDelete /></button>
              </span>
              <p>Economy/Premium Economy</p>
              <p style={{ color: "red" }}>Group Bookings Available!</p>
            </Box>
            <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
              <p>Departure </p>
              <div className='second_bold' style={{ paddingTop: "25px", zIndex: "999" }}>
              <Wrap mb="8">
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                    </Text>
                  </FormLabel>
                  <Input
                    type="date"
                    name="birthday"
                  />
                </Wrap>
                </div>
            </Box>
            {/* adding brightness property to the element */}
            <Box sx={basicBoxStyles}  width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
                <p>Return </p>
                <div className='second_bold' style={{ paddingTop: "25px" }}>
                <Wrap mb="8">
                  <FormLabel width={"30%"}>
                    <Text
                      fontWeight={"semibold"}
                      fontSize={"lg"}
                      fontFamily={"Manrope"}
                    >
                    </Text>
                  </FormLabel>
                  <Input
                    type="date"
                    name="birthday"
                  />
                </Wrap>
                    </div>
            </Box>
        </Flex>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <Link href="/flight">
    <button style={{ 
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold'
    }} onClick={handleSrc}>SEARCH</button>
  </Link>
</div>

    </Box>
    );
}

export default AeroplaneSearch;
