import { Input,InputLeftElement,Icon, InputGroup,Radio } from "@chakra-ui/react";
import React from 'react';
import {FaCircle} from 'react-icons/fa';

const RadioInputForm = (props) => {
//   const [isClicked,setClicked] = React.useState(false)  

  return (
  <InputGroup>
    <Input readOnly width = "20vw"backgroundColor={"white"} color="black" value={props.value} cursor="grab" />
    <InputLeftElement>
        <label htmlFor="circle-radio">
          <Radio border="1px solid black"></Radio>
        </label>    
    </InputLeftElement>
    </InputGroup>
  )
}

export default RadioInputForm;