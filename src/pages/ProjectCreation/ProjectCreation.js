import { Flex,Heading, HStack,Input,Text, VStack,Button, useToast } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import StaticTable from '../../Components/Table/StaticTable'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { Toast } from '@chakra-ui/react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const ProjectCreation = () => {

  const toast = useToast();
  const [projectName,setProjectName] = React.useState("");
  // const location = useLocation(); 
  // const {teamStrength} = location.state;
  
  const navigate = useNavigate();
  const NextPage = () => {
    if(projectName.length === 0 ){
        toast({
          title: "Enter the name of your Project",
          // description: "Team Count should be more than 0",
          status: "error",
          duration: 2000,
          // isClosable: false,
          variant:"green"
        });    
      }else{
        // localStorage.setItem('projectName',project)
        navigate('/TaskCreation', {state : {projectName}})
      }
  }
  
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
                  onChange={(e) => setProjectName(e.target.value)}
                />   
            </Flex>
            <Flex gap="0px" flexDirection={"row"} ml="20vw" border="1px solid">
                <Sidebar projectName={projectName} />
                <StaticTable taskList={["","",""]}/>   
            </Flex>
        </HStack>

        {/* <Link to="/taskCreation" state={{project : project }}> */}
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
            ml="81.5vw"
            onClick={NextPage}
            >
            Next
          </Button>
        {/* </Link> */}
    </div>

  )
}

export default ProjectCreation;

