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
];

const PageWrapper = styled.div`
  padding: 40px;
  margin: auto;
  font-family: "Arial", sans-serif;

  @media (max-width: 1024px) {
    padding: 40px;
    margin: 60px 30px;
  }

  @media (max-width: 767px) {
    padding: 40px;
    margin: 60px 30px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 22px;
    margin-bottom: 24px;
  }
`;

const CartLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.5;
  width: 100%;
  padding: 10px;
`;

const Right = styled.div`
  flex: 0.3;
  width: 100%;
  padding: 10px;
`;

const SelectAllBox = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
`;

const ItemBox = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 20px;
  align-items: flex-start;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    text-align: left;
  }
`;

const Image = styled.img`
  width: 124px;
  height: 124px;
  object-fit: cover;
  margin: 0px 8px;
`;

const ItemInfo = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0px;
  }
`;

const Brand = styled.div`
  font-size: 12px;
  color: #666;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0px;
`;

const Detail = styled.div`
  font-size: 12px;
  color: #999;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;

const PriceBox = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: #111;
  margin-top: auto;
`;

const ActionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const QtyControl = styled.div`
  display: flex;
  border: 1px solid #ccc;
`;

const Btn = styled.button`
  width: 32px;
  height: 32px;
  font-size: 16px;
  background: white;
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
  color: #999;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: black;
  }
`;

const PaymentBox = styled.div`
  padding: 10px;
  margin-top: 13px;
`;

const PaymentTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  margin: 33px auto;
`;

const Line = styled.hr`
  border: 1px solid #ccc;
  margin: 30px auto;
`;

const Total = styled(Row)`
  margin: 30px auto;
  font-weight: 700;
  font-size: 16px;
`;

const OrderBtn = styled.button`
  margin-top: 5px;
  width: 100%;
  padding: 14px 0;
  background: black;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:disabled {
    background: #aaa;
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
    setItems(items.map((item) => (item.id === id ? { ...item, selected: !item.selected } : item)));
  };

  const changeQty = (id, diff) => {
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + diff) } : item)));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const selectedItems = items.filter((item) => item.selected);
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <PageWrapper>
      <Title>SHOPPING CART</Title>
      <CartLayout>
        <Left>
          <SelectAllBox>
            <input
              type="checkbox"
              checked={items.length > 0 && items.every((item) => item.selected)}
              onChange={toggleSelectAll}
            />
            <span style={{ marginLeft: "8px" }}>
              전체 선택 ({selectedItems.length}/{items.length})
            </span>
          </SelectAllBox>

          {items.map((item) => (
            <ItemBox key={item.id}>
              <input type="checkbox" checked={item.selected} onChange={() => toggleSelectItem(item.id)} />
              <Image src={item.image} alt={item.name} />
              <ItemInfo>
                <Brand>{item.brand}</Brand>
                <Name>{item.name}</Name>
                <Detail>{item.detail}</Detail>

                <BottomRow>
                  <PriceBox>KRW {item.price.toLocaleString()}</PriceBox>
                  <ActionBox>
                    <QtyControl>
                      <Btn
                        onClick={() => changeQty(item.id, -1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </Btn>
                      <Qty>{item.quantity}</Qty>
                      <Btn onClick={() => changeQty(item.id, 1)}>+</Btn>
                    </QtyControl>
                    <Trash onClick={() => removeItem(item.id)} />
                  </ActionBox>
                </BottomRow>
              </ItemInfo>
            </ItemBox>
          ))}
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
