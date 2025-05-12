import React, { useState } from "react";
import styled from "styled-components";
import naver_pay from "../imgs/payment/naver_pay.png";
import kakao_pay from "../imgs/payment/kakao_pay.png";
import toss_pay from "../imgs/payment/toss_pay.png";
import payco from "../imgs/payment/payco.png";
import samsung_pay from "../imgs/payment/samsung_pay.png";
import apple_pay from "../imgs/payment/apple_pay.png";

// 오더영역
import shose1 from "../imgs/payment/shose1.png";
import shose2 from "../imgs/payment/shose2.png";
import lotion from "../imgs/payment/beauty1.png";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  text-align: center;
  margin: 40px 0;
  font-weight: bold;
`;

const PageContent = styled.div`
  display: flex;
  gap: 40px;
`;

const FormSection = styled.div`
  flex: 6;
`;

const OrderSection = styled.div`
  flex: 4;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  height: fit-content;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  font-size: 14px;
  margin-bottom: 5px;
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
`;

const PostcodeInput = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const SearchButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 30px 0 15px;
`;

const SubText = styled.p`
  font-size: 12px;
  color: #666;
  margin: 5px 0;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 10px 0;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  margin: 20px 0;
`;

const CouponGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const CouponInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const CouponButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 0 15px;
  border: none;
  cursor: pointer;
`;

const AllUseButton = styled.button`
  background-color: #f1f1f1;
  color: #000;
  padding: 0 15px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const PaymentOption = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #f5f5f5;
  }
`;

const PayLogo = styled.img`
  width: 110px;
  height: 40px;
  object-fit: contain;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const OrderSummary = styled.div`
  margin-top: 15px;
`;

const SummaryTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const SummaryTable = styled.div`
  margin-bottom: 20px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.span`
  font-size: 14px;
`;

const SummaryValue = styled.span`
  font-size: 14px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
`;

const ProductList = styled.div`
  margin-top: 20px;
  max-height: 500px;
  overflow-y: auto;
  border-right: 1px solid #eee;
`;

const ProductItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductBrand = styled.p`
  font-size: 12px;
  font-weight: normal;
  margin-bottom: 3px;
`;

const ProductName = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductOption = styled.p`
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;
  margin-bottom: 8px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const QuantityInput = styled.input`
  width: 30px;
  height: 24px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 12px;
`;

const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: #fff;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

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
  width: 500px;
  max-width: 90%;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 25px;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #000;
    background: #f5f5f5;
    border-radius: 4px;
  }
`;

const ModalBody = styled.div`
  padding: 30px;
`;

const ModalForm = styled.form``;

const ModalFormGroup = styled.div`
  margin-bottom: 30px;
`;

const ModalLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  font-size: 14px;
  color: #333;
`;

const CouponInputGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ModalInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &::placeholder {
    color: #999;
  }
`;

const CouponRegisterButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background: #333;
  }
`;

const ModalSelectWrapper = styled.div`
  position: relative;
`;

const ModalSelectHeader = styled.div`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  min-height: 46px;
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
  max-height: 200px;
  overflow-y: auto;
`;

const ModalOption = styled.div`
  padding: 12px 15px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f9f9f9;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const CheckMark = styled.span`
  color: #000;
  font-size: 18px;
`;

const ModalFooter = styled.div`
  padding: 20px 30px;
  border-top: 1px solid #eee;
  background: #f9f9f9;
`;

const ModalFooterNote = styled.ul`
  font-size: 12px;
  color: #666;
  line-height: 1.5;
  padding-left: 15px;

  li {
    margin-bottom: 3px;
    position: relative;
    padding-left: 8px;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
    }
  }
`;

const Payment = () => {
  const [saveAddress, setSaveAddress] = useState(false);
  const [addressDropdownOpen, setAddressDropdownOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("신규 입력");
  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    refund: false,
  });
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
  });
  const [isCouponModalOpen, setIsCouponModalOpen] = useState(false);
  const [couponDropdownOpen, setCouponDropdownOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState("선택 없음");
  const [couponNumber, setCouponNumber] = useState("");

  // 주소 옵션
  const addressOptions = [
    "신규 입력",
    "기본배송지",
    "A000 | 000 님",
    "B000 | 000 님",
  ];

  // 쿠폰 옵션
  const couponOptions = [
    "선택 없음",
    "MID SEASON OFF SALE 10% COUPON",
    "HAPPY BIRTH DAY 15% COUPON",
    "WELCOME COUPON 10% COUPON",
  ];

  // Mock data
  const orderItems = [
    {
      id: 1,
      brand: "CONVERSE",
      name: "CONVERSE CHUCK 70 HI",
      option: "VERNAL POOL/EGERT/BLACK/240",
      price: 198000,
      image: shose1,
    },
    {
      id: 2,
      brand: "CONVERSE",
      name: "CONVERSE CHUCK 70 HI",
      option: "BLACK/240",
      price: 198000,
      image: shose2,
    },
  ];

  // 가격 계산
  const calculateTotalPrice = () => {
    return orderItems.reduce(
      (sum, item) => sum + item.price * (quantities[item.id] || 1),
      0
    );
  };

  const totalPrice = calculateTotalPrice();

  const handleCheckboxChange = (name) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleAddressDropdown = () => {
    setAddressDropdownOpen(!addressDropdownOpen);
  };

  const selectAddress = (address) => {
    setSelectedAddress(address);
    setAddressDropdownOpen(false);
  };

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[id] || 1) + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  const openCouponModal = () => {
    setIsCouponModalOpen(true);
  };

  const closeCouponModal = () => {
    setIsCouponModalOpen(false);
    setCouponDropdownOpen(false);
  };

  const toggleCouponDropdown = () => {
    setCouponDropdownOpen(!couponDropdownOpen);
  };

  const selectCoupon = (coupon) => {
    setSelectedCoupon(coupon);
    setCouponDropdownOpen(false);
  };

  const applyCoupon = () => {
    // 쿠폰 적용 로직
    console.log("쿠폰 적용:", selectedCoupon, couponNumber);
    closeCouponModal();
  };

  return (
    <Container>
      <PageTitle>Payment</PageTitle>
      <PageContent>
        <FormSection>
          {/* Shipping Information - with dropdown */}
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
                    {option === selectedAddress && (
                      <SelectedMark>✓</SelectedMark>
                    )}
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

          {/* Payment Methods */}
          <SectionTitle>결제 방법</SectionTitle>
          <PaymentGrid>
            <PaymentOption>
              <PayLogo src={naver_pay} alt="네이버페이" />
            </PaymentOption>
            <PaymentOption>
              <PayLogo src={kakao_pay} alt="카카오페이" />
            </PaymentOption>
            <PaymentOption>
              <PayLogo src={toss_pay} alt="토스페이" />
            </PaymentOption>
            <PaymentOption>
              <PayLogo src={payco} alt="페이코" />
            </PaymentOption>
            <PaymentOption>
              <PayLogo src={samsung_pay} alt="삼성페이" />
            </PaymentOption>
            <PaymentOption>
              <PayLogo src={apple_pay} alt="애플페이" />
            </PaymentOption>
            <PaymentOption>신용카드 결제</PaymentOption>
          </PaymentGrid>

          {/* Agreements */}
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreements.terms}
              onChange={() => handleCheckboxChange("terms")}
            />
            주문 내용을 확인했으며, 이용약관에 모두 동의합니다.
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreements.privacy}
              onChange={() => handleCheckboxChange("privacy")}
            />
            [필수] 개인정보 이용/수집 동의
          </CheckboxLabel>

          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={agreements.refund}
              onChange={() => handleCheckboxChange("refund")}
            />
            [필수] 교환하실 상품의 경계상품으로 발송하셔오며, 구매단계에서 동의
            됩니다. 주문이 확정하여 상패고 보다 많은 수량의 동이를 경우 결제가
            취소 될 수 있습니다.
          </CheckboxLabel>

          <OrderButton>주문하기</OrderButton>
        </FormSection>

        <OrderSection>
          <SectionTitle>결제 정보 요약</SectionTitle>
          <SummaryTable>
            <SummaryRow>
              <SummaryLabel>상품 총합 금액</SummaryLabel>
              <SummaryValue>KRW {totalPrice.toLocaleString()}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>할인 적용 금액</SummaryLabel>
              <SummaryValue>KRW 0</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>배송비</SummaryLabel>
              <SummaryValue>KRW 0</SummaryValue>
            </SummaryRow>
            <Divider />
            <SummaryRow>
              <SummaryLabel>상품 금액 합계</SummaryLabel>
              <SummaryValue bold>
                KRW {totalPrice.toLocaleString()}
              </SummaryValue>
            </SummaryRow>
          </SummaryTable>

          <SectionTitle>주문 상품</SectionTitle>
          <ProductList>
            {orderItems.map((item) => (
              <ProductItem key={item.id}>
                <ProductImage>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    height="90"
                  />
                </ProductImage>
                <ProductInfo>
                  <ProductBrand>{item.brand}</ProductBrand>
                  <ProductName>{item.name}</ProductName>
                  <ProductOption>{item.option}</ProductOption>
                  <ProductPrice>KRW {item.price.toLocaleString()}</ProductPrice>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </QuantityButton>
                    <QuantityInput value={quantities[item.id] || 1} readOnly />
                    <QuantityButton
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </QuantityButton>
                    <DeleteButton>
                      <span role="img" aria-label="delete">
                        🗑️
                      </span>
                    </DeleteButton>
                  </QuantityControls>
                </ProductInfo>
              </ProductItem>
            ))}
          </ProductList>
        </OrderSection>
      </PageContent>

      {/* 쿠폰 모달 */}
      <ModalOverlay isOpen={isCouponModalOpen} onClick={closeCouponModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            Coupons
            <CloseButton onClick={closeCouponModal}>×</CloseButton>
          </ModalHeader>
          <ModalBody>
            <ModalForm>
              <ModalFormGroup>
                <ModalLabel>
                  발급받은 쿠폰의 인증번호를 입력해 주세요
                </ModalLabel>
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
                    <ModalOption onClick={() => selectCoupon("선택 없음")}>
                      선택 없음
                      {selectedCoupon === "선택 없음" && (
                        <CheckMark>✓</CheckMark>
                      )}
                    </ModalOption>
                    <ModalOption
                      onClick={() =>
                        selectCoupon("MID SEASON OFF SALE 10% COUPON")
                      }
                    >
                      MID SEASON OFF SALE 10% COUPON
                      {selectedCoupon === "MID SEASON OFF SALE 10% COUPON" && (
                        <CheckMark>✓</CheckMark>
                      )}
                    </ModalOption>
                    <ModalOption
                      onClick={() => selectCoupon("HAPPY BIRTH DAY 15% COUPON")}
                    >
                      HAPPY BIRTH DAY 15% COUPON
                      {selectedCoupon === "HAPPY BIRTH DAY 15% COUPON" && (
                        <CheckMark>✓</CheckMark>
                      )}
                    </ModalOption>
                    <ModalOption
                      onClick={() => selectCoupon("WELCOME COUPON 10% COUPON")}
                    >
                      WELCOME COUPON 10% COUPON
                      {selectedCoupon === "WELCOME COUPON 10% COUPON" && (
                        <CheckMark>✓</CheckMark>
                      )}
                    </ModalOption>
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
    </Container>
  );
};

export default Payment;
