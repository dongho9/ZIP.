import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
// import SlideSection from "./SlideSection";

// import "./styles.css";
// import "/node_modules/swiper/swiper.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

// import "/styles.css";

// import "./styles.css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination, Navigation, Parallax } from "swiper/modules";

//
const slides = [
  {
    image: "https://live.staticflickr.com/65535/53594693457_167b1ede8b_o.jpg",
    // image: "https://live.staticflickr.com/65535/53594693517_15cbd4832f_o.jpg",
    title: "aespa 윈터의",
    video: "/public/videos/main.mp4",
  },
  {
    image:
      "https://www.esquirekorea.co.kr/resources_old/online/org_online_image/eq/68f2fb12-c0ab-44df-878d-0ec710e49b66.jpg",
    // image:
    //   "https://www.cosmopolitan.co.kr/resources/online/online_image/2025/01/21/32b5668b-9f68-4e77-8f81-48d847320422.jpg",
    title: "서강준의",
    video: "/public/videos/main.mp4",
  },
  {
    image: "https://live.staticflickr.com/65535/52179222680_027d60eb7e_o.jpg",
    // image: "https://live.staticflickr.com/65535/52179222645_d288f3d839_o.jpg",
    // image: "https://live.staticflickr.com/65535/51878475053_65bf0a7e27_o.jpg",
    // image: "https://live.staticflickr.com/65535/53002595028_306c2cc6a1_o.jpg",
    title: "고민시의",
    video: "/public/videos/main2.mp4",
  },
  {
    // image: "https://live.staticflickr.com/65535/53458524496_8dff824160_o.jpg",
    image: "https://live.staticflickr.com/65535/53458524496_8dff824160_o.jpg",
    title: "카리나의",
    video: "/public/videos/main.mp4",
  },
  {
    image: "https://img.wkorea.com/w/2023/10/style_653f0bc0a8fb3-1120x1400.jpg",
    // image:
    // "https://www.harpersbazaar.co.kr/resources/online/online_image/2024/06/20/a9c79483-5b80-40d8-b0e5-19903c405a1f.jpg",
    title: "차은우의",
    video: "/public/videos/main.mp4",
  },
  {
    image: "https://pbs.twimg.com/media/Gnu6RwCagAAK7y3?format=jpg&name=large",
    title: "공명 & 김민하의",
    video: "/public/videos/main.mp4",
  },
  {
    // image:
    // "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/dc9a972c-5303-42e2-b428-af9efa1d6d40.jpg",
    // image: "https://blinkarea.synology.me/xe/files/attach/images/138/115/383/d3deb7e8d7118817053581740a59a04f.jpg",
    // image:
    //   "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/82cd491f-223d-4b3a-babe-d74c0975ecef.jpg",
    // image:
    //   "https://www.harpersbazaar.co.kr/resources_old/online/org_online_image/946d5e1f-832b-4007-bd21-5ab8fa585e7a.jpg",
    image: "https://www.hll.kr/resources/images/img_visual_bazaar_mo.png",
    // image: "https://live.staticflickr.com/65535/53731662903_50e7701956_o.jpg",
    title: "제니의",
    video: "/public/videos/main.mp4",
  },
];

//스타일
const Container = styled.div`
  /* margin-top: 60px; */
  width: 100%;
  height: 100vh;
  /* height: 860px; */
  position: relative;
  /* text-transform: uppercase; */
  display: grid;
  grid-template-columns: repeat(17, 1fr);
  background: #ffffff;
  background-color: rgba(0 0 0 / var(--dark-color));
  overflow: hidden;
`;
const SideSection = styled.div`
  grid-column: span 1;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 60px;
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
  overflow: hidden;
  position: relative;
  /* background: #000; */
  /* color: #fff; */
  background: rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper {
    height: 100%;
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
`;

const InfoSection = styled.div`
  /* padding: 0 80px; */
  padding: 6% 8%;
  grid-column: span 9;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  justify-content: end;
  h4 {
    font-weight: 600;
    font-size: 9rem;
    line-height: 8.6rem;
    letter-spacing: -5px;
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
`;
const InfoVideo = styled.div`
  overflow: hidden;
  margin-top: 40px;
  margin-bottom: 20px;
  position: relative;

  width: 100%;
  /* width: 90%; */
  padding-top: 50.625%;
  /* padding-top: 56.25%; */
  video {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <Container>
      <SideSection>
        <img src="/src/imgs/home/vertical.png" alt="" />
      </SideSection>
      <ImgSection>
        {/* <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://www.cosmopolitan.co.kr/resources/online/online_image/2025/01/21/32b5668b-9f68-4e77-8f81-48d847320422.jpg"
              alt="img01"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://live.staticflickr.com/65535/53002595028_306c2cc6a1_o.jpg" alt="img02" />
          </SwiperSlide>
        </Swiper> */}
        {/* <SlideSection /> */}
        {/* <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
                laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
                rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 2
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
                laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
                rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="title" data-swiper-parallax="-300">
              Slide 3
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
                laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
                rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </SwiperSlide>
        </Swiper> */}
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
        {/* <p>당신이 사랑하는 스타의 찐사용템만 모아 zip에서</p> */}
      </InfoSection>
    </Container>
  );
};

export default MainBanner;
