import React from "react";
import styled from "styled-components";
// import { motion } from "motion/react";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
`;
const MainTitle = styled.div`
  display: flex;
  padding: 100px 3% 0px;
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
  color: #fff;
  background: #000;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;
const CardSlide = styled.div`
  width: 100%;
  margin: 150px 0 180px 0;
`;
const CardList = styled.ul`
  width: 100%;
  display: flex;
  gap: 80px;
  justify-content: center;
`;
const CardItem = styled.li`
  width: 380px;
  height: 500px;
  background: #e4e4e4;
  /* background: var(--border); */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  align-items: center;
`;
const CardItemInfo = styled.div`
  /* position: absolute; */
  width: inherit;
  padding: 40px;
  span {
    font-size: 2.2rem;
  }
  p {
    max-width: 240px;
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 4rem;
    margin: 14px 0 30px;
  }
  button {
    padding: 9px 10px;
    font-size: 2rem;
    border-radius: 50%;
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
const CardImg = styled.div`
  width: 350px;
  height: 350px;
  bottom: 0;
  /* position: absolute; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StylePick = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Style Pick</Title>
        <Button>More Zip</Button>
      </MainTitle>
      <CardSlide>
        <CardList>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명 </p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명 </p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명 </p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
          <CardItem>
            <CardItemInfo>
              <span>브랜드명</span>
              <p>클래식한 무드의 상품명 </p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </CardList>
      </CardSlide>
    </Container>
  );
};

export default StylePick;
