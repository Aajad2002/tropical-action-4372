import React, { useState } from 'react';
import { AiOutlineUserAdd } from "react-icons/ai"
import { AiOutlineUserDelete } from "react-icons/ai"
import {Link} from '@chakra-ui/react';
import {
    Flex,Box,Wrap,FormLabel,Text,Input,Button
  } from '@chakra-ui/react'
const HomeStaySearch = () => {
    const [customer, seCustomer] = useState(1)
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
            <Text fontSize='3xl'>CITY OR LOCATION</Text>
            <select style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid black',
              fontSize: '16px'
            }} className='first_bold'
              type="text"
              name="from"
            >
              <option>Select</option>
              <option value='goa'>Goa</option>
              <option value='banglore'>Banglore</option>
              <option value='mumbai'>Mumbai</option>
              <option value='jaipur'>jaipur</option>
              <option value='delhi'>Delhi</option>
              <option value='manali'>Manali</option>
              <option value='shimla'>Shimla</option>
              <option value='ooty'>Ooty</option>
            </select>
          </Box>
          <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <p>ROOMS & GUESTS </p><span className='second_bold'>Adults</span><span>&nbsp;&nbsp;</span>{customer}<span>
              <button onClick={() => seCustomer(customer + 1)}><AiOutlineUserAdd /></button>
              /<button onClick={() => seCustomer(customer - 1)} disabled={customer == 1}><AiOutlineUserDelete /></button>
            </span>
            <p>Economy/Premium Economy</p>
            <p style={{ color: "red" }}>Group Bookings Available!</p>
          </Box>
          <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <Text fontSize='3xl'>TRAVELLING FOR</Text>
            <select style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid black',
              fontSize: '16px'
            }} className='first_bold'
              type="text"
              name="from"
            >
              <option>Select a Reason</option>
              <option value='Work'>Work</option>
              <option value='Leisure'>Leisure</option>
            </select>
          </Box>
          <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <p>CHECK-IN </p>
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
          <Box sx={basicBoxStyles} width='100%' maxWidth={['100%', '100%', '50%', '25%']} border='1px' borderColor='black' mb={[4, 4, 0, 0]} mr={[0, 0, 4, 4]}>
            <p>CHECK-OUT </p>
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
          <Link href="/home_stay">
            <button style={{
              backgroundColor: 'blue',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>SEARCH</button>
          </Link>
        </div>
  
      </Box>
    );
}

export default HomeStaySearch;
