import styled from "styled-components";

const Li = styled.li`
  padding: 16px;
  font-size: 14px;
  background-color: #ffffff;
  width: 100%;
  color: #222;

  :not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }

  :first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export default Li;
