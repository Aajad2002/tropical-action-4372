import React, { useEffect, useState } from 'react'
import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import AdminHotelForm from './AdminHotelForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotelData, getHotelData } from '../Redux/HotelReducer/action';
import CardHotel from './CardHotel';
// import EditData from './EditHotelData';
const AdminHotel = () => {
    const [add,setAdd]=useState(false);
    const [edit,setEdit]=useState(false)
    const dispatch=useDispatch()
    const {hotels}=useSelector((store)=>store.HotelReducer)

// console.log(hotels);

useEffect(()=>{
   dispatch(getHotelData())
},[edit,add])
  return (
    <Box style={{position:'relative'}}>
       {add?<AdminHotelForm setAdd={setAdd}/>:<Button onClick={()=>setAdd(true)}> + Add Hotel</Button>} 
      {/* {edit && <EditData />} */}
        <SimpleGrid w={"95%"} m={"auto"} columns={[1,2,3]} spacing={10}>
            {
                hotels?.reverse().map((el,i)=>{
                    return <CardHotel setEdit={setEdit} key={i} el={el} />
                })
            }
        </SimpleGrid>
    </Box>
  )
}

export default AdminHotel