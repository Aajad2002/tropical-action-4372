import React, { useState } from 'react'
import {
    Box, Button, Flex, Select, Image, Text, useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Input
} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { deleteHomstayData, patchHomstayData } from '../Redux/HomeStaysReducer/action'

const CardHomeStay = ({ el,setEdit }) => {
    const {id, image, rating, imageArray, imageUpper, review, name, location, descLocation, description, subDescription, desc, cancelPrice, price, deal } = el
    const [homeStay, setHotel] = useState(el)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const handleChange = (e) => {
        const { name, value } = e.target
        setHotel((prev) => {
            return { ...prev, [name]: value }
        })
    }
    console.log(homeStay)
    const handleDelete = () => {
        deleteHomstayData(id)
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
    patchHomstayData(id, homeStay)
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
            <Image w={"95%"} h={200} src={image} alt={""} />
            <Text>Name:-{name}</Text>
            <Text>Address:-{desc}</Text>
            <Text>Price:-{price}</Text>
            {/* <Text>Star:-{star}</Text> */}
            {/* <Text>City:-{city}</Text> */}
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
                            <Box display={"flex"} flexDirection={"column"} width={"50%"} border={"1px solid black"} padding={"20px"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.3) 6px 3px 6px"} margin={"auto"}>

                                <Text fontSize={"25px"} textAlign={"center"} fontWeight={"bold"} padding={"10px"}>HomeStay Database</Text>
                                <label>Image</label>
                                <Input value={homeStay.image} name='image' type='url' onChange={handleChange} />
                                {/* <label >Rating</label>
  <Input value={homeStay.rating} name='rating' type='text' onChange={handleChange} />
  <label >Review</label>
  <Input value={homeStay.review} name='review' type='text' onChange={handleChange} /> */}
                                <label >Name</label>
                                <Input value={homeStay.name} name='name' type='text' onChange={handleChange} />
                                <label >Location</label>
                                <Input value={homeStay.location} name='location' type='text' onChange={handleChange} />
                                <label >Description</label>
                                <Input value={homeStay.description} name='description' type='text' onChange={handleChange} />
                                <label >SubDescription</label>
                                <Input value={homeStay.subDescription} name='subDescription' type='text' onChange={handleChange} />
                                <label >Desc</label>
                                <Input value={homeStay.desc} name='desc' type='text' onChange={handleChange} />
                                <label >Price</label>
                                <Input value={homeStay.price} name='price' type="number" onChange={handleChange} />
                                <label >Cancel Price</label>
                                <Input value={homeStay.cancelPrice} name='cancelPrice' type='text' onChange={handleChange} />
                                <label >Deal</label>
                                <Input value={homeStay.deal} name='deal' type='text' onChange={handleChange} />
                                <label >Detail</label>
                                <Input value={homeStay.detail} name='detail' type='text' onChange={handleChange} />
                                <label >Saving</label>
                                <Input value={homeStay.saving} name='saving' type='text' onChange={handleChange} />
                                <label>Main Location</label>
                                <Select value={homeStay.locationForSort} name='locationForSort' onChange={handleChange}>
                                    <option value="">Select HomeStays</option>
                                    <option value="SouthGoa">South Goa</option>
                                    <option value="NorthGoa">North Goa</option>
                                    <option value="BeachProperty">Beach Property</option>
                                    <option value="Villa">Villa</option>
                                </Select>                               
                            </Box>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={handleClick}>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Button>
            <Button onClick={handleDelete} colorScheme='red'>Delete</Button>
        </Box>
    )
}

export default CardHomeStay