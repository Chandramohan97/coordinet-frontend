import { Flex,Heading, HStack,Input,Text, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import StaticTable from '../../Components/Table/StaticTable'
import { Link } from "react-router-dom";

const ProjectCreation = () => {

  const [project,setProject] = React.useState("");

  return (
    <div className='sampleTable'>
        <Heading textAlign={"left"} width={"fit-content"}
         fontFamily={"Inder"}  fontSize={{base:"16px",md:"40px"}} ml="2vw" mt={"5vh"}>
        COORDINET</Heading>
        <HStack gap={{base:"5vw",md:"15vw"}}>
            <Flex flexDirection={"column"} pl="6vw" width={"fit-content"}  >
                <Text fontSize={{base:"12px",md:"25px"}} 
                 textAlign="left" width={{base:"100px",md:"fit-content"}}>What's your team <br></br>
                 working on?                 
                 </Text>
                <Input 
                  mt="10px"
                  textAlign={"left"}
                  borderColor={"lightgrey"}
                  placeholder='Name of the Project'
                  focusBorderColor={"lightgrey"}
                  fontFamily={"Inder"}  
                  fontSize={{base:"8px",md:"15px"}}
                  marginRight={"20px !important"} 
                  width={{base:"110px",md:"fit-content"}}
                  rounded={{base:"7px",md:"10px"}} 
                  height={{base:"22px",md:"40px"}} 
                  backgroundColor="white"
                  position={"relative"}
                  left="-1px"
                  onChange={(e) => setProject(e.target.value)}
                />   
            </Flex>
            <Flex gap="0px" flexDirection={"row"} ml="20vw" border="1px solid">
                <Sidebar project={project} />
                <StaticTable taskList={""}/>
            </Flex>
        </HStack>

        <Link to="/taskCreation" state={{project : project }}>
          <Button 
            color="white"
            bg="#2a9ca1"
            _hover={{bg: "#1C7B7F"}}
              _active={{ bg: "#1f8c95" }}
            position={{base:"fixed",md:"relative"}}
            left={{md:"-10.5vw"}}
            mr={{base:"auto"}}
            right={{base:"0px"}}
            height={{base:"2.5vh",md:"5vh"}}
            width={{base:"3.5vw",md:"7vw"}}
            mt="15px" 
            fontSize={{base:"3xs",md:"medium"}}
            ml="81.5vw">
            Next
          </Button>
        </Link>
    </div>

  )
}

export default ProjectCreation;

