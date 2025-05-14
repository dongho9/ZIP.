import React, { useState } from "react";
import styled from "styled-components";
import shose from "../../imgs/payment/shose1.png";
import OrderCancelModal from "../../components/mypage/OrderCancelModal";
import OrderDetailModal from "../../components/mypage/OrderDetailModal";

const Container = styled.div`
  padding: 0 3%;
  margin: 0 auto;
  max-width: 1200px;
  box-sizing: border-box;

  @media screen and (max-width: 1024px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 402px) {
    padding: 0 3%;
  }
`;

const PageTitle = styled.h1`
  font-size: 3.6rem;
  text-align: center;
  font-weight: bold;
  margin-top: 60px;
  margin-bottom: 120px;
  font-family: "EHNormalTrial", sans-serif;

  @media screen and (max-width: 1024px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 402px) {
    font-size: 2.2rem;
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 50px;
`;

const FilterControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
    padding-bottom: 15px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  @media screen and (max-width: 402px) {
    margin-bottom: 20px;
    padding-bottom: 10px;
    gap: 15px;
  }
`;

const FilterLabelGroup = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  }

  @media screen and (max-width: 402px) {
    gap: 8px;
  }
`;

const FilterLabel = styled.label`
  font-size: 1.6rem;
  font-weight: bold;
  color: #666;
  margin-right: 16px;
  font-family: "Pretendard", sans-serif;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 1024px) {
    gap: 6px;
  }

  @media screen and (max-width: 576px) {
    overflow-x: auto;
    width: 100%;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 402px) {
    gap: 4px;
  }
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border: none;
  background: ${(props) => (props.active ? "#000" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#999")};
  font-size: 1.5rem;
  cursor: pointer;
  font-family: "EHNormalTrial", sans-serif;
  border-radius: 20px;
  white-space: nowrap;
  &:hover {
    background: ${(props) => (props.active ? "#000" : "#e0e0e0")};
  }
  @media screen and (max-width: 1024px) {
    padding: 8px 15px;
    font-size: 1.4rem;
  }
  @media screen and (max-width: 402px) {
    padding: 6px 12px;
    font-size: 1.3rem;
  }
`;

const StatusSelect = styled.select`
  padding: 10px 16px;
  font-size: 1.4rem;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-family: "Pretendard", sans-serif;
  width: 250px;
  height: 45px;

  @media screen and (max-width: 1024px) {
    height: 42px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 402px) {
    height: 40px;
    font-size: 1.2rem;
    padding: 10px 14px;
  }
`;

const OrderItem = styled.div`
  margin-bottom: 40px;
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  @media screen and (max-width: 402px) {
    margin-bottom: 30px;
  }
`;

const OrderContent = styled.div`
  display: flex;
  padding: 35px 30px;
  gap: 40px;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 25px 20px;
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
  }

  @media screen and (max-width: 402px) {
    padding: 15px;
    gap: 15px;
  }
`;

const ProductImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }

  @media screen and (max-width: 402px) {
    width: 80px;
    height: 80px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const OrderInfo = styled.div`
  font-size: 1.4rem;
  line-height: 1.8;
  color: #666;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 8px;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    line-height: 1.6;
  }
`;

const OrderStatus = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) =>
    props.status === "교환 요청"
      ? "#1a73e8"
      : props.status === "반품 요청"
      ? "#e94235"
      : "#333"};
  margin-top: 10px;
  font-family: "Pretendard", sans-serif;

  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    margin-top: 8px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ActionButtonSmall = styled.button`
  padding: 12px 30px;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;
  transition: all 0.3s;
  border-radius: 2px;
  height: 45px;

  &:hover {
    background: #333;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    padding: 10px 25px;
    font-size: 1.4rem;
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 402px) {
    padding: 8px 20px;
    font-size: 1.3rem;
    height: 38px;
  }
`;

const NoOrders = styled.p`
  text-align: center;
  color: #999;
  font-size: 1.6rem;
  margin: 80px 0;
  font-family: "Pretendard", sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
    margin: 60px 0;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.4rem;
    margin: 40px 0;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
    margin-top: 60px;
    margin-bottom: 70px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
  }

  @media screen and (max-width: 402px) {
    margin-top: 40px;
    margin-bottom: 60px;
    gap: 10px;
  }
`;

const ActionButton = styled.button`
  padding: 16px 60px;
  border: 1px solid #e0e0e0;
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  background: #fff;
  font-family: "EHNormalTrial", sans-serif;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;

  &:hover {
    background: #f8f8f8;
  }

  @media screen and (max-width: 1024px) {
    padding: 14px 50px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media screen and (max-width: 402px) {
    padding: 12px 0;
    font-size: 1.3rem;
  }
`;

const OrderConfirmation = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const [selectedCategory, setSelectedCategory] =
    useState("전체 주문처리 상태");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const filterOptions = ["Today", "1 week", "1 month", "3 month"];
  const categoryOptions = [
    "전체 주문처리 상태",
    "주문 취소",
    "상품 교환",
    "반품/환불 신청",
  ];

  // 샘플 주문 데이터 (실제로는 API에서 가져올 데이터)
  const [orders, setOrders] = useState([
    {
      id: "ORD-20250423-084",
      date: "2025-04-23 T07:24:53 Thu",
      productName: "CONVERSE CHUCK 70 HI",
      productImage: shose,
      color: "Mint",
      size: null,
      price: "₩49,000",
      quantity: 1,
      status: "정상 배송", // 기본 상태
    },
  ]);

  const hasOrders = orders.length > 0;

  // 주문 취소 모달 열기
  const handleOpenOrderModal = (orderId) => {
    setCurrentOrderId(orderId);
    setIsOrderModalOpen(true);
  };

  // 상세보기 모달 열기
  const handleOpenDetailModal = (orderId) => {
    setCurrentOrderId(orderId);
    setIsDetailModalOpen(true);
  };

  // 교환 요청 처리
  const handleExchangeRequest = () => {
    setOrders(
      orders.map((order) =>
        order.id === currentOrderId ? { ...order, status: "교환 요청" } : order
      )
    );
    setIsOrderModalOpen(false);
  };

  // 반품 요청 처리
  const handleReturnRequest = () => {
    setOrders(
      orders.map((order) =>
        order.id === currentOrderId ? { ...order, status: "반품 요청" } : order
      )
    );
    setIsOrderModalOpen(false);
  };

  // 교환/반품 취소 처리
  const handleCancelRequest = () => {
    setOrders(
      orders.map((order) =>
        order.id === currentOrderId ? { ...order, status: "정상 배송" } : order
      )
    );
    setIsDetailModalOpen(false);
  };

  // 현재 선택된 주문 찾기
  const getCurrentOrder = () => {
    return orders.find((order) => order.id === currentOrderId) || {};
  };

  return (
    <Container>
      <PageTitle>Order Confirmation</PageTitle>
      <FilterSection>
        <FilterControls>
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
            <OrderContent>
              <ProductImage src={order.productImage} alt={order.productName} />
              <ProductInfo>
                <OrderInfo>
                  주문상품: {order.productName}
                  <br />
                  주문일: {order.date}
                </OrderInfo>
                <OrderStatus status={order.status}>
                  상태: {order.status}
                </OrderStatus>
              </ProductInfo>
              <ButtonsContainer>
                <ActionButtonSmall
                  onClick={() => handleOpenOrderModal(order.id)}
                >
                  주문 취소
                </ActionButtonSmall>
                <ActionButtonSmall
                  onClick={() => handleOpenDetailModal(order.id)}
                >
                  상세보기
                </ActionButtonSmall>
              </ButtonsContainer>
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

      {/* Using the separate modals component */}
      <OrderCancelModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        order={getCurrentOrder()}
        onExchangeRequest={handleExchangeRequest}
        onReturnRequest={handleReturnRequest}
      />

      <OrderDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        order={getCurrentOrder()}
        onCancelRequest={handleCancelRequest}
      />
    </Container>
  );
};

export default OrderConfirmation;
