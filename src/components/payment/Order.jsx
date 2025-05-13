import React from "react";
import styled from "styled-components";
import shose1 from "../../imgs/payment/shose1.png";
import shose2 from "../../imgs/payment/shose2.png";

const OrderSection = styled.div`
  flex: 4;
  position: sticky;
  top: 20px;
  align-self: flex-start;
  height: fit-content;
  order: 2;

  @media screen and (max-width: 1024px) {
    flex: none;
    width: 100%;
    position: relative;
    top: 0;
    order: 1;
    /* padding: 15px; */
    border-radius: 4px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 15px 0;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 5px 0 15px 0;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.5rem;
    margin: 5px 0 10px 0;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  margin: 20px 0;
`;

const OrderSummary = styled.div`
  margin-top: 15px;
`;

const SummaryTable = styled.div`
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 4px;
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.span`
  font-size: 1.4rem;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const SummaryValue = styled.span`
  font-size: 1.4rem;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const ProductList = styled.div`
  margin-top: 20px;
  max-height: 500px;
  overflow-y: auto;
  border-right: 1px solid #eee;

  @media screen and (max-width: 1024px) {
    max-height: 300px;
    border-right: none;
    border-radius: 4px;
    padding: 10px;
  }

  @media screen and (max-width: 402px) {
    max-height: 250px;
    border-right: none;
  }
`;

const ProductItem = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 402px) {
    margin-bottom: 20px;
  }
`;

const ProductImage = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 15px;

  @media screen and (max-width: 402px) {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductBrand = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 3px;
`;

const ProductName = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 5px;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
  }
`;

const ProductOption = styled.p`
  font-size: 1.2rem;
  color: #999;
  margin-bottom: 10px;

  @media screen and (max-width: 402px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-right: 10px;

  @media screen and (max-width: 402px) {
    font-size: 1.2rem;
  }
`;

const PriceQuantityRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 402px) {
    width: 22px;
    height: 22px;
    font-size: 1.2rem;
  }
`;

const QuantityInput = styled.input`
  width: 30px;
  height: 24px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-left: none;
  border-right: none;
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: 402px) {
    width: 25px;
    height: 22px;
    font-size: 1.1rem;
  }
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
  font-size: 1.2rem;

  @media screen and (max-width: 402px) {
    width: 22px;
    height: 22px;
    margin-left: 5px;
  }
`;

const Order = ({ quantities, setQuantities }) => {
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

  const handleQuantityChange = (id, change) => {
    setQuantities((prev) => {
      const newQuantity = Math.max(1, (prev[id] || 1) + change);
      return { ...prev, [id]: newQuantity };
    });
  };

  return (
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
          <SummaryValue bold>KRW {totalPrice.toLocaleString()}</SummaryValue>
        </SummaryRow>
      </SummaryTable>

      <SectionTitle>주문 상품</SectionTitle>
      <ProductList>
        {orderItems.map((item) => (
          <ProductItem key={item.id}>
            <ProductImage>
              <img src={item.image} alt={item.name} width="80" height="90" />
            </ProductImage>
            <ProductInfo>
              <ProductBrand>{item.brand}</ProductBrand>
              <ProductName>{item.name}</ProductName>
              <ProductOption>{item.option}</ProductOption>
              <PriceQuantityRow>
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
              </PriceQuantityRow>
            </ProductInfo>
          </ProductItem>
        ))}
      </ProductList>
    </OrderSection>
  );
};

export default Order;
