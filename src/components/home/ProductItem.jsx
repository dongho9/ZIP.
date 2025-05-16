import React from "react";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.li`
  border-right: 1px solid var(--border-color);
  padding-right: 12px;
  &:nth-child(5),
  &:last-child {
    border: 0px solid;
  }

  @media screen and (max-width: 1024px) {
    padding-right: 8px;
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      border: 0px solid;
    }

    &:nth-child(5),
    &:last-child {
      border-right: 1px solid var(--border-color);
    }
    &:last-child {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(6) {
      border: 0px solid;
    }

    &:nth-child(3),
    &:last-child {
      border-right: 1px solid var(--border-color);
    }
    &:nth-child(7),
    &:nth-child(8),
    &:nth-child(9) {
      display: none;
    }
  }
`;
const ProductImg = styled.div`
  cursor: pointer;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 120px;
  padding: 10px 14px;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--light-color);
    background: var(--dark-color);
  }

  @media screen and (max-width: 1024px) {
    padding: 16px;
  }
  @media screen and (max-width: 767px) {
    min-height: 110px;
  }
`;
const Prod_sub = styled.span`
  font-size: 1.4rem;
  color: var(--subTitle);

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
const Prod_name = styled.span`
  font-size: 2rem;
  margin: 10px 0 10px;
  font-weight: 600;

  @media screen and (max-width: 1400px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
    margin: 10px 0 6px;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.6rem;
    margin: 8px 0 6px;
  }
`;
const Prod_price = styled.span`
  margin-top: 6px;
  letter-spacing: 0.2px;
  color: var(--subTitle);
  font-size: 1.4rem;

  @media screen and (max-width: 1024px) {
    margin-top: 2px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 767px) {
  }
`;

/*--- 출력 ---*/
const ProductItem = ({ img, subtitle, name, price }) => {
  return (
    <Container>
      <ProductImg>
        <img src={img} alt="" />
      </ProductImg>
      <ProductInfo>
        <Prod_sub>{subtitle}</Prod_sub>
        <Prod_name>{name}</Prod_name>
        <Prod_price>KRW {price}</Prod_price>
      </ProductInfo>
    </Container>
  );
};

export default ProductItem;
