import { Heading,Image ,Box,Text, Grid} from '@chakra-ui/react';
import React from 'react';
import img from '../../Asssets/landingPage(1).png'
const Hero = () =>{
  return(
    <Box className='hero' display={"flex"} flexDirection="row" justifyContent={"space-evenly"} mt="8vh">
      <Box position={"relative"} left="-5vw" rowGap={"70px"} >
        {/* <Heading>COORDINATE</Heading> */}
        <Text fontSize={"6xl"} color={"blue.600"} fontWeight="semibold" ml="-1vw">Coordinate</Text>
        <Text fontSize={"6xl"} color={"blue.600"} fontWeight="semibold">Tasks Better</Text>
        <Text fontSize={"3xl"} color={"blue.600"} fontWeight="semibold" ml="-1vw">Empowering Teams <br></br> to achieve success, <br></br>
        one project at a time
        </Text>
        {/* <Text fontSize={"5xl"}>TASKS</Text> */}
        {/* <Text fontSize={"5xl"}>Better</Text> */}
      </Box>
      <Image src={img} width="fit-content" height={"60vh"}/>
    </Box>
  )
}

export default Hero;
