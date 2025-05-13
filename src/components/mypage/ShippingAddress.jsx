import React from "react";
import styled from "styled-components";

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px;
  width: 90%;
  max-width: 600px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 30px;
    max-width: 500px;
  }

  @media screen and (max-width: 402px) {
    padding: 25px 20px;
    width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 402px) {
    margin-bottom: 20px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  width: 100%;
  font-family: "Pretendard", sans-serif;
  padding-right: 24px; /* Space for close button */

  @media screen and (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.6rem;
    padding-right: 20px;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  padding: 0;
  color: #000;
  position: absolute;
  right: 40px;
  top: 40px;

  @media screen and (max-width: 1024px) {
    right: 30px;
    top: 30px;
    font-size: 2.2rem;
  }

  @media screen and (max-width: 402px) {
    right: 20px;
    top: 25px;
    font-size: 2rem;
  }
`;

const AddressForm = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
  width: 100%;

  @media screen and (max-width: 402px) {
    margin-bottom: 8px;
  }
`;

const Label = styled.div`
  display: block;
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 8px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    margin-bottom: 6px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  font-size: 1.4rem;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #333;
  }

  &:disabled {
    background: #f8f8f8;
    color: #999;
  }

  @media screen and (max-width: 1024px) {
    padding: 12px;
  }

  @media screen and (max-width: 402px) {
    padding: 10px;
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 402px) {
    gap: 5px;
  }
`;

const ZipCodeInput = styled(Input)`
  flex: 1;
`;

const SearchButton = styled.button`
  padding: 0 15px;
  height: 47px; /* 입력 필드 높이와 맞춤 */
  background: #000;
  color: #fff;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    height: 41px; /* 조정된 입력 필드 높이에 맞춤 */
    padding: 0 12px;
  }

  @media screen and (max-width: 402px) {
    height: 37px; /* 조정된 입력 필드 높이에 맞춤 */
    padding: 0 10px;
    font-size: 1.2rem;
  }
`;

const NoteText = styled.div`
  color: #999;
  font-size: 1.2rem;
  margin-top: 5px;
  font-family: "Pretendard", sans-serif;

  @media screen and (max-width: 402px) {
    font-size: 1.1rem;
    margin-top: 3px;
  }
`;

const CheckboxContainer = styled.div`
  margin: 15px 0;

  @media screen and (max-width: 402px) {
    margin: 12px 0;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  color: #333;
  font-family: "Pretendard", sans-serif;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
  width: 20px;
  height: 20px;

  @media screen and (max-width: 402px) {
    margin-right: 8px;
    width: 18px;
    height: 18px;
  }
`;

const SaveButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #000;
  color: #fff;
  border: none;
  font-size: 1.6rem;
  font-family: "Pretendard", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    padding: 12px;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 402px) {
    padding: 10px;
    font-size: 1.4rem;
  }
`;

const ShippingAddress = ({ isOpen, onClose, onAddAddress }) => {
  // 새 주소 상태 관리
  const [newAddress, setNewAddress] = React.useState({
    recipient: "",
    phone: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    isDefault: false,
  });

  // 새 주소 입력값 변경 함수
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress({
      ...newAddress,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 주소 저장 함수
  const handleSaveAddress = (e) => {
    e.preventDefault();

    // 부모 컴포넌트로 새 주소 전달
    onAddAddress(newAddress);

    // 입력 폼 초기화
    setNewAddress({
      recipient: "",
      phone: "",
      zipCode: "",
      address: "",
      detailAddress: "",
      isDefault: false,
    });

    // 모달 닫기
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Shipping Address</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>

        <AddressForm onSubmit={handleSaveAddress}>
          <FormGroup>
            <Input
              type="text"
              name="title"
              placeholder="배송지명"
              value={newAddress.title || ""}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="recipient"
              placeholder="이름"
              value={newAddress.recipient}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>주소</Label>
            <InputWrapper>
              <ZipCodeInput
                type="text"
                name="zipCode"
                placeholder="우편번호"
                value={newAddress.zipCode}
                onChange={handleInputChange}
                required
                readOnly
              />
              <SearchButton type="button">우편번호 검색</SearchButton>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="address"
              placeholder="주소"
              value={newAddress.address}
              onChange={handleInputChange}
              required
              readOnly
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="detailAddress"
              placeholder="상세주소"
              value={newAddress.detailAddress}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="tel"
              name="phone"
              placeholder="휴대폰 번호"
              value={newAddress.phone}
              onChange={handleInputChange}
              required
            />
            <NoteText>하이픈(-) 없이 입력</NoteText>
          </FormGroup>

          <CheckboxContainer>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="isDefault"
                checked={newAddress.isDefault}
                onChange={handleInputChange}
              />
              기본 배송지로 저장
            </CheckboxLabel>
          </CheckboxContainer>

          <SaveButton type="submit">저장</SaveButton>
        </AddressForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ShippingAddress;
