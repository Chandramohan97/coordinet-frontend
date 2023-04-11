import { FormControl, Input, Textarea,Button,HStack,Text,Flex} from '@chakra-ui/react';
import React from 'react'

const Comments = (props) => {
 
  const [item, setItem] = React.useState("");
  const [editItem, setEditItem] = React.useState("");
  const [list, setList] = React.useState([]);
  const [check,setCheck] = React.useState(false);

  function edit(editItem, id) {
    const newList = list.map((list) => {
      if (list.id === id) {
        return { ...list, value: editItem };
      }
      return list;
    });

    setList(newList);
    setEditItem("");
  }

  function Click() {
    if (!item || item.trim().length == 0) {
      setItem("");
      document.getElementById("myInput").value = "";
      return -1;
    } else {
      const obj = { id: Math.random() * 100, value: item };
      setList([...list, obj]);
      // list.push({ id: Math.random() * 100, item: item });
      // console.log(list);
      // document.getElementById("myInput").value = "";
      setItem("");
    }
  }

  function onDelete(list, id) {
    const newArray = list.filter((el) => el.id != id);
    // console.log(newArray);
    setList(newArray);
  }
  // console.log(item);
  return (
    <>
      {check ?
        <>
        <Textarea 
          placeholder='Add a comment'
          minH="60px"
          maxH={"none"}
          overflowY="auto"
          width={"40vw"}
          marginLeft="2vw !important"
          id='myInput'
          resize="none"
          bg={"rgb(244, 245, 247)"}
          onChange={(e) => setItem(e.target.value)}         
          // _active={{backgroundColor:"lightgrey"}}
        /> 

      <HStack position={"relative"} left="-14vw">
        <Button
          bg="rgb(0, 82, 204)"
          _hover={{ bg: "rgb(0, 82, 500)" }}
          _active={{ bg: "#555555" }}
          textAlign="center"
          fontSize="14px"
          color="white"
          height="32px" 
          borderRadius={"4px"}
          onClick={ () => { 
            Click(); 
            setCheck(false);
        }}>Save</Button>
        <Button
        
          color="rgb(66, 82, 110)"
          transition={"all 0.1s ease 0s"}          
        
          bg="rgb(255, 255, 255)"
          // _active={{ bg: "lightblue" }}
          textAlign="center"
          fontSize="14px"
          height="32px" 
          borderRadius={"4px"}
          onClick={ () => { 
          setCheck(false);
          }}>Cancel</Button>
        </HStack>
        </>
        : 
        <Input 
          width={"40vw"}
          ml="2vw !important"
          bg={"rgb(244, 245, 247)"}
          borderRadius={"3px"} onClick={()=>setCheck(true)} placeholder="Add Comments"/>
      }
        <ul>
          {list.map((el) => (
            // <Flex justifyContent={"left"} border="1px" flexDirection={"column"} align >
              <li key={el.id}>
                <Flex flexDirection={"column"} >
                  <Input defaultValue={el.value} 
                  />
              </Flex>
                <Flex flexDirection={"row"} gap="20px">
                  <Button onClick={() => edit(editItem, el.id)}> Edit </Button>
                  <Button onClick={() => onDelete(list, el.id)}> Delete </Button>
                </Flex>
                <br />
              </li> 
            
          ))}
        </ul>
  </>
  );
  
}

export default Comments