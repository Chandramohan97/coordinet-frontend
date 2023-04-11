import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";

function DynamicSelect() {
  const [options, setOptions] = useState([
    { value: "option1", label: "New" },
    { value: "option2", label: "In Progress" },
    { value: "option3", label: "Closed" },
  ]);
  const [maxWidth, setMaxWidth] = useState("120px");

  useEffect(() => {
    const longestOption = options.reduce((acc, option) => {
      return option.label.length > acc ? option.label.length : acc;
    }, 0);
    setMaxWidth(`${longestOption * 10}px`);
  }, [options]);

  return (
    <Select
      _hover={{ transform: "all 0.1s ease 0s" }}
      width={maxWidth}
      placeholder="Select option"
      mr="10px"
    >
      {options.map((option) => (
        <option
          key={option.value}
        //   backgroundColor="rgb(210, 229, 254)"
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default DynamicSelect;
