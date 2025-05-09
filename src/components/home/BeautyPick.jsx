import React from "react";
import styled from "styled-components";
import { motion } from "motion/react";

/*--- 스타일 ---*/
const Container = styled.div`
  background: var(--light-color);
  color: var(--dark-color);
  padding: 100px 3% 0px;
  /* display: flex; */
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--dark-color);
  font-size: 10rem;
  letter-spacing: -4px;
`;
const Button = styled.button`
  font-size: 2rem;
  padding: 22px 50px;
  color: var(--light-color);
  background: var(--dark-color);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;
const ProductList = styled.ul`
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 12px;
  padding-bottom: 1px;
`;
const ProductItem = styled.li`
  border-right: 1px solid var(--border-color);
  padding-right: 12px;
  &:nth-child(5),
  &:last-child {
    border: 0px solid;
  }
`;
const ProductImg = styled.div`
  cursor: pointer;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 1s;
    &:hover {
      transform: scale(120%);
    }
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--light-color);
    background: var(--dark-color);
  }
`;
const Prod_sub = styled.span`
  font-size: 1.4rem;
  color: var(--subTitle);
`;
const Prod_name = styled.span`
  font-size: 2.6rem;
  margin: 10px 0 14px;
  font-weight: bold;
`;
const Prod_price = styled.span`
  margin-top: 6px;
  letter-spacing: 0.2px;
  color: var(--subTitle);
`;

/*--- 출력 ---*/
const BeautyPick = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Beauty Pick</Title>
        <Button>More Zip</Button>
      </MainTitle>
      <ProductList>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000 KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000 KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
        <ProductItem>
          <ProductImg>
            <img src="/src/imgs/product.png" alt="" />
          </ProductImg>
          <ProductInfo>
            <Prod_sub>카리나 PICK</Prod_sub>
            <Prod_name>상품명</Prod_name>
            <Prod_price>300,000KRW</Prod_price>
          </ProductInfo>
        </ProductItem>
      </ProductList>
    </Container>
  );
};

export default BeautyPick;
