import { FormControl, Input, Textarea,Button,HStack,Text } from '@chakra-ui/react';
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
          // borderRadius="2px"
          id='myInput'
          placeholder="Add comment"
          onChange={(e) => setItem(e.target.value)}
          resize="none"
          borderRadius={"5px"}
          border="1px solid"
          // _active={{backgroundColor:"lightgrey"}}
        /> 

      <HStack position={"relative"} left="-14vw">
        <Button
        backgroundColor={"blue"}
        color="white"
        height="30px" 
        borderRadius={"4px"}
        onClick={ () => { 
          Click(); 
          setCheck(false);
        }}>Save</Button>
        <Button
        // backgroundColor={"blue"}
        color="black"
        height="30px" 
        borderRadius={"4px"}
        onClick={ () => { 
        setCheck(false);
        }}>Cancel</Button>
        </HStack>
        </>

        : 
        <Input onClick={()=>setCheck(true)} placeholder="Add Comments"/>
      }


      {/* <Button onClick={() =>} */}

        <ul>
          {list.map((el) => (
              <li key={el.id}>
                <Text
                >{el.value}</Text>
                
                <button onClick={() => edit(editItem, el.id)}> Update </button>
                <button onClick={() => onDelete(list, el.id)}> Delete </button>
                <br />
              </li> 
            
          ))}
        </ul>
  </>
  );
  
}

export default Comments