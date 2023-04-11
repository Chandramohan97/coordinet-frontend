import { Box, Drawer, Modal,ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, 
    HStack, Flex, VStack, Input, Button, Grid,Select, List, ListItem, Menu, MenuItem, MenuButton,MenuList, Textarea } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';   
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import React from 'react';
  import ReactQuill from 'react-quill';
  import 'react-quill/dist/quill.snow.css';
  import './Cards.css'
  import Comments from '../../Comments/Comments';
  import { Draggable } from 'react-beautiful-dnd';
  import 'react-quill/dist/quill.snow.css';
//   import DynamicSelect from '../DynamicSelect/DynamicSelect';
  
  function Cards({cards,index,status}) {
  
    const statusColors = {
      New : "#00bcd4",
      Planned : "#2196f3",
      Review :"#ffeb3b",
      Closed : "rgb(11, 135, 91)",
      "In Progress": "#3f51b5",
    }
    const modules = {
      toolbar : [
        ['bold', 'italic', 'underline', 'strike','image'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6] }],
        [{ color: [] }, { background: [] }],
        ['clean'],
        
      ],
    }
    
    const [open,setOpen] = React.useState(false);
    const [visibility,setVisibility]= React.useState(false)
    const [description,setDescrition]= React.useState("");
    const [value,setValue] = React.useState(cards.content)
    const [content,setContent] = React.useState("");
    const [cardStatus,setStatus] = React.useState(status);
    const [assginee,setAssignee] = React.useState([{name: "Pickle Rick", value: 328212},{name: "Baby Yoda", value: 328210},
    {name: "Lord Gaben", value: 328211} ])
    const [assigneeVisible,setAssigneeVisible] = React.useState(false)
    
    // const cardStatus = React.useRef(status);

    function handleOpen() {
      setOpen(true);
    }
    
    function handleClose() {
        setOpen(false);
    }
    return (
      <>
      <Draggable draggableId={cards.id} index={index} key={cards.id}>
        {(provided) => (
            <Box pl="10px" pt="5px" fontFamily={"Inder,sans-serif"} bg="white" height={"10vh"} rounded={"md"} margin={"10px 0px"} 
            ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}focusBorderColor="transparent"
             _hover={{cursor:"pointer",bg  :"lightblue"}}  onClick={()=>handleOpen()}        
            >
            <Text 
            >{cards.label}</Text>
            </Box>
          // </div> 
        )} 
        </Draggable>  
            <Modal isOpen={open} onClose={handleClose} size="custom" >
              <ModalOverlay />
                <ModalContent maxW="75vw" display={"flex"} flexDirection="row" h="auto" maxH={"none"}>
                  <VStack display={"flex"} >
                    <Input 
                        className='modal-description' fontFamily={"Inder sans-serif"}
                        width={"40vw"} height={"7.5vh"} fontSize={"20px"} defaultValue={cards.label} mt="8vh" ml={"2vw"} border="0.1px solid"  
                        placeholder='Short Description' textAlign={"left"}  _hover={{backgroundColor:"lightgrey"}} fontWeight="bold"
                        borderColor="transparent" 
                        _focus={{
                            pointerEvents:"none",
                            backgroundColor:"white"
                        }}
                    /> 
                  <Box>
                    <ReactQuill 
                      className='quill' 
                      modules={modules} 
                      theme='snow' 
                      style={{marginTop:"2.5vh",marginLeft:"2vw"}} >
                    </ReactQuill>
                  </Box>
  
                  <Box className='quillButton' width={"fit-content"} pl="2px" position="relative" left="-14.5vw" height="36px" >
                      <Button
                        marginBottom={"60px"}
                        color="white"
                        height="32px"
                        // width="60px"
                        bg="rgb(0, 82, 204)"
                        _hover={{ bg: "rgb(0, 82, 500)" }}
                        _active={{ bg: "#555555" }}
                        textAlign="center"
                        fontSize="14px"
                      
                        borderRadius="2px"
                    >Save</Button>
                      <Button
                          mb={"60px"}
                          ml="20px"
                          color="rgb(66, 82, 110)"
                          transition={"all 0.1s ease 0s"}
                          cursor={"pointer"}
                          height="32px"
                          width="60px"
                          bg="rgb(255, 255, 255)"
                          // _active={{ bg: "lightblue" }}
                          textAlign="center"
                          fontSize="14px"
                          borderRadius="2px"  
                      >Cancel</Button>
                  </Box>
                  <Text fontFamily={"Inder sans-serif"} fontSize="20px" marginRight="32vw !important" >Comments</Text>
                  <Comments />
                
                  </VStack>
  
                    <Flex flexDirection={"column"} gap="10px" mt="8vh" marginLeft={"2vw"} justifyContent="flex-start">    
                        <Flex flexDirection={"column"}>            
                            <Text 
                                color="rgb(94, 108, 132)"
                                fontSize={"18px"}
                                fontFamily="Inder sans-serif"
                                mr={"80px"}
                            >Status</Text>
                            <Menu>
                                <MenuButton
                                    fontFamily={"Inder sans-serif"}
                                    // as="button"
                                    textAlign={"left"}
                                    pl="12px"
                                    pr="12px"
                                    height={"35px"}
                                    border={"1px"}
                                    borderColor={"grey"}
                                    borderRadius={"5px"}
                                    width={"fit-content"}
                                    backgroundColor={statusColors[cardStatus]}
                                    _hover={{transform: 'scale(1.1)'}}    //scale(1.1) property to scale the property horizonally and vertically. Basically have an out of the screen effect
                                    // py="10px"
                                    my="5px"
                                >{cardStatus}</MenuButton>
                                
                                <MenuList>
                                    <MenuItem onClick={() => setStatus("New")}>
                                        <Button _hover={{backgroundColor:"none"}} 
                                        backgroundColor={"#00bcd4"} 
                                        width={"fit-content"} >New</Button>
                                    </MenuItem>
                                    <MenuItem onClick={() => setStatus("Planned")}>
                                      <Button
                                       backgroundColor={"#2196f3"} _hover={{backgroundColor:"none"}}
                                       width={"fit-content"} >Planned</Button>
                                    </MenuItem>
                                    
                                    <MenuItem onClick={() => setStatus("Review")}>
                                        <Button
                                          backgroundColor={"#ffeb3b"} _hover={{backgroundColor:"none"}}
                                          width={"fit-content"} >Review</Button>
                                    </MenuItem>
                                    <MenuItem onClick={() => setStatus("In Progress")}>
                                      <Button
                                            backgroundColor={"#3f51b5"} _hover={{backgroundColor:"none"}}
                                            width={"fit-content"} >In Progress</Button>
                                    </MenuItem>
                                    <MenuItem onClick={() => setStatus("Closed")}>
                                        <Button
                                            backgroundColor={"rgb(11, 135, 91)"} _hover={{backgroundColor:"none"}}
                                            width={"fit-content"} >Closed</Button>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                        
                      <Flex flexDirection={"column"} position={"relative"} >
                        <Text 
                          color="rgb(94, 108, 132)"
                          fontFamily={"Inder sans-serif"}
                          fontSize="18px"
                          marginRight="80px"
                          >Assignee</Text>
                        
                        <Box className='dropDownPlaceholder' onClick={()=>setAssigneeVisible(!assigneeVisible)}
                          color="rgb(94, 108, 100)" fontSize={"14px"} _hover={{cursor:"pointer"}} 
                        >Unassigned</Box>
                        
                         <Box className='dropDownContent' position={"absolute"} zIndex={1} top="100%" display={assigneeVisible ? "block" : "none"}
                         >
                            <Box display={"flex"} flexDirection={"row"} width={"fit-content"} padding={"4px 8px"}   
                             backgroundColor={"rgb(235, 236, 240)"}>hello</Box>
                             <Box display={"flex"} flexDirection={"row"} width={"fit-content"} padding={"4px 8px"}   
                             backgroundColor={"rgb(235, 236, 240)"}>hello</Box>
                          </Box>

                      </Flex>
  
                        <Text 
                          color="rgb(94, 108, 132)"
                          fontFamily={"Inder sans-serif"}
                          fontSize="20px"
                          marginRight="80px">
                        Date</Text>
                      
                        <Flex flexDirection={"column"}>
                            <Text 
                              color="rgb(94, 108, 132)"
                              fontFamily={"Inder sans-serif"}
                              fontSize="18px"
                              marginRight="80px">
                            Priority

                            </Text>
                            
                        </Flex>
                        
                        <Text 
                          color="rgb(94, 108, 132)"
                          fontFamily={"Inder sans-serif"}
                          fontSize="18px"
                          marginRight="80px">
                        Project</Text>
                    </Flex>    
  
                  <ModalCloseButton />
                  </ModalContent>   
                </Modal>
            </>  
    );
    }
    
  export default Cards;  