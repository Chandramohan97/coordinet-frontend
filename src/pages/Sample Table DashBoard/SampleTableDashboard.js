import { Flex,Heading, HStack,Input,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable from '../../Components/Table/StaticTable'

const SampleTableDashboard = () => {
  return (
    <div className='sampleTable'>
        <Heading textAlign={"left"} ml="2vw">Coordinet</Heading>
        <HStack gap="5vw">
            <VStack overflowX="hidden" width={"fit-content"}>
                <Text fontSize={"35px"} textAlign="left" ml="3vw" width="21vw">What's your team working on ?</Text>
                <Input alignItems={"left"} width={"17.5vw"} backgroundColor="white"/>   
            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar/>
                <StaticTable/>
            </Flex>
        </HStack>
    </div>
  )
}

export default SampleTableDashboard