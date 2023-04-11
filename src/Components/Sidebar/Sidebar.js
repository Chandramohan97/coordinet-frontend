import { Divider, Box,Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Icon , Image} from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"
import task from '../../Asssets/task.png'

function Sidebar(props) {

  const propsLength = Object.keys(props).length;

  return (
  <>
    <Box height="70vh" width={"12vw"} backgroundColor="#191970"  >
      <Flex flexDirection="row" mt="10vh" ml="5px">
        <Icon as={FaHome} fill="white" display={"inline"}/>
        <Text color={"white"} position={"relative"} top="-5px" left="5px">Home</Text>    {/* To align icon and Text together */}
      </Flex>
      <Divider></Divider>
      {
        propsLength === 1 ? 
        <Box display={"flex"} flexDirection="row">
          {/* <Image src={task} alt="task" fill={"white"} mt="1vh"/> */}
          <Text mt="1vh" color="white" fontSize={"16px"} fontFamily={"Inder"} textAlign="left" ml="10px" marginTop="12px">
            {props.project}
          </Text>
        </Box> : <p>{""}</p>
      }
    </Box>
    
    </>
  )
}
export default Sidebar;