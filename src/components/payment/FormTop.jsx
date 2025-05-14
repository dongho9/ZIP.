import React from "react";
import styled from "styled-components";

const FormTopSection = styled.div`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;

  @media screen and (max-width: 402px) {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 402px) {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  font-size: 1.4rem;
  margin-bottom: 5px;

  @media screen and (max-width: 402px) {
    padding: 12px;
    font-size: 1.3rem;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const SelectHeader = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 402px) {
    padding: 12px;
    font-size: 1.3rem;
  }
`;

const SelectOptions = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  z-index: 10;
`;

const Option = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f5f5f5;
  &:hover {
    background: #f9f9f9;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 402px) {
    padding: 12px;
    font-size: 1.3rem;
  }
`;

const SelectedMark = styled.span`
  margin-left: 10px;
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.3s;
`;

const AddressGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;

  @media screen and (max-width: 402px) {
    gap: 5px;
  }
`;

const PostcodeInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  font-size: 1.4rem;

  @media screen and (max-width: 402px) {
    padding: 12px;
    font-size: 1.3rem;
  }
`;

const SearchButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 20px;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;

  @media screen and (max-width: 402px) {
    padding: 0 15px;
    font-size: 1.3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 30px 0 15px;

  @media screen and (max-width: 402px) {
    font-size: 1.5rem;
    margin: 20px 0 10px;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin: 5px 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin: 10px 0;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const CouponGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 402px) {
    gap: 5px;
  }
`;

const CouponInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 1.4rem;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const CouponButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 15px;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    padding: 0 10px;
    white-space: nowrap;
  }
`;

const AllUseButton = styled.button`
  background-color: #f1f1f1;
  color: #000;
  padding: 0 15px;
  border: 1px solid #ddd;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    padding: 0 10px;
    white-space: nowrap;
  }
`;

const FormTop = ({
  saveAddress,
  setSaveAddress,
  addressDropdownOpen,
  setAddressDropdownOpen,
  selectedAddress,
  setSelectedAddress,
  openCouponModal,
}) => {
  // 주소 옵션
  const addressOptions = [
    "신규 입력",
    "기본배송지",
    "A000 | 000 님",
    "B000 | 000 님",
  ];

  const toggleAddressDropdown = () => {
    setAddressDropdownOpen(!addressDropdownOpen);
  };

  const selectAddress = (address) => {
    setSelectedAddress(address);
    setAddressDropdownOpen(false);
  };

  return (
    <FormTopSection>
      <FormGroup>
        <Label>내 배송지</Label>
        <SelectWrapper onClick={toggleAddressDropdown}>
          <SelectHeader>
            {selectedAddress}
            <ArrowIcon isOpen={addressDropdownOpen} />
          </SelectHeader>
          <SelectOptions isOpen={addressDropdownOpen}>
            {addressOptions.map((option, index) => (
              <Option key={index} onClick={() => selectAddress(option)}>
                {option}
                {option === selectedAddress && <SelectedMark>✓</SelectedMark>}
              </Option>
            ))}
          </SelectOptions>
        </SelectWrapper>
      </FormGroup>

      <FormGroup>
        <Label>이름</Label>
        <Input type="text" placeholder="이름" />
      </FormGroup>

      <FormGroup>
        <Label>주소</Label>
        <AddressGroup>
          <PostcodeInput type="text" placeholder="우편번호" />
          <SearchButton>우편번호 검색</SearchButton>
        </AddressGroup>
        <Input type="text" placeholder="주소" />
        <Input type="text" placeholder="상세주소" />
      </FormGroup>

      <FormGroup>
        <Label>휴대폰 번호</Label>
        <Input type="text" placeholder="휴대폰 번호" />
        <SubText>하이픈(-) 빼고 입력</SubText>
      </FormGroup>

      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          checked={saveAddress}
          onChange={() => setSaveAddress(!saveAddress)}
        />
        기본 배송지로 저장
      </CheckboxLabel>

      {/* Coupon & Points */}
      <SectionTitle>쿠폰 & 마일리지</SectionTitle>
      <CouponGroup>
        <CouponInput type="text" placeholder="쿠폰 할인" />
        <CouponButton onClick={openCouponModal}>쿠폰 사용</CouponButton>
      </CouponGroup>
      <CouponGroup>
        <CouponInput type="text" placeholder="적립금 사용" />
        <AllUseButton>모두 사용</AllUseButton>
      </CouponGroup>
      <SubText>보유 적립금: 0원</SubText>
      <SubText>사용가능한 적립금: 0원</SubText>
    </FormTopSection>
  );
};

export default FormTop;
