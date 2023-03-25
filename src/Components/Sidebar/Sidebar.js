import { Divider, Box,Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Icon } from "@chakra-ui/react"
import { FaHome } from "react-icons/fa"

function Sidebar(props) {
 
  return (
  <>
    <Box height="70vh" width={"12vw"} backgroundColor="#191970"  >
      <Flex flexDirection="row" mt="10vh" ml="1vw">
        <Icon as={FaHome} fill="white" display={"inline"}/>
        <Text color={"white"} position={"relative"} top="-5px" ml="5px">Home</Text>
      </Flex>
      <Divider></Divider>
    </Box>
    
    </>
  )
}
export default Sidebar;