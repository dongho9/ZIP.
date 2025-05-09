import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImgWrap = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
`;

const Form = styled.form`
  width: 40%;
  height: 100%;
  /* flex: 2; */
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 3.6rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  /* font-size: 1.8rem; */
  border: 1px solid var(--border-color);
  padding: 20px 20px;
  &:focus {
    outline: none;
  }
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InputGroup = styled(Group)`
  gap: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px 0;
  background: var(--dark-color);
  color: var(--light-color);
  border: none;
  cursor: pointer;
`;

const SubBtn = styled(Button)`
  background: var(--light-color);
  color: 1px solid var(--dark-color);
  border: 1px solid var(--dark-color);
`;

const Text = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Kakao = styled(Button)`
  background: #fee500;
  color: var(--dark-color);
`;

const Login = () => {
  return (
    <Wrapper>
      <ImgWrap>
        <Img src="/src/imgs/login/login.jpg" alt="login" />
      </ImgWrap>
      <Form>
        <Inner>
          <Title>LOGIN</Title>

          <Group>
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
          </Group>
          <InputGroup>
            <Group>
              <Button>LOGIN</Button>
              <SubBtn>CREATE ACCOUNT</SubBtn>
            </Group>
            <Text>아이디 | 비밀번호 찾기</Text>
          </InputGroup>
          <Kakao>KAKAO LOGIN</Kakao>
        </Inner>
      </Form>
    </Wrapper>
  );
};

export default Login;
