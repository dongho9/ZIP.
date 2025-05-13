import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper/modules";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  color: #fff;
  /* border: 1px solid #f00; */
  position: relative;
  .swiper {
    width: 100%;
    /* height: 500px; */
    /* display: flex; */
    margin: 120px 0 180px 0;
    /* overflow: visible !important; */
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      /* justify-content: space-between; */
      margin-right: 0;
      .swiper-slide {
        margin-right: 0;
        flex-shrink: 1;
      }
    }
    @media screen and (max-width: 1024px) {
      margin: 80px 0 160px 0;
    }
  }
`;
const MainTitle = styled.div`
  display: flex;
  padding: 100px 3% 0px;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h2`
  color: var(--light-color);
  font-size: 10rem;
  /* letter-spacing: -4px; */

  @media screen and (max-width: 1024px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -2px;
  }
`;
const Button = styled.button`
  font-size: 2rem;
  padding: 22px 50px;
  color: var(--dark-color);
  background: var(--light-color);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
    padding: 20px 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    padding: 16px 24px;
  }
`;
const CardItem = styled.li`
  width: 380px;
  height: 500px;
  background: var(--light-color);
  color: var(--dark-color);
  /* background: var(--border); */
  /* border-radius: 10px; */
  /* gap: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 330px;
    height: 420px;
  }
  @media screen and (max-width: 767px) {
    width: 290px;
    height: 380px;
  }
`;
const CardItemInfo = styled.div`
  /* position: absolute; */
  width: inherit;
  padding: 40px;
  text-transform: uppercase;
  position: relative;
  z-index: 1; /* 이미지보다 낮게 설정 */
  span {
    font-size: 2rem;
    font-weight: 300;
  }
  p {
    max-width: 300px;
    font-size: 3.4rem;
    line-height: 4rem;
    margin: 18px 0 30px;
    font-weight: 600;
    cursor: pointer;
  }
  button {
    padding: 15px 16px;
    font-size: 2rem;
    border-radius: 50%;
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    span {
      font-size: 1.6rem;
    }
    p {
      max-width: 280px;
      font-size: 3rem;
      line-height: 3.6rem;
      margin: 8px 0 20px;
    }
    button {
      padding: 10px 11px;
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 767px) {
    span {
      font-size: 1.4rem;
    }
    p {
      max-width: 250px;
      font-size: 2.4rem;
      line-height: 3rem;
      margin: 8px 0 12px;
    }
    button {
      padding: 8px 9px;
    }
  }
`;
const CardImg = styled.div`
  width: 320px;
  height: 320px;
  bottom: -100px;
  position: absolute;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (max-width: 1024px) {
    bottom: -70px;
    width: 260px;
    height: 260px;
  }
  @media screen and (max-width: 767px) {
    bottom: -40px;
    width: 220px;
    height: 220px;
  }
`;

export default function StylePick() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainTitle>
        <Title>Style ZIP.</Title>
        <Button onClick={() => navigate("/filtercategory/style")}>More Zip</Button>
      </MainTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={400}
        loop={true}
        loopedSlides={8}
        modules={[]}
        style={{ overflow: "visible" }}
        className="swiper"
      >
        <SwiperSlide className="swiperItem">
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
        <SwiperSlide>
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
        <SwiperSlide>
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
        <SwiperSlide>
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
        <SwiperSlide>
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
        <SwiperSlide>
          <CardItem>
            <CardItemInfo>
              <span>Equipe urban SW</span>
              <p>세련된 레트로 무드의 Equipe urban</p>
              <button>→</button>
            </CardItemInfo>
            <CardImg>
              <img src="/src/imgs/home/누끼.png" alt="" />
            </CardImg>
          </CardItem>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
