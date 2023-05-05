import React from 'react'
import { Text,Stack,Box, Flex, Button, Menu, MenuButton, MenuItem, MenuList,Select } from '@chakra-ui/react'
import { Link as L2 } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CustomButton from '../../Components/button/CustomButton'
import Navbar from '../../Components/Navbar/Navbar'
import { IconButton } from '@chakra-ui/react'
import Hero from '../../Components/Hero/Hero'
import { HamburgerIcon } from '@chakra-ui/icons'
const HomePage = () => {

  const [isVisible,setVisible] = React.useState(false);
  
  const toggleMenu = () =>{
    setVisible(!isVisible)
  }
  return (
    <>
     <Navbar/>
      <Hero/>
    </>

  )
}

export default HomePage;
