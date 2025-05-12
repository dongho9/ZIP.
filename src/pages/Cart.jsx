// CartPage.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

// 초기 상품 데이터
const initialItems = [
  {
    id: 1,
    brand: "CONVERSE",
    name: "CHUCK 70 HI",
    detail: "VERNAL POOL/EGERT/BLACK | 240",
    price: 99000,
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

// 스타일 정의
const PageWrapper = styled.div`
  padding: 40px 60px;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  font-size: 28px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
`;

const CartLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  width: 100%;
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;
  margin-left: 40px;
`;

const SelectAllBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ItemBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-right: 20px;
  border: 1px solid #ddd;
`;

const ItemInfo = styled.div`
  flex: 1;
  gap: 30px;
`;

const Brand = styled.div`
  font-size: 12px;
  color: #666;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 4px 0;
`;

const Detail = styled.div`
  font-size: 12px;
  color: #999;
`;

const PriceQtyTrashRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 16px;
  flex-wrap: wrap;
  // border: 1px solid #f00;
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 25px;
  margin-right: 150px;
  height: 30px;
`;

const QtyBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const QtyControl = styled.div`
  display: flex;
  border: 1px solid #ccc;
  /* border-radius: 4px; */
  overflow: hidden;
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
`;

const Qty = styled.div`
  width: 40px;
  text-align: center;
  line-height: 32px;
  font-size: 14px;
`;

const Trash = styled(FaTrashAlt)`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-top: 18px;
  color: #666;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const PaymentBox = styled.div`
  border: 1px solid #ccc;
  padding: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
`;

const Total = styled(Row)`
  font-weight: bold;
  margin-top: 20px;
`;

const OrderBtn = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 16px;
  background: black;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
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

  const removeSelected = () => {
    setItems(items.filter((item) => !item.selected));
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
            {/* <Trash style={{ marginLeft: "auto" }} onClick={removeSelected} /> */}
          </SelectAllBox>

          {items.map((item) => (
            <ItemBox key={item.id}>
              <input type="checkbox" checked={item.selected} onChange={() => toggleSelectItem(item.id)} />
              <Image src={item.image} alt={item.name} />
              <ItemInfo>
                <Brand>{item.brand}</Brand>
                <Name>{item.name}</Name>
                <Detail>{item.detail}</Detail>

                <PriceQtyTrashRow>
                  <Price>KRW {item.price.toLocaleString()}</Price>
                  <QtyBox>
                    <QtyControl>
                      <Btn onClick={() => changeQty(item.id, -1)}>-</Btn>
                      <Qty>{item.quantity}</Qty>
                      <Btn onClick={() => changeQty(item.id, 1)}>+</Btn>
                    </QtyControl>
                  </QtyBox>
                  <Trash onClick={() => removeItem(item.id)} />
                </PriceQtyTrashRow>
              </ItemInfo>
            </ItemBox>
          ))}
        </Left>

        <Right>
          <PaymentBox>
            <h4 style={{ marginBottom: "20px" }}>결제 정보</h4>
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
            <hr />
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
