import { Heading,Image ,Box,Text, Grid} from '@chakra-ui/react';
import React from 'react';
import img from '../../Asssets/landingPage(1).png'

const Hero = () =>{
  return(
    <Box className='hero' display={"flex"} flexDirection={{base:"column",md:"row"}} justifyContent={"space-between"} mt="8vh"   >
      <Box position={"relative"}  ml="8vw" textAlign={{base: "center", md: "left"}} >
        {/* <Heading>COORDINATE</Heading> */}
        <Text display={"block"} 
        fontFamily="Inder sans-serif" fontSize={{base:"small",md:"4xl"}} color={"black.600"} fontWeight="semibold">COORDINATE</Text>
        <Text display={"block"} fontFamily="Inder sans-serif" fontSize={{base:"small  ",md:"4xl"}} color={"black.600"} fontWeight="semibold">TASKS BETTER</Text>
        <Text fontSize={{base:"small",md:"2xl"}} fontFamily="Inder sans-serif" color={"black.600"} fontWeight="semibold">Empowering Teams <br></br> to achieve success, <br></br>
        one project at a time
        </Text>
        {/* <Text fontSize={"5xl"}>TASKS</Text> */}
        {/* <Text fontSize={"5xl"}>Better</Text> */}
      </Box>
      <Image src={img} alt="Project Management" marginLeft={{base:"10vw",md:"none"}}
       mr="12vw" width={{base: "auto", md: "fit-content"}} height={{base: "auto", md: "60vh"}} />
    </Box>
  )
}

export default Hero;
