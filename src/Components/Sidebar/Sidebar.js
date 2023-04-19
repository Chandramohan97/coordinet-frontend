import { Divider, Box,Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Icon , Image} from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import task from '../../Asssets/task.png'

function Sidebar(props) {

  const propsLength = Object.keys(props).length;

  return (
  <>
    <Box height={{ base: "50vh", md: "70vh" }} width={{ base: "26vw", md: "8vw" }} backgroundColor="#191970"  >
      <Flex flexDirection="row" mt="10vh" ml="5px">
        <Icon as={FaHome} fill="white"  display={"inline"}/>
         {/* To align icon and Text together */}
         <Text color={"white"} fontFamily={"Inder"} fontSize={{base:"14px",md:"14px"}} position={"relative"} top={{ base: "-2.5px", md: "-2.5px" }} 
         left={{ base: "4px", md: "4px" }}>Home</Text>   
      </Flex>
      {/* <Divider></Divider> */}
      {
        propsLength === 1 ? 
        <Box display={"flex"} flexDirection="row">
          {/* <Image src={task} alt="task" fill={"white"} mt="1vh"/> */}
          <Text mt="1vh" color="white" fontSize={{base:"10px",md:"13px"}} fontFamily={"Inder"} textAlign="left" ml="10px" marginTop="12px">
            {props.projectName}
          </Text>
        </Box> : <p>{""}</p>
      }
    </Box>
    <Divider borderColor="grey" mt="12.9vh" position={"absolute"} width={{base:"104%",md:"48%"}}></Divider>
    
    </>
  )
}
export default Sidebar;