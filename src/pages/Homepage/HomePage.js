import React from 'react'
import { Text,Stack,Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
const HomePage = () => {

  return (
    
    // <Flex my={"30px"} flexDirection={"row"} justifyContent="space-around"  background="#F7F8FC">
    <>
      <Navbar/>
      <Hero/>
    </>
  
  )
}

export default HomePage;
