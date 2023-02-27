import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const InputForm = (props) => {
  const { height, width, borderRadius, placeholder, textIndent,type } = props;
  return;
  
  <Input
    sx={{
      required : required,
      type : type,
      height: height,
      width: width,
      borderRadius: borderRadius,
      placeholder: placeholder,
      textIndent: textIndent,
    }}
  />;
};

export default InputForm;
