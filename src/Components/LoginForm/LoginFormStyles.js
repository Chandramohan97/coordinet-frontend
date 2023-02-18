import styled from "styled-components";
export { FormDiv, InputForm, H1, Button };

const H1 = styled.h1`
  color: black;
  text-align: center;
`;

const FormDiv = styled.form`
  //Form Element.
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const InputForm = styled.input`
  width: 20vw;
  height: 5vh;
  text-indent: 0.25rem;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  // Form Button
  color: white;
  height: 5vh;
  width: 20vw;
  background-color: #31bfc8;
  text-align: center;
  font-size: 12px;
  margin: 30px 10px;
  border-radius: 5px;
`;
