import React, { useState } from "react";
import styled from "styled-components";
import shose from "../../imgs/payment/shose1.png";

const PageTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
  font-weight: normal;
  margin-bottom: 100px;
  font-family: "EHNormalTrial", sans-serif;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
`;

const FilterControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
`;

// 조회 기간 영역
const FilterLabelGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 1.3rem;
  color: #333;
  margin-right: 16px;
  font-family: "Pretendard", sans-serif;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 4px;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border: none;
  background: ${(props) => (props.active ? "#000" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#999")};
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "EHNormalTrial", sans-serif;
  border-radius: 20px;

  &:hover {
    background: ${(props) => (props.active ? "#000" : "#e0e0e0")};
  }
`;

// 드롭다운 영역
const StatusSelect = styled.select`
  padding: 8px 12px;
  font-size: 1.3rem;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-family: "Pretendard", sans-serif;
  width: 250px;
`;

const OrderItem = styled.div`
  border: 1px solid #e0e0e0;
  margin-bottom: 24px;
  background: #fff;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  background: #f8f8f8;
  border-bottom: 1px solid #e0e0e0;
`;

const OrderInfo = styled.div`
  font-size: 1.3rem;
  color: #666;
  font-family: "Pretendard", sans-serif;
`;

const StatusButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const StatusButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  background: #fff;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: #f8f8f8;
  }
`;

const OrderContent = styled.div`
  display: flex;
  padding: 24px;
  gap: 24px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  background: #f0f0f0;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h3`
  font-size: 1.4rem;
  font-weight: normal;
  margin-bottom: 8px;
  font-family: "Pretendard", sans-serif;
`;

const ProductDetails = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 4px;
  font-family: "Pretendard", sans-serif;
`;

const NoOrders = styled.p`
  text-align: center;
  color: #999;
  font-size: 1.4rem;
  margin: 48px 0;
  font-family: "Pretendard", sans-serif;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 40px;
`;

const ActionButton = styled.button`
  padding: 12px 48px;
  border: 1px solid #e0e0e0;
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
  background: #fff;
  font-family: "EHNormalTrial", sans-serif;
  cursor: pointer;

  &:hover {
    background: #f8f8f8;
  }
`;

const OrderConfirmation = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [selectedCategory, setSelectedCategory] =
    useState("전체 주문처리 상태");

  const filterOptions = ["Today", "1 week", "1 month", "3 month"];
  const categoryOptions = [
    "전체 주문처리 상태",
    "주문 취소",
    "상품 교환",
    "반품/환불 신청",
  ];

  // 샘플 주문 데이터 (실제로는 API에서 가져올 데이터)
  const orders = [
    {
      id: "1",
      date: "2025-04-23 T07:24:53 Thu",
      productName: "CONVERSE CHUCK 70 HI",
      productImage: shose,
      color: "주요상품",
      size: null,
      price: "₩82,000",
    },
  ];

  const hasOrders = orders.length > 0;

  return (
    <>
      <PageTitle>Order Confirmation</PageTitle>

      <FilterSection>
        {/* 필터 컨트롤 - 드롭다운과 조회기간을 한 줄에 배치 */}
        <FilterControls>
          {/* 조회 기간 */}
          <FilterLabelGroup>
            <FilterLabel>조회 기간</FilterLabel>
            <FilterButtons>
              {filterOptions.map((filter) => (
                <FilterButton
                  key={filter}
                  active={selectedFilter === filter}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </FilterButton>
              ))}
            </FilterButtons>
          </FilterLabelGroup>

          {/* 드롭다운 - 불릿 텍스트 제거함 */}
          <StatusSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </StatusSelect>
        </FilterControls>
      </FilterSection>

      {hasOrders ? (
        orders.map((order) => (
          <OrderItem key={order.id}>
            <OrderHeader>
              <OrderInfo>
                주문상품 : {order.productName}
                <br />
                주문일 : {order.date}
              </OrderInfo>
              <StatusButtons>
                <StatusButton>주문 취소</StatusButton>
                <StatusButton>상세보기</StatusButton>
              </StatusButtons>
            </OrderHeader>
            <OrderContent>
              <ProductImage src={order.productImage} alt={order.productName} />
              <ProductInfo>
                <ProductName>{order.productName}</ProductName>
                <ProductDetails>{order.color}</ProductDetails>
                {order.size && (
                  <ProductDetails>Size: {order.size}</ProductDetails>
                )}
                <ProductDetails>{order.price}</ProductDetails>
              </ProductInfo>
            </OrderContent>
          </OrderItem>
        ))
      ) : (
        <>
          <NoOrders>주문 내역이 없습니다.</NoOrders>
          <ActionButtons>
            <ActionButton>SHOP NEW ITEMS</ActionButton>
            <ActionButton>GO TO EVENT PAGE</ActionButton>
          </ActionButtons>
        </>
      )}
    </>
  );
};

export default OrderConfirmation;
