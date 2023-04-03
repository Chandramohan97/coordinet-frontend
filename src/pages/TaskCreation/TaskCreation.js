import React from 'react'
import StaticTable from '../../Components/Table/StaticTable'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Flex,Heading, HStack,Input,Text, VStack,Button,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const TaskCreation = () => {
  
  const [task1,setTask1]= React.useState("")
  const [task2,setTask2]= React.useState("")
  const [task3,setTask3]= React.useState("")
  
  const  location  = useLocation();
  const  {project} = location.state;
  // console.log(project);
  
  return (
    <Box className='taskCreation' px={{base: "2", md: "8"}}>
        <Heading textAlign={"left"} fontFamily={"Inder"} 
        fontSize={{base:"16px",md:"40px"}} width={"fit-content"} ml="2vw" mt={"5vh"}>COORDINET</Heading>
        <HStack gap="5vw">
            <VStack pl="3vw">
                <Text width={{base:"100px",md:"21vw"}}
                 fontSize={{base:"12px", md:"35px"}} textAlign="left" fontFamily={"Inder"} >Creating Tasks</Text>
                <Input 
                    fontSize={{base:"8px",md:"15px"}}
                    placeholder='First Task'
                    borderColor={"lightgrey"}
                    focusBorderColor='lightgrey'
                    marginRight={"20px !important"} 
                    width={{base:"110px",md:"20vw"}}
                    textAlign={"left"}
                    rounded={{base:"7px",md:"10px"}} 
                    fontFamily={"Inder"}
                    height={{base:"22px",md:"40px"}} 
                    backgroundColor="white"
                    position={"relative"}
                    left={{base:"15px",md:"-1px"}}
                    onChange={(e) => setTask1(e.target.value)}
                />
                <Input 
                    fontSize={{base:"8px",md:"15px"}}
                    placeholder='Second Task'
                    borderColor={"lightgrey"}
                    focusBorderColor='lightgrey'
                    marginRight={"20px !important"} 
                    width={{base:"110px",md:"20vw"}}
                    textAlign={"left"}
                    rounded={{base:"7px",md:"10px"}} 
                    fontFamily={"Inder"}
                    height={{base:"22px",md:"40px"}} 
                    backgroundColor="white"
                    position={"relative"}
                    left={{base:"15px",md:"-1px"}}
                    onChange={(e) => setTask2(e.target.value)}
                /> 
                <Input 
                   fontSize={{base:"8px",md:"15px"}}
                   placeholder='Third Task'
                   borderColor={"lightgrey"}
                   focusBorderColor='lightgrey'
                   marginRight={"20px !important"} 
                   width={{base:"110px",md:"20vw"}}
                   textAlign={"left"}
                   rounded={{base:"7px",md:"10px"}} 
                   fontFamily={"Inder"}
                   height={{base:"22px",md:"40px"}} 
                   backgroundColor="white"
                   position={"relative"}
                   left={{base:"15px",md:"-1px"}}
                  onChange={(e) => setTask3(e.target.value)}
                />  
            </VStack>
            <Flex gap="0px" flexDirection={"row"} ml="20vw">
                <Sidebar project={project}/>
                <StaticTable taskList={[task1,task2,task3]}/>
            </Flex>
        </HStack>

        <Link to="/viewingOptions" state={{project : project , tasks:[task1,task2,task3]}}   >
          <Button 
             color="white"
             bg="#31bfc8"
             position={{base:"fixed",md:"relative"}}
             left={{md:"-10.5vw"}}
             mr={{base:"auto"}}
             right={{base:"0px"}}
             height={{base:"2.5vh",md:"5vh"}}
             width={{base:"3.5vw",md:"7vw"}}
             mt="15px" 
             _hover={{ bg: "#2a9ca1" }}
             fontSize={{base:"3xs",md:"medium"}}
             ml={{md:"74vw"}} >
            Next
            </Button>
          </Link>
   
    </Box>
  )
}

export default TaskCreation