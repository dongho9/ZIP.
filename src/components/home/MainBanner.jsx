import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
/*--- 스와이퍼 라이브러리 ---*/
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from "swiper/modules";
import styled, { keyframes } from "styled-components";

/*--- 애니메이션 ---*/

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  padding-top: 82px;
  background: #ffffff;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 100%;
    padding-top: 0;
  }
`;
const SideSection = styled.div`
  grid-column: span 1;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 70%;
  img {
    width: 18px;
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
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
    background: #000;

    .swiper-wrapper {
      .swiper-slide {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        background: rgba($color: #000000, $alpha: 0.5);

        cursor: pointer;
        img {
          &::after {
            content: "";
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            z-index: 2;
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
    position: absolute;
    bottom: 14%;
    left: 5%;
    color: #fff;
    font-size: 6rem;
    line-height: 6.8rem;
    font-family: "EHNormalTrial";
    letter-spacing: -2px;
  }

  @media screen and (max-width: 1024px) {
    height: 100vh;
    grid-column: span 17;
    h4 {
      opacity: 1;
      width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    height: 100%;
  }
`;
const InfoSection = styled.div`
  padding: 0 8%;
  padding-bottom: 8%;
  /* padding: 10% 8%; */
  grid-column: span 9;
  display: flex;
  flex-direction: column;
  justify-content: end;
  h4 {
    font-weight: 600;
    font-size: 10rem;
    line-height: 10.2rem;
    letter-spacing: -5px;
    b {
      font-size: 10.6rem;
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
  transition: all 0.4s ease-in-out;
  video {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }
  button {
    opacity: 0;
    position: absolute;
    z-index: 1;
    bottom: 0%;
    right: 0;
    font-size: 2rem;
    padding: 22px 50px;
    color: var(--light-color);
    background: var(--dark-color);
    font-family: "EHNormalTrial";
    text-transform: uppercase;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
      font-size: 1.6rem;
      padding: 20px 40px;
    }
    @media screen and (max-width: 767px) {
      font-size: 1.2rem;
      padding: 16px 24px;
    }
  }
  &:hover button {
    opacity: 1;
  }
  &:hover video {
    filter: brightness(1) saturate(1) blur(2px);
    background: rgba(0, 0, 0, 0.6);
    filter: brightness(0.5) saturate(1.2) blur(1px);
  }
`;

/*--- 출력 ---*/
const MainBanner = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    fetch("/API/homeData.json")
      .then((response) => response.json())
      .then((data) => setMainData(data.mainData));
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.pause();
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.play();
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };

  return (
    <Container>
      <SideSection>
        <img src="/src/imgs/home/vertical.png" alt="사이드 영역 이미지" />
      </SideSection>
      <ImgSection>
        <Swiper
          onClick={() => {
            const artistName = mainData[currentSlide]?.artistName;
            if (artistName) {
              navigate(`/star/${artistName}`);
            }
          }}
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {mainData.map((slide, index) => (
            <SwiperSlide key={index} onClick={() => useNavigate(slide.url)}>
              <div>
                <h4>
                  {slide.title}
                  <br />
                  리얼템을 <b> ZIP.</b>
                </h4>
              </div>
              <img src={slide.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImgSection>
      <InfoSection>
        <h4>
          {mainData[currentSlide]?.title}
          <br />
          리얼템을 <b> ZIP.</b>
        </h4>
        <InfoVideo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button
            onClick={() => {
              const artistName = mainData[currentSlide]?.artistName;
              if (artistName) {
                navigate(`/star/${artistName}`);
              }
            }}
          >
            click Zip
          </button>
          <video ref={videoRef} src={mainData[currentSlide]?.video} muted autoPlay loop></video>
        </InfoVideo>
      </InfoSection>
    </Container>
  );
};

export default MainBanner;
