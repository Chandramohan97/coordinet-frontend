import { Input } from "@chakra-ui/react";
import React from "react";

const InputForm = (props) => {
  const { height, width, borderRadius, placeholder, textIndent } = props;
  return;
  <Input
    sx={{
      height: height,
      width: width,
      borderRadius: borderRadius,
      placeholder: placeholder,
      textIndent: textIndent,
    }}
  />;
};

export default InputForm;