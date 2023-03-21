import { Heading,Image ,Box,Text, Grid} from '@chakra-ui/react';
import React from 'react';
import img from '../../Asssets/landingPage(1).png'
const Hero = () =>{
  return(
    <Grid className='hero' display={"flex"} flexDirection="row" justifyContent={"space-evenly"} mt="10vh">
      <Grid position={"relative"} left="-10vw" rowGap={"70px"}>
        <Heading>Coordinet</Heading>
        <Text>Cordinate your tasks better</Text>
      </Box>
      <Image src={img} width="fit-content" />
    </Grid>
  )
}

export default Hero;
