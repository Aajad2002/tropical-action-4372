
import {
     Flex, Box, Wrap, FormLabel, Text, Input
   } from '@chakra-ui/react'


export function FlightSearchBar(){
    return (
        <Box px="10%" display="flex" alignItems="center" justifyContent="space-between">  
            <Text fontSize='lg'>Flignt Details:</Text>      
           <Box >
                <span>From:</span>              
           </Box>
           <Box>
                <span>To:</span>
           </Box>
           <Box>
                <span>DEPART:</span>
           </Box>
           <Box>
                <span>RETURN:</span>
           </Box>
        </Box>
    )
}