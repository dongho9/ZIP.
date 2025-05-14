import React, { useState } from "react";
import styled from "styled-components";
import FormTop from "../components/payment/FormTop";
import FormBottom from "../components/payment/FormBottom";
import Order from "../components/payment/Order";
import CouponModal from "../components/payment/CouponModal";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3%;
`;

const PageTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin: 40px 0;
  font-weight: bold;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    margin: 30px 0;
    margin-top: 60px;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.8rem;
    margin: 20px 0;
    margin-top: 60px;
  }
`;

const PageContent = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }

  @media screen and (max-width: 402px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// This is the left section on desktop that will split into top and bottom on mobile
const FormSection = styled.div`
  flex: 6;

  @media screen and (max-width: 1024px) {
    flex: none;
    width: 100%;
  }
`;

// This is the right section on desktop
const OrderSection = styled.div`
  flex: 4;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  height: fit-content;

  @media screen and (max-width: 1024px) {
    flex: none;
    width: 100%;
    position: relative;
    top: 0;
    display: none; /* Hide this on mobile as we'll show Order in between form sections */
  }
`;

// This only appears on mobile, positioned between FormTop and FormBottom
const MobileOrderSection = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
    margin: 20px 0;
  }
`;

const Payment = () => {
  // State management for different components
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

  // Handler functions
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
          {/* Top part of the form (shipping info & coupon/mileage) */}
          <FormTop
            saveAddress={saveAddress}
            setSaveAddress={setSaveAddress}
            addressDropdownOpen={addressDropdownOpen}
            setAddressDropdownOpen={setAddressDropdownOpen}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            openCouponModal={openCouponModal}
          />

          {/* Order section that only appears on mobile between form sections */}
          <MobileOrderSection>
            <Order quantities={quantities} setQuantities={setQuantities} />
          </MobileOrderSection>

          {/* Bottom part of the form (payment methods & agreements) */}
          <FormBottom agreements={agreements} setAgreements={setAgreements} />
        </FormSection>

        {/* Order section that appears on desktop */}
        <OrderSection>
          <Order quantities={quantities} setQuantities={setQuantities} />
        </OrderSection>
      </PageContent>

      <CouponModal
        isOpen={isCouponModalOpen}
        onClose={closeCouponModal}
        couponNumber={couponNumber}
        setCouponNumber={setCouponNumber}
        selectedCoupon={selectedCoupon}
        setSelectedCoupon={setSelectedCoupon}
        couponDropdownOpen={couponDropdownOpen}
        toggleCouponDropdown={toggleCouponDropdown}
        applyCoupon={applyCoupon}
      />
    </Container>
  );
};

export default Payment;
