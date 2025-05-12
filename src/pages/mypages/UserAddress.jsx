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

const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const AddressTabs = styled.div`
  display: flex;
  gap: 12px;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  background: ${(props) => (props.active ? "#000" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: ${(props) => (props.active ? "#000" : "#f8f8f8")};
  }
`;

const AddNewButton = styled.button`
  padding: 10px 24px;
  background: none;
  border: 1px solid #333;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: #f8f8f8;
  }
`;

const AddressForm = styled.form`
  max-width: 600px;
  margin-bottom: 48px;
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
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
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

const SearchButton = styled.button`
  padding: 12px 24px;
  background: #333;
  color: #fff;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  white-space: nowrap;

  &:hover {
    background: #555;
  }
`;

const AddressList = styled.div`
  margin-top: 48px;
`;

const AddressItem = styled.div`
  border: 1px solid #e0e0e0;
  padding: 24px;
  margin-bottom: 16px;
  position: relative;
`;

const DefaultBadge = styled.span`
  position: absolute;
  top: 16px;
  right: 24px;
  background: #333;
  color: #fff;
  padding: 4px 12px;
  font-size: 1.1rem;
  font-family: "Pretendard", sans-serif;
`;

const AddressInfo = styled.div`
  font-size: 1.3rem;
  font-family: "Pretendard", sans-serif;
  line-height: 1.6;

  .recipient {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .phone {
    color: #666;
    margin-bottom: 8px;
  }

  .address {
    margin-bottom: 4px;
  }
`;

const AddressActions = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: #f8f8f8;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 32px;
  display: flex;
  gap: 12px;
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

const CancelButton = styled(Button)`
  background: #e0e0e0;
  color: #333;

  &:hover {
    background: #d0d0d0;
  }
`;

const NoticeText = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.3rem;
  margin-top: 32px;
  font-family: "Pretendard", sans-serif;
`;

const UserAddress = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState({
    recipient: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    phone: "",
  });

  const addresses = [
    {
      id: 1,
      recipient: "000 님",
      phone: "010-1234-5678",
      zipCode: "14285",
      address: "경기도 00시 00로 157-358번지 (00동, 000아파트)",
      detailAddress: "000아파트 000호",
      isDefault: true,
    },
    {
      id: 2,
      recipient: "000 님",
      phone: "010-1234-5678",
      zipCode: "14285",
      address: "서울특별시 00구 00로 157-358번지 (00동, 000아파트)",
      detailAddress: "000아파트 000호",
      isDefault: false,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 배송지 저장 로직
    console.log("새 배송지 저장:", newAddress);
    setIsAdding(false);
    setNewAddress({
      recipient: "",
      zipCode: "",
      address: "",
      detailAddress: "",
      phone: "",
    });
  };

  return (
    <Container>
      <PageTitle>User Address</PageTitle>

      <AddressHeader>
        <AddressTabs>
          <TabButton
            active={activeTab === "delivery"}
            onClick={() => setActiveTab("delivery")}
          >
            배송지 등록
          </TabButton>
        </AddressTabs>
        <AddNewButton onClick={() => setIsAdding(true)}>신규 추가</AddNewButton>
      </AddressHeader>

      {isAdding && (
        <AddressForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label>수취인</Label>
            <Input
              type="text"
              name="recipient"
              value={newAddress.recipient}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>주소</Label>
            <InputWrapper>
              <Input
                type="text"
                name="zipCode"
                value={newAddress.zipCode}
                onChange={handleInputChange}
                placeholder="우편번호"
                disabled
              />
              <SearchButton type="button">기본 배송지</SearchButton>
              <SearchButton type="button">실제 검색</SearchButton>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="address"
              value={newAddress.address}
              onChange={handleInputChange}
              placeholder="기본주소"
              disabled
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="detailAddress"
              value={newAddress.detailAddress}
              onChange={handleInputChange}
              placeholder="상세주소를 입력해주세요"
            />
          </FormGroup>

          <FormGroup>
            <Label>휴대폰</Label>
            <Input
              type="text"
              name="phone"
              value={newAddress.phone}
              onChange={handleInputChange}
              placeholder="-없이 번호만 입력해주세요"
            />
          </FormGroup>

          <ButtonGroup>
            <SaveButton type="submit">저장</SaveButton>
            <CancelButton type="button" onClick={() => setIsAdding(false)}>
              취소
            </CancelButton>
          </ButtonGroup>
        </AddressForm>
      )}

      <AddressList>
        {addresses.map((address) => (
          <AddressItem key={address.id}>
            {address.isDefault && <DefaultBadge>기본</DefaultBadge>}
            <AddressInfo>
              <div className="recipient">{address.recipient}</div>
              <div className="phone">{address.phone}</div>
              <div className="address">{address.address}</div>
              <div className="address">{address.detailAddress}</div>
              <div>({address.zipCode})</div>
            </AddressInfo>
            <AddressActions>
              <ActionButton>수정</ActionButton>
              <ActionButton>삭제</ActionButton>
            </AddressActions>
          </AddressItem>
        ))}
      </AddressList>

      <NoticeText>입력된 주소가 없습니다.</NoticeText>
    </Container>
  );
};

export default UserAddress;
