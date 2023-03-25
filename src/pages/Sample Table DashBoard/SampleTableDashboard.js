import { Flex,Heading, HStack,Input,Text, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable from '../../Components/Table/StaticTable'

const SampleTableDashboard = () => {
  return (
    <div className='sampleTable'>
        <Heading textAlign={"left"} fontFamily={"Inder"} fontSize="40px" ml="2vw" mt={"5vh"}>COORDINET</Heading>
        <HStack gap="5vw">
            <VStack pl="3vw">
                <Text fontSize={"35px"} textAlign="left"     width="21vw">What's your team working on ?</Text>
                <Input 
                placeholder='Name of the Project, eg. First Project'
                focusBorderColor='transparent'
                marginRight={"20px !important"} 
                width={"20vw"} 
                rounded="10px" 
                height={"40px"} 
                backgroundColor="white"/>   
            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar/>
                <StaticTable/>
            </Flex>
        </HStack>
        <Button 
        color="white"
        bg="#31bfc8"
        mt="15px" 
        height={"38px"} 
        width="100px" 
        ml="81.5vw" >Next</Button>
    </div>

  )
}

export default SampleTableDashboard