import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputForm = (props) => {
  
  const { type, height, width, borderRadius, placeholder } = props;
  return(
  <Input
      type={type}
      height={height}
      width={width}
      borderRadius={borderRadius}
      placeholder={placeholder}
      _active={{ bg: "white" }}
      _hover={{ bg: "white" }}
      // textIndent: textIndent,
    
  />);
};

export default InputForm;
