import React from 'react'
import { Heading,HStack,VStack,Text,Input,Flex,Button, Image} from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable1 from '../../Components/Table/StaticTable1'

const ViewingOptions = () => {
  return (
    <div className='ViewingOptions'>
         <Heading textAlign={"left"} fontFamily={"Inder,sans-serif"} fontSize="40px" ml="2vw" mt={"5vh"}>COORDINET</Heading>
        <HStack gap="5vw">
            <VStack pl="3vw" >
                <Text fontSize={"35px"} fontFamily="Inder,sans-serif" textAlign="left" ml="2vw" width="21vw">Select the viewing options</Text>
                <Text fontFamily="Inder,sans-serif" pl="2vw" fontWeight={"bold"}> The viewing options can be changed later </Text>
                <HStack position="relative" ml="2vw" gap="1.5vw" >
                    <Flex flexDirection={"column"} alignItems="center">
                        <Image  src={require('../../Asssets/Kanban.png')} width={"130px"} height={"120px"}
                        alt="Click here to see the preview in kanban view" />
                        <Text fontFamily="Inder,sans-serif" fontWeight={"bold"} fontSize="12px" ml="0px">Kanban view</Text>
                    </Flex>

                    <Flex flexDirection={"column"} alignItems="center">
                        <Image src={require('../../Asssets/spreadsheet.png')} width={"100px"} height={"120px"}
                        alt="Click here to see the preview in Table view"/>
                        <Text fontFamily="Inder,sans-serif" fontWeight={"bold"} fontSize="12px" ml="0px">Table view</Text>
                     </Flex>
                </HStack>
                

            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar/>
                <StaticTable1 />
            </Flex>
        </HStack>
        <Button 
        color="white"
        bg="#31bfc8"
        _hover={{ bg: "#2a9ca1" }} //blue-green
        _active={{ bg: "#555555" }}
        mt="15px" 
        height={"38px"} 
        width="100px" 
        ml="81.5vw" >Next</Button>
    </div>
  )
}

export default ViewingOptions