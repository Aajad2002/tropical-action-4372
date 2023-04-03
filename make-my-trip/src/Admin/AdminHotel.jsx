import React, { useEffect, useState } from 'react'
import AdminHotelForm from './AdminHotelForm';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHotelData, getHotelData } from '../Redux/HotelReducer/action';
import "../Admin/adminHotel.css"
import CardHotel from './CardHotel';

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
    <div className='main'>
      <div className='btnDiv'>
      {add?<AdminHotelForm setAdd={setAdd} setEdit={setEdit}/>:<button style={{ background:"linear-gradient(#061526, #144073)"  }} onClick={()=>setAdd(true)}> Add Hotel</button>} 
      </div>
      
      {/* {edit && <EditData />} */}
        {/* <SimpleGrid w={"95%"} m={"auto"} columns={[1,2,3]} spacing={10}> */}
        <div className='hotelData'>
        {
                hotels?.reverse().map((el,i)=>{
                    return <CardHotel setEdit={setEdit} key={i} el={el} />
                })
            }
        </div>
            
        {/* </SimpleGrid> */}
    </div>
  )
}

export default AdminHotel