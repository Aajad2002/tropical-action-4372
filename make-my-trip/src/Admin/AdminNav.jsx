import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminHotel from './AdminHotel'
import AdminHomeStay from './AdminHomeStay'

const AdminNav = () => {
  const [hotel,setHotel]=useState(false)
  const [homeStay,setHomeStay]=useState(false)
const handlehotel=()=>{
  setHotel(true)
  setHomeStay(false)
}
const handleHomStay=()=>{
  setHotel(false)
  setHomeStay(true)
}
  return (
    <Box>

    <div style={{display:'flex'}}>
      <h1>Admin</h1>
      <h2 onClick={handlehotel}>Hotel</h2>
      <h2 onClick={handleHomStay}>HomeStay</h2>
    </div>
    {hotel? <AdminHotel/>:homeStay?<AdminHomeStay/>:"Admin Page Go through"}
    </Box>
  )
}

export default AdminNav