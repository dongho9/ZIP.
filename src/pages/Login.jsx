import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ImgWrap = styled.div`
  width: 60%;
  height: 100%;
  position: relative;
  aspect-ratio: 1 / 1;
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Form = styled.form`
  width: 40%;
  height: 100%;
  /* flex: 2; */
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 50%;
    padding: 0 3%;
  }
  //모바일
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 3%;
  }
  /* @media screen and (max-width: 402px) {
    width: 100%;
    padding: 0 20%;
  } */
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h3 {
    font-size: 3.6rem;
    font-weight: bold;
    font-family: "EHNormalTrial";
  }
  @media screen and (max-width: 428px) {
    h3 {
      font-size: 3rem;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  /* font-size: 1.8rem; */
  border: 1px solid var(--border-color);
  padding: 20px 20px;
  &::placeholder {
    opacity: 1;
    transition: opacity 0.3s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
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
  font-family: "EHNormalTrial";
  cursor: pointer;
`;

const SubBtn = styled(Button)`
  background: var(--light-color);
  color: 1px solid var(--dark-color);
  border: 1px solid var(--dark-color);
  position: relative;
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
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup");
  };
  const btnRef = useRef();
  return (
    <Wrapper>
      <ImgWrap>
        <Img src="/src/imgs/login/login.jpg" alt="login" />
      </ImgWrap>
      <Form>
        <Inner>
          <h3>LOGIN</h3>
          <Group>
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
          </Group>
          <InputGroup>
            <Group>
              <Button>LOGIN</Button>
              <SubBtn ref={btnRef} type="button" onClick={handleSignupClick}>
                CREATE ACCOUNT
              </SubBtn>
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
