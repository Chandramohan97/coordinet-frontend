import { Flex,Heading, HStack,Input,Text, VStack,Button } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import StaticTable from '../../Components/Table/StaticTable'
import { Link } from "react-router-dom";

const ProjectCreation = () => {

  const [project,setProject] = React.useState("");

  return (
    <div className='sampleTable'>
        <Heading textAlign={"left"} fontFamily={"Inder"} fontSize="40px" ml="2vw" mt={"5vh"}>COORDINET</Heading>
        <HStack gap="5vw">
            <VStack pl="3vw">
                <Text fontSize={"35px"} textAlign="left" width="21vw">What's your team working on?</Text>
                <Input 
                placeholder='Name of the Project, eg. First Project'
                focusBorderColor='transparent'
                fontFamily={"Inder"}  
                marginRight={"20px !important"} 
                width={"20vw"} 
                rounded="10px" 
                height={"40px"} 
                backgroundColor="white"
                onChange={(e) => setProject(e.target.value)}
                />   
            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar project={project} />
                <StaticTable taskList={""}/>
            </Flex>
        </HStack>

        <Link to="/taskCreation" state={{project : project }}>
          <Button 
          color="white"
          bg="#31bfc8"
          mt="15px" 
          _hover={{ bg: "#2a9ca1" }} //blue-green
          _active={{ bg: "#555555" }}
          height={"38px"} 
          width="100px" 
          ml="81.5vw">
            Next
          </Button>
        </Link>
    </div>

  )
}

export default ProjectCreation;