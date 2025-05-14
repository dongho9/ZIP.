// Cart.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import GlobalStyles from "../styles/GlobalStyles.styles";

const initialItems = [
  {
    id: 1,
    brand: "CONVERSE",
    name: "CHUCK 70 HI",
    detail: "VERNAL POOL/EGERT/BLACK | 240",
    price: 198000,
    image: "../src/imgs/cart/shoes1.png",
    quantity: 2,
    selected: true,
  },
  {
    id: 2,
    brand: "CONVERSE",
    name: "CHUCK 70 HI",
    detail: "BLACK/EGERT/BLACK | 260",
    price: 105500,
    image: "../src/imgs/cart/shoes2.png",
    quantity: 1,
    selected: true,
  },
  {
    id: 3,
    brand: "CONVERSE",
    name: "CHUCK 70 HI",
    detail: "BLACK/EGERT/BLACK | 260",
    price: 105500,
    image: "../src/imgs/cart/shoes2.png",
    quantity: 1,
    selected: true,
  },
  {
    id: 4,
    brand: "CONVERSE",
    name: "CHUCK 70 HI",
    detail: "BLACK/EGERT/BLACK | 260",
    price: 105500,
    image: "../src/imgs/cart/shoes2.png",
    quantity: 1,
    selected: true,
  },
];

const PageWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  min-height: calc(100vh - 250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }

  @media (max-width: 767px) {
    padding: 30px 16px;
    gap: 20px;
  }
`;

const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

const EmptyMessage = styled.div`
  height: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  color: var(--dark-color);
  text-align: center;
  border: 1px solid var(--border-color);
  @media (max-width: 767px) {
    height: 200px;
    font-size: 1.4rem;
  }
`;

const CartLayout = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 40px;
  }

  @media (max-width: 767px) {
    gap: 20px;
  }
`;

const Left = styled.div`
  flex: 0.6;
`;

const Right = styled.div`
  flex: 0.4;
  height: 100%;
`;

const OrderSummary = styled.div`
  margin: 10px 0px;
  padding: 30px;
`;

const SelectAllBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: "Pretendard", sans-serif;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 30px 0;

  @media (max-width: 767px) {
    flex-direction: row;
    gap: 12px;
  }
`;

const Image = styled.img`
  width: 122px;
  height: 122px;
  object-fit: cover;
  margin: 0 8px;

  @media (max-width: 767px) {
    width: 50%;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: "EHNormalTrial", sans-serif;

  @media (max-width: 767px) {
    margin-top: 0;
    margin-bottom: auto;
  }
`;

const Brand = styled.div`
  font-size: 1.6rem;
  color: var(--subTitle);
`;

const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`;

const Detail = styled.div`
  font-size: 1.6rem;
  color: var(--subTitle);
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const PriceBox = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  font-family: "Pretendard", sans-serif;
  color: var(--dark-color);
`;

const ActionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const QtyControl = styled.div`
  display: flex;
  border: 1px solid var(--border-color);
`;

const QtyBtn = styled.button`
  width: 100%;
  font-size: 16px;
  background: var(--light-color);
  border: none;
  cursor: pointer;

  &:hover {
    background: #eee;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Qty = styled.div`
  width: 40px;
  text-align: center;
  line-height: 32px;
`;

const Trash = styled(FaTrashAlt)`
  color: var(--dark-color);
  cursor: pointer;
  font-size: 1.8rem;

  &:hover {
    color: var(--dark-color);
  }
`;

const PaymentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 10px 0px;
  padding: 30px;
  background-color: #f8f8f8;
  font-family: "Pretendard", sans-serif;
  border: 1px solid var(--border-color);
`;

const PaymentTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 30px;
`;

const Line = styled.hr`
  border: 1px solid var(--border-color);
  margin: 30px 0;
`;

const Total = styled(Row)`
  font-size: 1.6rem;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: 30px;
`;

const OrderBtn = styled.button`
  width: 100%;
  padding: 14px 0;
  background: black;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin: 0px auto;
  position: sticky;

  &:disabled {
    background: var(--lightGray);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #222;
  }
`;

const Cart = () => {
  const [items, setItems] = useState(initialItems);

  const toggleSelectAll = () => {
    const allSelected = items.every((item) => item.selected);
    setItems(items.map((item) => ({ ...item, selected: !allSelected })));
  };

  const toggleSelectItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const changeQty = (id, diff) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + diff) }
          : item
      )
    );
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + diff) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const selectedItems = items.filter((item) => item.selected);
  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <PageWrapper>
      <GlobalStyles />
      <Title>SHOPPING CART</Title>
      <CartLayout>
        <Left>
          {items.length === 0 ? (
            <EmptyMessage>상품이 비었습니다.</EmptyMessage>
          ) : (
            <OrderSummary>
              <SelectAllBox>
                <input
                  type="checkbox"
                  checked={
                    items.length > 0 && items.every((item) => item.selected)
                  }
                  onChange={toggleSelectAll}
                />
                <span style={{ marginLeft: "8px" }}>
                  전체 선택 ({selectedItems.length}/{items.length})
                </span>
              </SelectAllBox>

              {items.map((item) => (
                <ItemBox key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => toggleSelectItem(item.id)}
                  />
                  <Image src={item.image} alt={item.name} />
                  <ItemInfo>
                    <Brand>{item.brand}</Brand>
                    <Name>{item.name}</Name>
                    <Detail>{item.detail}</Detail>
                    <BottomRow>
                      <PriceBox>KRW {item.price.toLocaleString()}</PriceBox>
                      <ActionBox>
                        <QtyControl>
                          <QtyBtn
                            onClick={() => changeQty(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </QtyBtn>
                          <Qty>{item.quantity}</Qty>
                          <QtyBtn onClick={() => changeQty(item.id, 1)}>
                            +
                          </QtyBtn>
                        </QtyControl>
                        <Trash onClick={() => removeItem(item.id)} />
                      </ActionBox>
                    </BottomRow>
                  </ItemInfo>
                </ItemBox>
              ))}
            </OrderSummary>
          )}
        </Left>

        <Right>
          <PaymentBox>
            <PaymentTitle>결제 정보</PaymentTitle>
            <Row>
              <div>상품 총합 금액</div>
              <div>KRW {totalPrice.toLocaleString()}</div>
            </Row>
            <Row>
              <div>할인 적용 금액</div>
              <div>KRW 0</div>
            </Row>
            <Row>
              <div>배송비</div>
              <div>KRW 0</div>
            </Row>
            <Line />
            <Total>
              <div>상품 금액 합계</div>
              <div>KRW {totalPrice.toLocaleString()}</div>
            </Total>
            <OrderBtn disabled={selectedItems.length === 0}>주문하기</OrderBtn>
          </PaymentBox>
        </Right>
      </CartLayout>
    </PageWrapper>
  );
};

export default Cart;
