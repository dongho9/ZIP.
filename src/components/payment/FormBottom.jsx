import React from "react";
import styled from "styled-components";
import naver_pay from "../../imgs/payment/naver_pay.png";
import kakao_pay from "../../imgs/payment/kakao_pay.png";
import toss_pay from "../../imgs/payment/toss_pay.png";
import payco from "../../imgs/payment/payco.png";
import samsung_pay from "../../imgs/payment/samsung_pay.png";
import apple_pay from "../../imgs/payment/apple_pay.png";

const FormBottomSection = styled.div`
  width: 100%;
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

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 402px) {
    gap: 8px;
  }
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

  @media screen and (max-width: 402px) {
    height: 50px;
    font-size: 1.3rem;
  }
`;

const PayLogo = styled.img`
  width: 110px;
  height: 40px;
  object-fit: contain;

  @media screen and (max-width: 402px) {
    width: 90px;
    height: 30px;
  }
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

const OrderButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;

  @media screen and (max-width: 402px) {
    padding: 12px;
    font-size: 1.5rem;
    margin-top: 15px;
    margin-bottom: 25px;
  }
`;

const FormBottom = ({ agreements, setAgreements }) => {
  const handleCheckboxChange = (name) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <FormBottomSection>
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
        됩니다. 주문이 확정하여 상패고 보다 많은 수량의 동이를 경우 결제가 취소
        될 수 있습니다.
      </CheckboxLabel>

      <OrderButton>주문하기</OrderButton>
    </FormBottomSection>
  );
};

export default FormBottom;
