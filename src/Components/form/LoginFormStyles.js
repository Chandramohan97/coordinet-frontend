import styled from "styled-components";
// export { Form, Input };

export const Text = styled.h1`
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
export const Form = styled.form`
  //Form Element.
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Input = styled.input`
  width: 20vw;
  height: 5vh;
  text-indent: 0.25rem;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 5px;
`;

const Button = styled.button;
