import React from "react";
import styled from "styled-components";

// 모달 관련 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 450px;
  height: 450px; 
  max-width: 90%;
  border-radius: 8px;
  overflow: visible;
  position: relative;
  display: flex;
  flex-direction: column; /* 컨텐츠를 열 방향으로 배치 */

  @media screen and (max-width: 402px) {
    max-width: 95%;
  }
`;

const ModalHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #eee;
  position: relative;
  text-align: center;
  flex-shrink: 0; /* 헤더 크기 고정 */

  @media screen and (max-width: 402px) {
    padding: 15px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  font-family: "EHNormalTrial", sans-serif;

  @media screen and (max-width: 402px) {
    font-size: 1.8rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    color: #000;
    background: #f5f5f5;
    border-radius: 4px;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
  overflow-y: visible; /* 내용이 넘칠 경우 스크롤 생성 */
  flex: 1; /* 남은 공간 모두 차지하도록 설정 */

  @media screen and (max-width: 402px) {
    padding: 15px;
  }
`;

const ModalForm = styled.form``;

const ModalFormGroup = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 402px) {
    margin-bottom: 15px;
  }
`;

const ModalLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #333;

  @media screen and (max-width: 402px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

const CouponInputGroup = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 402px) {
    gap: 5px;
  }
`;

const ModalInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.3rem;

  &::placeholder {
    color: #999;
  }

  @media screen and (max-width: 402px) {
    padding: 8px 10px;
    font-size: 1.2rem;
  }
`;

const CouponRegisterButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.3rem;
  white-space: nowrap;

  &:hover {
    background: #333;
  }

  @media screen and (max-width: 402px) {
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

const ModalSelectWrapper = styled.div`
  position: relative;
`;

const ModalSelectHeader = styled.div`
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  min-height: 42px;
  font-size: 1.3rem;

  @media screen and (max-width: 402px) {
    padding: 8px 10px;
    min-height: 38px;
    font-size: 1.2rem;
  }
`;

const ModalSelectOptions = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  z-index: 10;
  max-height: 150px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 402px) {
    max-height: 120px;
  }
`;

const ModalOption = styled.div`
  padding: 10px 15px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;

  &:hover {
    background: #f9f9f9;
  }

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 402px) {
    padding: 8px 10px;
    font-size: 1.2rem;
  }
`;

const CheckMark = styled.span`
  color: #000;
  font-size: 1.6rem;

  @media screen and (max-width: 402px) {
    font-size: 1.4rem;
  }
`;

const ModalFooter = styled.div`
  padding: 15px 20px;
  border-top: 1px solid #eee;
  background: #f9f9f9;
  border-radius: 0 0 8px 8px;
  flex-shrink: 0;

  @media screen and (max-width: 402px) {
    padding: 12px 15px;
  }
`;

const ModalFooterNote = styled.ul`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.4;
  padding-left: 12px;
  margin: 0;

  li {
    margin-bottom: 3px;
    position: relative;
    padding-left: 8px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 402px) {
    font-size: 1rem;
    padding-left: 10px;
    line-height: 1.3;
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.3s;
`;

const CouponModal = ({
  isOpen,
  onClose,
  couponNumber,
  setCouponNumber,
  selectedCoupon,
  setSelectedCoupon,
  couponDropdownOpen,
  toggleCouponDropdown,
  applyCoupon,
}) => {
  // 쿠폰 옵션
  const couponOptions = [
    "선택 없음",
    "MID SEASON OFF SALE 10% COUPON",
    "HAPPY BIRTH DAY 15% COUPON",
    "WELCOME COUPON 10% COUPON",
  ];

  const selectCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    toggleCouponDropdown();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Coupons</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <ModalForm>
            <ModalFormGroup>
              <ModalLabel>발급받은 쿠폰의 인증번호를 입력해 주세요</ModalLabel>
              <CouponInputGroup>
                <ModalInput
                  type="text"
                  placeholder="Coupon Number"
                  value={couponNumber}
                  onChange={(e) => setCouponNumber(e.target.value)}
                />
                <CouponRegisterButton type="button">
                  쿠폰 등록
                </CouponRegisterButton>
              </CouponInputGroup>
            </ModalFormGroup>

            <ModalFormGroup>
              <ModalSelectWrapper>
                <ModalSelectHeader onClick={toggleCouponDropdown}>
                  {selectedCoupon}
                  <ArrowIcon isOpen={couponDropdownOpen} />
                </ModalSelectHeader>
                <ModalSelectOptions isOpen={couponDropdownOpen}>
                  {couponOptions.map((option) => (
                    <ModalOption
                      key={option}
                      onClick={() => selectCoupon(option)}
                    >
                      {option}
                      {selectedCoupon === option && <CheckMark>✓</CheckMark>}
                    </ModalOption>
                  ))}
                </ModalSelectOptions>
              </ModalSelectWrapper>
            </ModalFormGroup>
          </ModalForm>
        </ModalBody>

        <ModalFooter>
          <ModalFooterNote>
            <li>
              상품 쿠폰과 장바구니 쿠폰은 함께 사용할 수 있습니다. 단, 일부
              상품은 중복 사용이 제한됩니다.
            </li>
            <li>쿠폰 사용 불가 상품은 쿠폰 할인 적용에 불가합니다.</li>
          </ModalFooterNote>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CouponModal;
