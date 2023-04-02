import React, { useState } from 'react'
import {
  Box, Button, Flex,Select, Image, Text, useDisclosure, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Input
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { deleteHotelData ,patchHotelData} from '../Redux/HotelReducer/action'
// import EditData from './EditHotelData'
import { Link } from 'react-router-dom'

const CardHotel = ({ el,setEdit}) => {
  const { id, HotelName, image, price, rating, star, desc, city}=el
  const [hotel,setHotel]=useState(el)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleChange = (e) => {
    const { name, value } = e.target
    setHotel((prev) => {
      return { ...prev, [name]: value }
    })
  }
  console.log(hotel)
  const handleDelete = () => {
    deleteHotelData(id)
    Swal.fire({
      title: 'Hotel Data Deleted Successfully!',
      showConfirmButton: false,
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 1500

    })
    setEdit((prev)=>!prev)
    
  }
  const handleClick = () => {
    patchHotelData(id, hotel)
    Swal.fire({
      title: '',
      showConfirmButton: false,
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      timer: 1500
      
    })
    setEdit((prev)=>!prev)
  }
  return (
    <Box w={"450px"} >
      <Image w={"95%"} h={200} src={image} alt={star} />
      <Text>Name:-{HotelName}</Text>
      <Text>Address:-{desc}</Text>
      <Text>Price:-{price}</Text>
      <Text>Star:-{star}</Text>
      <Text>City:-{city}</Text>
      {/* <Link to={`/adminHotel/${id}`}>  <Button  colorScheme='green'>Edit</Button></Link> */}
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>Edit
        <Drawer size={"xl"}
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader textAlign={'center'}>Edit Data</DrawerHeader>

            <DrawerBody>
              {/* <Input placeholder='Type here...' /> */}
              <label>Hotel name</label>
            <Input value={hotel.HotelName} name='HotelName' type='text' onChange={handleChange} />
            <label >Address</label>
            <Input value={hotel.desc} name='desc' type='text' onChange={handleChange} />
            <label>City</label>
            <Select value={hotel.city} name='city' onChange={handleChange}>
              <option value="">Select Hotel City</option>
              <option value="goa">Goa</option>
              <option value="delhi">Delhi</option>
              <option value="banglore">Banglore</option>
              <option value="mumbai">Mumbai</option>
              <option value="jaipur">Jaipur</option>
              <option value="shimla">Shimla</option>
              <option value="ooty">Ooty</option>
            </Select>
            <label>Hotel Image</label>
            <Input value={hotel.image} name='image' type="text" onChange={handleChange} />
            <label>Price /per night</label>
            <Input value={hotel.price} name='price' type='text' onChange={handleChange} />
            <label >Hotel Star</label>
            <Input value={hotel.star} name='star' type="text" onChange={handleChange} />
            <label>Hotel Rating</label>
            <Input value={hotel.rating} name='rating' type="number" onChange={handleChange} />
            </DrawerBody>
           
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'onClick={handleClick}>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Button>
      <Button onClick={handleDelete} colorScheme='red'>Delete</Button>
    </Box>
  )
}

export default CardHotel