import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #838383;
`;

const Title = styled.h3`
  /* font-size: 1.8rem; */
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  label {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    input {
      margin: 0;
    }
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AgreementGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    line-height: 16px;
    cursor: pointer;
    input {
      margin: 0;
    }
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  text-decoration: underline;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--dark-color);
  }
`;

const Agreement = () => {
  return (
    <Wrapper>
      <Title>이용약관</Title>
      <Group>
        <label>
          <input type="checkbox" name="" id="" />
          <span> 아래 약관에 모두 동의합니다.</span>
        </label>
        <CheckboxGroup>
          <AgreementGroup>
            <label>
              <input type="checkbox" name="" id="" />
              <span> [필수] 이용약관 동의</span>
            </label>
            <Text>자세히 보기</Text>
          </AgreementGroup>
          <AgreementGroup>
            <label>
              <input type="checkbox" name="" id="" />
              <span> [필수] 개인정보 수집 및 이용동의</span>
            </label>
            <Text>자세히 보기</Text>
          </AgreementGroup>
          <AgreementGroup>
            <label>
              <input type="checkbox" name="" id="" />
              <span>[선택] 쇼핑정보 수신 동의</span>
            </label>
            <Text>자세히 보기</Text>
          </AgreementGroup>
        </CheckboxGroup>
      </Group>
    </Wrapper>
  );
};

export default Agreement;
