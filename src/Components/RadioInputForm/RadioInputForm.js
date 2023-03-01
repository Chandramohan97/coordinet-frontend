import { Input,InputLeftElement,Icon, InputGroup,Radio } from "@chakra-ui/react";
import React from 'react';
import {FaCircle} from 'react-icons/fa';

const RadioInputForm = (props) => {
//   const [isClicked,setClicked] = React.useState(false)  

  return (
  <InputGroup>
    <Input readOnly width="18vw" backgroundColor={"white"} color="black" value={props.value} cursor="grab" borderRadius={"15px"} />
    <InputLeftElement>
        <label htmlFor="circle-radio">
          <Radio border="2px solid black"></Radio>
        </label>    
    </InputLeftElement>
    </InputGroup>
  )
}

export default RadioInputForm;