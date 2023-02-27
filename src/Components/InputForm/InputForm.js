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
      // textIndent: textIndent,
    
  />);
};

export default InputForm;
