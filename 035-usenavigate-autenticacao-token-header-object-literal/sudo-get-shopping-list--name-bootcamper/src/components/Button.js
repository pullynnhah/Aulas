import styled from "styled-components";

const Button = styled.button`
  padding: 18px;
  background-color: ${props => props.background || "#22a63f"};
  border: none;
  color: #222222;
  width: 100%;
  border-radius: 4px;
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    filter: brightness(1.2);
  }
`;

export default Button;
