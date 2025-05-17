import React, { useState, useRef, useEffect } from "react";
/*--- 스와이퍼 라이브러리 ---*/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from "swiper/modules";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  background: #ffffff;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;
const SideSection = styled.div`
  grid-column: span 1;
  display: flex;
  align-items: center;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  img {
    width: 16px;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const ImgSection = styled.div`
  grid-column: span 7;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  /* background: rgba(0, 0, 0, 0.8); */
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
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
const InfoSection = styled.div`
  padding: 0 8%;
  padding-top: 100px;
  grid-column: span 9;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding-top: 50.625%;
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
    background: rgba(0, 0, 0, 0.6);
  }
`;

/*--- 목업데이터 ---*/
const slides = [
  {
    image: "https://live.staticflickr.com/65535/53594693457_167b1ede8b_o.jpg",
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
    title: "고민시의",
    video: "/videos/main_4.mp4",
  },
  {
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

/*--- 출력 ---*/
const MainBanner = ({ image, title, video }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch("/mocData/homeData.json")
      .then((response) => response.json())
      .then((data) => setMainData(data.mainData));
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <Container>
      <SideSection>
        <img src="/src/imgs/home/vertical.png" alt="사이드 영역 이미지" />
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
