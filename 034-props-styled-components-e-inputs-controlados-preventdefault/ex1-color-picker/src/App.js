import {useState} from "react";
import styled from "styled-components";

export default function App() {
  const [inputValue, setInputValue] = useState("#000000");

  return (
    <div>
      <Title color={inputValue}>Color Picker!</Title>
      Escolha a cor do topo da página:
      <Input type="color" onChange={e => setInputValue(e.target.value)} value={inputValue} />
    </div>
  );
}

const Title = styled.h1`
  background: ${props => props.color};
  color: #fff;
  text-align: center;
  padding: 50px 0;
  margin-bottom: 40px;
`;

const Input = styled.input`
  margin-left: 10px;
`;
