import React, { useState } from "react";
import styled from "styled-components";
import ShippingAddress from "../../components/mypage/ShippingAddress";

const Container = styled.div`
  padding: 0 3%;
  margin: 0 auto;
  max-width: 800px;

  @media screen and (max-width: 1024px) {
    padding: 0 5%;
    max-width: 700px;
  }

  @media screen and (max-width: 402px) {
    padding: 0 3%;
    max-width: 100%;
  }
`;

const PageTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
  font-weight: bold;
  font-family: "EHNormalTrial", sans-serif;

  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media screen and (max-width: 402px) {
    margin-bottom: 40px;
    font-size: 2.2rem;
  }
`;

const AddressHeader = styled.div`
  margin-bottom: 24px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
  }

  @media screen and (max-width: 402px) {
    margin-bottom: 20px;
  }
`;

const TabButton = styled.button`
  width: 100%;
  padding: 15px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #333;
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 40px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  @media screen and (max-width: 402px) {
    margin-bottom: 25px;
    padding: 12px;
    font-size: 1.3rem;
  }
`;

const AddressList = styled.div`
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 402px) {
    margin-top: 30px;
  }
`;

const AddressItem = styled.div`
  background: #f8f8f8;
  padding: 28px; // 기존 30px에서 약간 줄임
  margin-bottom: 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 24px; // 기존 25px에서 약간 줄임
  }

  @media screen and (max-width: 402px) {
    padding: 18px; // 기존 20px에서 약간 줄임
    margin-bottom: 15px;
  }
`;

const AddressInfo = styled.div`
  font-size: 1.4rem;
  font-family: "Pretendard", sans-serif;
  line-height: 1.7;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 12px;
  }
`;

const AddressName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const DefaultBadgeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DefaultBadge = styled.span`
  background: #333;
  color: #fff;
  padding: 5px 10px;
  font-size: 1.3rem;
  font-family: "Pretendard", sans-serif;
  margin-left: 8px;

  @media screen and (max-width: 402px) {
    font-size: 1rem;
    padding: 4px 8px;
  }
`;

const Recipient = styled.div`
  font-weight: bold;
  font-size: 1.7rem;

  @media screen and (max-width: 402px) {
    font-size: 1.4rem;
  }
`;

const AddressText = styled.div`
  margin-bottom: 5px;
`;

const ZipCode = styled.div`
  color: #666;
`;

const Phone = styled.div`
  color: #666;
  margin-top: 5px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 5px;
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #fff;
  color: #333;
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: #333;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    padding: 9px 18px;
  }

  @media screen and (max-width: 402px) {
    padding: 8px 15px;
    font-size: 1.2rem;
  }
`;

const NoAddressText = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.4rem;
  margin: 60px 0;
  font-family: "Pretendard", sans-serif;

  @media screen and (max-width: 1024px) {
    margin: 50px 0;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    margin: 40px 0;
  }
`;

const UserAddress = () => {
  const [addresses, setAddresses] = useState([
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
  ]);

  // 배송지 모달 상태
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);

  // 모달 열기/닫기 함수
  const handleOpenShippingModal = () => {
    setIsShippingModalOpen(true);
  };

  const handleCloseShippingModal = () => {
    setIsShippingModalOpen(false);
  };

  // 주소 삭제 함수
  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  // 주소 추가 함수
  const handleAddAddress = (newAddressData) => {
    // 새로운 주소 객체 생성
    const newAddressObj = {
      ...newAddressData,
      id: Date.now(), // 임시 고유 ID
    };

    // 새 주소가 기본 배송지라면 다른 주소의 기본 배송지 상태 해제
    let updatedAddresses = [...addresses];
    if (newAddressData.isDefault) {
      updatedAddresses = updatedAddresses.map((addr) => ({
        ...addr,
        isDefault: false,
      }));
    }

    // 새 주소 추가
    setAddresses([...updatedAddresses, newAddressObj]);
  };

  return (
    <Container>
      <PageTitle>User Address</PageTitle>

      <AddressHeader>
        <TabButton onClick={handleOpenShippingModal}>배송지 등록</TabButton>
      </AddressHeader>

      <AddressList>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <AddressItem key={address.id}>
              <AddressInfo>
                <AddressName>
                  <Recipient>{address.recipient}</Recipient>
                  {address.isDefault && (
                    <DefaultBadgeContainer>
                      <DefaultBadge>기본 배송지</DefaultBadge>
                    </DefaultBadgeContainer>
                  )}
                </AddressName>
                <AddressText>{address.address}</AddressText>
                <AddressText>{address.detailAddress}</AddressText>
                <ZipCode>{address.zipCode}</ZipCode>
                <Phone>{address.phone}</Phone>
              </AddressInfo>
              <ActionButtons>
                <ActionButton>수정</ActionButton>
                <ActionButton onClick={() => handleDeleteAddress(address.id)}>
                  삭제
                </ActionButton>
              </ActionButtons>
            </AddressItem>
          ))
        ) : (
          <NoAddressText>입력된 주소가 없습니다.</NoAddressText>
        )}
      </AddressList>

      {/* 배송지 등록 모달 컴포넌트 */}
      <ShippingAddress
        isOpen={isShippingModalOpen}
        onClose={handleCloseShippingModal}
        onAddAddress={handleAddAddress}
      />
    </Container>
  );
};

export default UserAddress;
