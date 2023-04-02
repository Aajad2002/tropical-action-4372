import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HomeStayForm from './AdminHomeStaysForm';
import { SimpleGrid,Button,Box } from '@chakra-ui/react';
import { getHomeStayData } from '../Redux/HomeStaysReducer/action';
import CardHomeStay from './CardHomeStay';
const AdminHomeStay = () => {
    const [add,setAdd]=useState(false);
    const [edit,setEdit]=useState(false)
    const dispatch=useDispatch()
    const {homeStays} = useSelector((store)=>store.homeStaysReducer)


// console.log(hotels);

useEffect(()=>{
   dispatch(getHomeStayData())
},[edit,add])
  return (
    <Box style={{position:'relative'}}>
       {add?<HomeStayForm setAdd={setAdd}/>:<Button onClick={()=>setAdd(true)}> + Add HomeStay</Button>} 
      {/* {edit && <EditData />} */}
        <SimpleGrid w={"95%"} m={"auto"} columns={[1,2,3]} spacing={10}>
            {
                homeStays?.map((el,i)=>{
                    return <CardHomeStay setEdit={setEdit} key={i} el={el} />
                })
            }
        </SimpleGrid>
    </Box>
  )
}

export default AdminHomeStay