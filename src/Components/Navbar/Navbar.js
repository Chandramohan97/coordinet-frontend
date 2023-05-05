  import { Flex, Text, Box, Image} from '@chakra-ui/react'
  // import { useMediaQuery } from 'react-responsive';
  import { Link as L2 }  from '@chakra-ui/react'
  import { Link } from 'react-router-dom'
  import { Button } from '@chakra-ui/react'
  import img from "../../Asssets/landingPage(1).png"
  import './Navbar.css'
  // import { HamburgerIcon } from '@chakra-ui/icons'
  import React from 'react'
  import { useMediaQuery } from 'react-responsive'
  // const path = require('path');

  const Navbar = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
      <>
        {isMobile == true ? (
          <div className='dropdown'>
            <button marginTop={"2vh"} className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">A1</a>
              <a href="#">A2</a>
              <a href="#">A3</a>
            </div>
          </div>
        ) :
        <Flex flexDirection={"column"}>
        <Flex my={"30px"}  flexDirection={"row"} justifyContent="space-between" background="#F7F8FC">
          <L2 fontFamily="Inder sans-serif"
              fontWeight="regular"
              textDecoration={"none"}
              _hover={{textDecoration:"none"}}
              fontSize={{base:"10px",md:"40px"}}
              color="#000000"
              ml="5vw"            
              >COORDINET</L2>
          <Flex flexDirection={"row"} justifyContent="space-around" mr={"23vw"} >
          {/* <Link to="/tableDashboard">  */}
           <Button
            color="black"
            height={"5vh"}
            width={"7vw"}
            bg="#2B6CB0"
            _hover={{ 
            transform:"translate(0px,-5px)",
            // borderBottom : "2px solid red",
            borderColor:"blue"}} 
            _active={{ bg: "#555555" }}
            textAlign="center"
            fontSize={{base:"5px",md:"15px"}}
            margin="15px 10px"
            borderRadius="5px"
          > Home</Button> 
          {/* </Link> */}

          <Link to="/login">
            <Button
              color="black"
              height={"5vh"}
              width={"7vw"}
              bg="#2B6CB0"
              _hover={{ 
              transform:"translate(0px,-5px)",
              borderBottom : "2px solid red",
              borderColor:"blue"}}
              _active={{ bg: "#555555" }}
              textAlign="center"
              fontSize={{base:"8px",md:"15px"}}
              margin="15px 10px"
              borderRadius="5px"
            > Login</Button>
          </Link>
            <Link to="/signUp">
              <Button
                color="black"
                height={"5vh"}
                width={"7vw"}
                bg="#2B6CB0"
                _hover={{ 
                  transform:"translate(0px,-5px)",
                  borderBottom : "2px solid red",
                  borderColor:"blue"}}
                _active={{ bg: "#555555" }}
                textAlign="center"
                fontSize={{base:"5px",md:"15px"}}
                margin="15px 10px"
                borderRadius="5px"
                value="Sign up"
              >Sign up</Button>
              </Link>
                <Button
                  color="black"
                  height={"5vh"}
                  width={"7vw"}
                  bg="#2B6CB0"
                  _hover={{ 
                  transform:"translate(0px,-5px)",
                  borderBottom : "2px solid red",
                  borderColor:"blue"}}
                  _active={{ bg: "#555555" }}
                  textAlign="center"
                  fontSize={{base:"5px",md:"15px"}}
                  margin="15px 10px"
                  borderRadius="5px"
                  >About</Button>
            </Flex> 
        </Flex>
        
      </Flex>  
        }
      </>
    );
  };

  export default Navbar ;