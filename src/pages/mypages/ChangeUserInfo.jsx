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

const FormGroup = styled.div`
  margin-bottom: 24px;
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

  &:disabled {
    background: #f8f8f8;
    color: #999;
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

const PasswordRequirement = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-top: 8px;
  font-family: "Pretendard", sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
`;

const Button = styled.button`
  flex: 1;
  padding: 14px;
  font-size: 1.4rem;
  font-family: "EHNormalTrial", sans-serif;
  border: none;
  cursor: pointer;

  &:disabled {
    background: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const SaveButton = styled(Button)`
  background: #000;
  color: #fff;

  &:hover:not(:disabled) {
    background: #333;
  }
`;

const ChangePasswordButton = styled(Button)`
  background: #e0e0e0;
  color: #333;

  &:hover {
    background: #d0d0d0;
  }
`;

const SectionDivider = styled.hr`
  margin: 48px 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: "EHNormalTrial", sans-serif;
`;

const PhoneSection = styled.div`
  background: #f8f8f8;
  padding: 32px 24px;
  margin-top: 32px;
`;

const ChangeUserInfo = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    if (currentPassword && newPassword && confirmPassword) {
      console.log("비밀번호 변경");
      // 비밀번호 변경 로직
    }
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    if (newPhone) {
      console.log("휴대폰 번호 변경");
      // 휴대폰 번호 변경 로직
    }
  };

  return (
    <Container>
      <PageTitle>Change User Info</PageTitle>

      <Form onSubmit={handlePasswordChange}>
        <SectionTitle>비밀번호 변경</SectionTitle>

        <FormGroup>
          <Label>현재 비밀번호</Label>
          <InputWrapper>
            <Input
              type={showPasswords.current ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력해주세요"
            />
            <PasswordToggle
              type="button"
              onClick={() => togglePassword("current")}
            >
              {showPasswords.current ? "👁️‍🗨️" : "👁️"}
            </PasswordToggle>
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label>새 비밀번호</Label>
          <InputWrapper>
            <Input
              type={showPasswords.new ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="새 비밀번호를 입력해주세요"
            />
            <PasswordToggle type="button" onClick={() => togglePassword("new")}>
              {showPasswords.new ? "👁️‍🗨️" : "👁️"}
            </PasswordToggle>
          </InputWrapper>
          <PasswordRequirement>
            (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
          </PasswordRequirement>
        </FormGroup>

        <FormGroup>
          <Label>새 비밀번호 확인</Label>
          <InputWrapper>
            <Input
              type={showPasswords.confirm ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="새 비밀번호를 다시 입력해주세요"
            />
            <PasswordToggle
              type="button"
              onClick={() => togglePassword("confirm")}
            >
              {showPasswords.confirm ? "👁️‍🗨️" : "👁️"}
            </PasswordToggle>
          </InputWrapper>
        </FormGroup>

        <ButtonGroup>
          <SaveButton
            type="submit"
            disabled={!currentPassword || !newPassword || !confirmPassword}
          >
            SAVE
          </SaveButton>
        </ButtonGroup>
      </Form>

      <SectionDivider />

      <Form onSubmit={handlePhoneChange}>
        <SectionTitle>휴대폰 번호 변경</SectionTitle>

        <PhoneSection>
          <FormGroup>
            <Label>현재 휴대폰 번호</Label>
            <Input type="text" value="010-1234-5678" disabled />
          </FormGroup>

          <FormGroup>
            <Label>새로운 휴대폰 번호</Label>
            <InputWrapper>
              <Input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="새로운 휴대폰 번호를 입력해주세요"
              />
              <PasswordToggle type="button">-</PasswordToggle>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label>인증번호</Label>
            <InputWrapper>
              <Input type="text" placeholder="인증번호를 입력해주세요" />
              <PasswordToggle type="button">-</PasswordToggle>
            </InputWrapper>
          </FormGroup>

          <ButtonGroup>
            <ChangePasswordButton type="button">
              인증번호 발송
            </ChangePasswordButton>
            <SaveButton type="submit" disabled={!newPhone}>
              CHANGE
            </SaveButton>
          </ButtonGroup>
        </PhoneSection>
      </Form>
    </Container>
  );
};

export default ChangeUserInfo;
