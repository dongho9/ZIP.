import styled from "styled-components";
import Agreement from "../components/signup/Agreement";
import Modal from "../components/signup/Modal";

const Wrapper = styled.div`
  width: 450px;
  margin: 0 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 6% 0;
`;

const Title = styled.h3`
  font-size: 3.6rem;
  font-weight: bold;
`;

const Form = styled.div`
  /* width: 500px; */
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid var(--border-color);
  color: var(--border-color);
  /* padding: 24px 20px; */
  padding: 24px 20px;
  transition: all 0.3s;
  &:focus {
    border: 1px solid var(--dark-color);
    color: var(--dark-color);
    outline: none;
  }
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Select = styled.select`
  /* font-size: 1.8rem; */
  padding: 24px 0;
  border: 1px solid var(--border-color);
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid var(--dark-color);
  }
`;

const Btn = styled.button`
  width: 100%;
  font-size: 1.4rem;
  padding: 24px 0;
  color: var(--light-color);
  background: var(--dark-color);
  border: none;
  cursor: pointer;
`;

const Button = styled(Btn)`
  width: 44%;
`;

const Desc = styled.p`
  font-size: 1.2rem;
  color: var(--border-color);
`;

const Signup = () => {
  return (
    <div>
      <Wrapper>
        <Title>JOIN</Title>
        <Form>
          <Input type="text" placeholder="이름 *" />
          <Input type="text" placeholder="아이디 *" />
          <Group>
            <Input type="password" placeholder="비밀번호 *" />
            <Desc>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
            </Desc>
          </Group>
          <Input type="password" placeholder="비밀번호 확인 *" />
          <InputGroup>
            <Input type="text" placeholder="우편번호" />
            <Button>우편번호 검색</Button>
          </InputGroup>
          <Input type="text" placeholder="집주소" />
          <Input type="text" placeholder="상세주소" />
          <InputGroup>
            <Input type="text" placeholder="이메일 *" />
            <span>@</span>
            <Select name="" id="">
              <option value="">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
              <option value="nate.com">nate.com</option>
            </Select>
          </InputGroup>
        </Form>
        <Agreement />
        <Btn>회원가입 하기</Btn>
      </Wrapper>
    </div>
  );
};

export default Signup;
