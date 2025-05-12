import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// import SlideSection from "./SlideSection";

// import "./styles.css";
// import "/node_modules/swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from "swiper/modules";

//슬라이드 목업 데이터
const slides = [
  {
    image: "https://live.staticflickr.com/65535/53594693457_167b1ede8b_o.jpg",
    // image: "https://live.staticflickr.com/65535/53594693517_15cbd4832f_o.jpg",
    title: "윈터의",
    video: "/videos/main_2.mp4",
  },
  {
    image: "https://pbs.twimg.com/media/Gnu6RwCagAAK7y3?format=jpg&name=large",
    title: "공명 & 김민하의",
    video: "/videos/main_3.mp4",
  },
  {
    image: "https://live.staticflickr.com/65535/52179222680_027d60eb7e_o.jpg",
    // image: "https://live.staticflickr.com/65535/52179222645_d288f3d839_o.jpg",
    // image: "https://live.staticflickr.com/65535/51878475053_65bf0a7e27_o.jpg",
    // image: "https://live.staticflickr.com/65535/53002595028_306c2cc6a1_o.jpg",
    title: "고민시의",
    video: "/videos/main_4.mp4",
  },
  {
    // image: "https://www.nemopan.com/files/attach/images/6294/591/694/018/bbe05e023c9a18820a0b1906c534bc0b.jpg",
    image: "https://pbs.twimg.com/media/GniPbUkakAA-Afx.jpg:large",
    title: "차은우의",
    video: "/videos/main_5.mp4",
  },
  {
    image: "https://live.staticflickr.com/65535/54156681354_a544af095a_o.jpg",
    title: "아일릿의",
    video: "/videos/main_6.mp4",
  },
  {
    image:
      "https://www.cosmopolitan.co.kr/resources/online/online_image/2025/01/21/32b5668b-9f68-4e77-8f81-48d847320422.jpg",
    title: "서강준의",
    video: "/videos/main_1.mp4",
  },
];

//스타일
const Container = styled.div`
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  height: 100vh;
  /* height: 860px; */
  position: relative;
  /* text-transform: uppercase; */
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  background: #ffffff;
  /* background-color: rgba(0 0 0 / var(--dark-color)); */
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;
const SideSection = styled.div`
  grid-column: span 1;
  display: flex;
  /* align-items: end; */
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* padding-bottom: 60%; */
  /* border: 1px solid #f0f; */

  img {
    /* width: 100%; */
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const SideItem = styled.div`
  width: 100%;
  height: 100%;

  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: start;

  /* top: 0; */
  /* left: 0; */
  transform: rotate(-90deg);
  position: absolute;
  bottom: 10%;
  left: 0%;
  p {
    border: 1px solid #f00;
    /* bottom: 10%;
    left: 0%; */
  }
  span {
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* transform: rotate(-90deg); */
    /* bottom: 10%;
    left: 0; */
  }
`;
const Line = styled.div`
  width: 1px;
  height: 100px;
  background: #000;
`;
const ImgSection = styled.div`
  grid-column: span 7;
  width: 100%;
  height: 100%;
  /* height: 100vh; */
  /* height: 800px; */
  overflow: hidden;
  position: relative;
  /* color: #fff; */
  background: rgba(0, 0, 0, 0.8);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper {
    /* height: 100%; */
    width: 100%;
    height: 100%;
    position: relative;
    .swiper-wrapper {
      .swiper-slide {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        img {
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            background: rgba($color: #000000, $alpha: 0.3);
            z-index: -1;
          }
        }
      }
    }
  }
  .swiper-pagination {
    position: absolute;
    left: 50%;
    bottom: 20px;
    width: auto;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.2);
    transform: translateX(-50%);
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 1.4rem;
    font-family: "Pretendard";
  }
  h4 {
    opacity: 0;
    /* display: none; */
    position: absolute;
    bottom: 10%;
    left: 5%;
    color: #fff;
    /* margin: 10% 5%; */
    font-size: 5rem;
    line-height: 5.4rem;
  }

  @media screen and (max-width: 1024px) {
    height: 100vh;
    grid-column: span 17;
    h4 {
      opacity: 1;
    }
  }
`;
const InfoSection = styled.div`
  /* padding: 0 80px; */
  /* padding: 6% 8%; */
  padding: 0 8%;
  /* padding-bottom: 5%; */
  padding-top: 100px;
  grid-column: span 9;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  /* justify-content: end; */
  /* background: rgba($color: #000000, $alpha: 0.6); */
  /* background: rgba(0, 0, 0, 0.6); */
  /* background-image: "https://live.staticflickr.com/65535/54271277085_8ebc361c1f_o.jpg" ; */
  /* background: url("/public/img/noise.png") center/cover no-repeat; */
  /* background: url("https://live.staticflickr.com/65535/54271277085_8ebc361c1f_o.jpg") center/cover no-repeat; */
  h4 {
    font-weight: 600;
    font-size: 9rem;
    line-height: 8.6rem;
    letter-spacing: -4.6px;
    b {
      font-size: 9.6rem;
      font-family: "EHNormalTrial";
      font-weight: 500;
    }
  }
  p {
    font-size: 2rem;
    letter-spacing: 2px;
    font-weight: 400;
    /* margin-bottom: 60px; */
    font-family: "Pretendard";
  }

  @media screen and (max-width: 1024px) {
    display: none;
    grid-column: span 0;
    h4 {
      font-size: 8rem;
      line-height: 8rem;
      b {
        font-size: 8.6rem;
      }
    }
  }
`;
const InfoVideo = styled.div`
  overflow: hidden;
  margin-top: 40px;
  position: relative;
  width: 100%;
  /* width: 90%; */
  padding-top: 50.625%;
  /* padding-top: 56.25%; */
  /* background: rgba($color: #000000, $alpha: 0.6); */
  background: rgba(0, 0, 0, 0.6);
  video {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    /* background: rgba(0, 0, 0, 0.1); */
  }
`;

//출력
const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <Container>
      <SideSection>
        <SideItem>
          <p>What's in star's bag? now yours</p>
          {/* <hr /> */}
          <span>only on zip.</span>
          <span>only on zip.</span>
        </SideItem>
        <img src="/src/imgs/home/vertical.png" alt="" />
      </SideSection>
      <ImgSection>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
          effect="fade"
          modules={[Parallax, Pagination, Navigation, Autoplay]}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div>
                <h4>
                  {slides[currentSlide].title}
                  <br />
                  리얼템을 <b> ZIP.</b>
                </h4>
              </div>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgSection>
      <InfoSection>
        <h4>
          {slides[currentSlide].title}
          <br />
          리얼템을 <b> ZIP.</b>
        </h4>
        <InfoVideo>
          <video src={slides[currentSlide].video} muted autoPlay loop></video>
        </InfoVideo>
      </InfoSection>
    </Container>
  );
};

export default MainBanner;
