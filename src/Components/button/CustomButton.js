// import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  //   const { children } = props.children;
  const {
    color,
    height,
    width,
    bg,
    _hover,
    _active,
    textAlign,
    fontSize,
    margin,
    borderRadius,
    value,
  } = props;
  return (
    <Button
      sx={{
        color: color,
        height: height,
        width: width,
        bg: bg,
        _hover: _hover,
        _active: _active,
        textAlign: textAlign,
        fontSize: fontSize,
        margin: margin,
        border: borderRadius,
      }}
    >
      {value}
    </Button>
  );
};

export default CustomButton;
