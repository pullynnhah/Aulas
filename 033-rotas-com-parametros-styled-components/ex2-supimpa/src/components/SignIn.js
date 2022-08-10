import styled from "styled-components";

export default function SignIn() {
  return (
    <Container>
      <InputWrapper>
        <label>Email</label>
        <input type="email" />
      </InputWrapper>
      <InputWrapper>
        <label>Senha</label>
        <input type="password" />
      </InputWrapper>
      <Button> SignIn</Button>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  padding: 15px 0;
  margin: 10px auto;
  width: 300px;
  height: 150px;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
}
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 150px;
    border: none;
    border-bottom: solid 1px #a7a7a7;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background: #752656;
  color: white;
  font-weight: bold;
  width: 90px;
  height: 30px;
  border-radius: 15px;
`;
