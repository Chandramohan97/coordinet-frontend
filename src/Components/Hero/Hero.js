import { Heading,Image ,Box,Text} from '@chakra-ui/react';
import React from 'react';
import img from '../../Asssets/landingPage(1).png'
const Hero = () =>{
  return(
    <Box className='hero' display={"flex"} flexDirection="row" justifyContent={"space-evenly"} mt="10vh">
      <Box position={"relative"} left="-10vw" rowGap={"70px"}>
        <Heading>Coordinet</Heading>
        <Text>Cordinate your tasks better</Text>
      </Box>
      <Image src={img} width="fit-content" />
    </Box>
  )
}

export default Hero;
