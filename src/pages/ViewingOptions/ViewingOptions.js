import React from 'react'
import { Heading,HStack,VStack,Text,Input,Flex,Button,Image} from '@chakra-ui/react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable from '../../Components/Table/StaticTable'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ViewingOptions = () => {

  const location = useLocation();
  const {project,tasks} = location.state;
  console.log(project);
  
  return (
    <div className='ViewingOptions'>
        <Heading textAlign={"left"} fontFamily={"Inder"} 
          fontSize={{base:"16px",md:"40px"}} width={"fit-content"} ml="2vw" mt={"5vh"}>COORDINET</Heading>
          
        <HStack gap="5vw">
            <VStack pl="3vw"  >
                <Flex flexDirection={"column"}  textAlign={"left"}>
                    <Text fontSize={{base:"15px",md:"35px"}} fontFamily="Inder,sans-serif" 
                    textAlign="left" ml="2vw" width={{base:"42vw",md:"21vw"}}>Select the viewing options</Text>
                    <Text fontSize={{base:"8px",md:"16px"}} fontFamily="Inder,sans-serif" pl="2vw" fontWeight={"bold"}> The viewing options can be changed later </Text>
                </Flex>
                <HStack position="relative" ml="2vw" gap="1.5vw" >
                    <Flex flexDirection={"column"} alignItems="center">
                        <Image  src={require('../../Asssets/Kanban.png')} width={{base:"60px",md:"130px"}} 
                        height={{base:"80px",md:"120px"}} alt="Click here to see the preview in kanban view" />
                        <Text fontFamily="Inder,sans-serif" fontWeight={"bold"} fontSize={{base:"10px",md:"12px"}} ml="0px">Kanban view</Text>
                    </Flex>
                    <Flex flexDirection={"column"} alignItems="center">
                        <Image src={require('../../Asssets/spreadsheet.png')} 
                         height={{base:"80px",md:"120px"}} width={{base:"50px",md:"90px"}}  alt="Click here to see the preview in Table view"/>
                        <Text fontFamily="Inder,sans-serif" fontWeight={"bold"} fontSize={{base:"10px",md:"12px"}} ml="0px">Table view</Text>
                     </Flex>
                </HStack>
                

            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar project={project}/>
                <StaticTable taskList={tasks}/>
            </Flex>
        </HStack>

        <Link path="/tableView">     
            <Button 
                color="white"
                bg="#2a9ca1"
                _hover={{bg: "#1C7B7F"}}
                _active={{ bg: "#1f8c95" }}
                position={{base:"fixed",md:"relative"}}
                left={{md:"-10.5vw"}}
                mr={{base:"auto"}}
                right={{base:"0px"}}
                height={{base:"2.5vh",md:"5vh"}}
                width={{base:"3.5vw",md:"7vw"}}
                mt="15px" 
                fontSize={{base:"3xs",md:"medium"}}
                ml={{md:"73.2vw"}} >Next
            </Button>
        </Link>
    </div>
  )
}

export default ViewingOptions