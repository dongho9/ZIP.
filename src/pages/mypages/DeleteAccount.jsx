import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 40px;
`;

const PageTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
  font-weight: normal;
  font-family: "EHNormalTrial", sans-serif;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Description = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.3rem;
  margin-bottom: 40px;
  font-family: "Pretendard", sans-serif;
`;

const InputGroup = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 8px;
  font-family: "Pretendard", sans-serif;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  font-size: 1.3rem;
  font-family: "Pretendard", sans-serif;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #999;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #e0e0e0;
  color: #666;
  border: none;
  font-size: 1.4rem;
  font-family: "EHNormalTrial", sans-serif;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    background: #d0d0d0;
  }

  &:disabled {
    background: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Notice = styled.div`
  margin-top: 40px;
  padding: 24px;
  background: #f8f8f8;
  border: 1px solid #e0e0e0;
`;

const NoticeTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 16px;
  font-family: "EHNormalTrial", sans-serif;
`;

const NoticeText = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 8px;
  font-family: "Pretendard", sans-serif;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;

  input {
    margin-right: 8px;
  }

  label {
    font-size: 1.3rem;
    color: #333;
    font-family: "Pretendard", sans-serif;
  }
`;

const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && agreed) {
      // 회원 탈퇴 로직 실행
      if (window.confirm("정말로 회원 탈퇴를 하시겠습니까?")) {
        // 탈퇴 처리
        console.log("회원 탈퇴 처리");
      }
    }
  };

  return (
    <Container>
      <PageTitle>Delete Account</PageTitle>

      <Description>
        회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번
        입력해주세요.
      </Description>

      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>비밀번호</Label>
          <InputWrapper>
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
            <PasswordToggle
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️‍🗨️" : "👁️"}
            </PasswordToggle>
          </InputWrapper>
        </InputGroup>

        <Notice>
          <NoticeTitle>회원 탈퇴 안내</NoticeTitle>
          <NoticeText>• 회원 탈퇴 시 모든 개인정보가 삭제됩니다.</NoticeText>
          <NoticeText>
            • 탈퇴 후 동일한 아이디로 재가입이 불가능합니다.
          </NoticeText>
          <NoticeText>• 보유하신 적립금과 쿠폰은 모두 소멸됩니다.</NoticeText>
          <NoticeText>
            • 미처리된 주문이 있는 경우 탈퇴가 제한될 수 있습니다.
          </NoticeText>
        </Notice>

        <Checkbox>
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <label htmlFor="agree">
            안내사항을 모두 확인하였으며, 이에 동의합니다.
          </label>
        </Checkbox>

        <DeleteButton type="submit" disabled={!password || !agreed}>
          OK
        </DeleteButton>
      </Form>
    </Container>
  );
};

export default DeleteAccount;
