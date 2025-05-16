import React from "react";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.section`
  width: 100%;
  height: 400px;
  background: var(--dark-color);
  color: var(--light-color);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* padding: 0 3%; */

  @media screen and (max-width: 1024px) {
    height: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;
const Title = styled.article`
  padding: 6%;
  font-size: 6rem;
  line-height: 7rem;
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  p {
    font-size: 2rem;
    color: var(--subTitle);
  }

  @media screen and (max-width: 1024px) {
    padding: 6% 3% 0;
    margin-top: 0%;
    font-size: 5rem;
    line-height: 6rem;
    br {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 3.6rem;
    line-height: 6rem;
    p {
      font-size: 1.6rem;
      color: var(--subTitle);
    }
  }
`;
const CardWrapper = styled.ul`
  padding: 6% 3%;
  grid-column: 6 / span 7;
  gap: 14px;
  overflow: hidden;
  display: flex;
`;
const CardItem = styled.li`
  position: relative;
  flex: 1;
  overflow: hidden;
  background: var(--light-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  .text-overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
    color: var(--light-color);
    transition: bottom 0.5s ease;
    h3 {
      /* margin-bottom: 8px; */
      color: var(--lightGray);
    }
    p {
      font-size: 2rem;
      font-weight: 600;
      margin: 8px 0 20px;
    }
    span {
      color: var(--lightGray);
      font-weight: 300;
      display: block;
    }
  }

  &:hover .text-overlay {
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
  }
`;
const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  background: var(--light-color);
  color: var(--dark-color);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-family: "EHNormalTrial";
  font-weight: 700;
  margin-top: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    padding: 20px 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    padding: 16px 24px;
  }
`;

/*--- 출력 ---*/
const SlideBanner = () => {
  return (
    <Container>
      <Title>
        <h2>
          Weekly <br />
          New Product
        </h2>
        <p>새로나온 NEW ZIP 컨텐츠를 만나보세요</p>
      </Title>
      <CardWrapper>
        <CardItem>
          <img
            src="https://lelabokorea-java.s3.amazonaws.com/images/skus/P015075100__PRODUCT_01--IMG_1200--HANDPOMADE-2103394370.jpg"
            alt=""
          />
          <div className="text-overlay">
            <h3>르라보</h3>
            <p>핸드 포마드 히노키 55ml</p>
            <span>KRW 2631000</span>
            <Button>view more</Button>
          </div>
        </CardItem>
        <CardItem>
          <img
            src="https://www.elle.co.kr/resources_old/online/org_online_image/el/b56beedb-798b-4e66-ba98-3674bdebacfb.jpg"
            alt=""
          />
          <div className="text-overlay">
            <h3>샤넬</h3>
            <p>르 리프트 라 크렘 망 핸드크림</p>
            <span>KRW 2631000</span>
            <Button>view more</Button>
          </div>
        </CardItem>
        <CardItem>
          <img
            src="https://assets.levelshoes.com/cdn-cgi/image/width=800,height=1120,quality=85,format=jpeg/media/catalog/product/h/0/h0500-lcl213s-1n001_5.jpg?ts=20240713030523"
            alt=""
          />
          <div className="text-overlay">
            <h3>톰포드</h3>
            <p>블랙 송아지 가죽 지퍼 포트폴리오</p>
            <span>KRW 2631000</span>
            <Button>view more</Button>
          </div>
        </CardItem>
      </CardWrapper>
    </Container>
  );
};

export default SlideBanner;
