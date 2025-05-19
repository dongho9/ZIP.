import styled from "styled-components";
import React, { forwardRef } from "react";
import guccibelt from "../../imgs/event/guccibelt.webp";
import chapsticklib from "../../imgs/event/chapsticklib.avif";
import shaver from "../../imgs/event/shaver.jpg";
import lakalib from "../../imgs/event/lakalib.jpeg";
import burberrywallet from "../../imgs/event/burberrywallet.webp";
import tamburinsperfume from "../../imgs/event/tamburinsperfume.jpg";
import pradabag from "../../imgs/event/pradabag.avif";
import salvatoreferragamo from "../../imgs/event/salvatoreferragamo.png";
import solgavitamin from "../../imgs/event/solgavitamin.png";

const TattooContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding: 200px 210px;

  @media screen and (max-width: 1500px) {
    padding: 200px 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 200px 50px;
  }

  @media screen and (max-width: 767px) {
    padding: 150px 30px;
    gap: 48px;
  }

  @media screen and (max-width: 402px) {
    padding: 100px 20px;
    gap: 32px;
  }
`;

const TattooTittle = styled.div`
  width: 100%;
  height: 42px;
  font-size: 5rem;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 402px) {
    font-size: 2.4rem;
  }
`;

const VideoTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: var(--event-color);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    height: 35px;
  }

  @media screen and (max-width: 767px) {
    height: 30px;
  }

  @media screen and (max-width: 402px) {
    height: 26px;
  }
`;

const VideosContents = styled.div`
  width: 100%;
  height: 840px;
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 20px;
  border: 1px solid var(--border-color);
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 402px) {
    margin-bottom: 30px;
  }
`;

const VideoContent = styled.div`
  width: 36%;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 0 0 0 20px;
  cursor: pointer;
  background: var(--border-color);

  video {
    transition: all 1s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0 0 0 20px;

    @media screen and (max-width: 1024px) {
      height: 440px;
      border-radius: 20px 20px 0 0;
    }

    @media screen and (max-width: 767px) {
      height: 300px;
    }

    @media screen and (max-width: 402px) {
      height: 240px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;

const CommerceContent = styled.div`
  position: relative;
  width: 64%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const InfluencerName = styled.div`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    font-size: 4rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 402px) {
    font-size: 2.4rem;
    margin-bottom: 15px;
  }
`;

const QuoteSection = styled.div`
  font-size: 3rem;
  font-weight: 500;
  margin-bottom: 90px;

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Bundles = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }

  @media screen and (max-width: 767px) {
    /* flex-direction: column; */
    gap: 24px;
  }
`;

const Picture = styled.div`
  width: 100%;
  border: 1px solid #000;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* @media screen and (max-width: 1782px) {
    width: 200px;
    height: 200px;
  } */

  /* @media screen and (max-width: 1024px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
  }

  @media screen and (max-width: 402px) {
    width: 100px;
    height: 100px;
  } */
`;

const Pick = styled.div`
  font-size: 1.6rem;
  color: var(--border-color);
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 402px) {
    font-size: 1rem;
  }
`;

const Goods = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 402px) {
    font-size: 1.1rem;
  }
`;

// const TattooContents = styled.div`
// width: 100%;
// display: flex;
// flex-direction: column;
// gap: 64px;
// padding:  200px 210px;
// @media screen and (max-width:1024px){
//   padding:  200px 50px;
// }
// `

// const TattooTittle = styled.div`
// width: 100%;
// height: 42px;
//   font-size: 5rem;
//   @media screen and (max-width:1024px){
//     font-size: 4rem;
// }
// `
const TattooVideos = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
  }
`;

// const VideoTop = styled.div`
//   width: 100%;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   border-radius: 20px 20px 0 0;
//   background: var(--event-color);
//   gap: 10px;
//   @media screen and (max-width:1024px){
//     height: 35px;
// }
// `

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--light-color);
  &:first-child {
    margin-left: 30px;
    background: var(--dark-color);
  }
  @media screen and (max-width: 1024px) {
  }
`;

const ContentTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #ace0ff;
  margin-bottom: 5px;
  @media screen and (max-width: 1024px) {
    font-size: 1.7rem;
    font-weight: 600;
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  padding: 6%;
  @media screen and (max-width: 1024px) {
  }
`;

const Line = styled.div`
  /* width: 240px; */
  border: 1px solid #000;
  @media screen and (max-width: 1024px) {
  }
`;

const Bundle = styled.div`
  /* border: 1px solid #f00; */
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1024px) {
  }
`;

// const Bundles = styled.div`
// display: flex;
// gap: 30px;
// /* flex-direction: column; */
// @media screen and (max-width:1024px){

// }
// `

const DetailBundle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 1024px) {
  }
`;

const tattooData = [
  {
    title: "EVERYDAY TOTEM:",
    name: "박재범 JAY PARK",
    quote: "JAY’S WAY: 무심한 듯 확실한 취향",
    picture1: guccibelt,
    picture2: chapsticklib,
    picture3: shaver,
    pick: "JAYPARK PICK",
    content1: "GUCCI BELT",
    content2: "LIB BALM",
    content3: "SHAVER",
  },
  {
    title: "EVERYDAY TOTEM:",
    name: "모니카 MONIKA",
    quote: "“모든 선택에 태도가 담긴 사람, 모니카.”",
    picture1: tamburinsperfume,
    picture2: burberrywallet,
    picture3: lakalib,
    pick: "MORNIKA PICK",
    content1: "TAMBURINS PERFUME",
    content2: "BURBERRY WALLET",
    content3: "LAKA LIB",
  },
  {
    title: "EVERYDAY TOTEM:",
    name: "박준원 PH-1",
    quote: "“PH-1의 무드를 완성하는 작은 취향들.”",
    picture1: pradabag,
    picture2: solgavitamin,
    picture3: salvatoreferragamo,
    pick: "PH-1 PICK",
    content1: "PRADA BAG",
    content2: "SOLGA VITAMINE",
    content3: "SALVATORE PERFUME",
  },
];

const WhatInBag = ({ bundleRefs }) => {
  return (
    <>
      <TattooContents>
        <TattooTittle>WHAT’S IN MY BAG</TattooTittle>
        <TattooVideos>
          {tattooData.map((item, index) => (
            <React.Fragment key={index}>
              <VideoTop>
                <Circle />
                <Circle />
                <Circle />
              </VideoTop>
              <VideosContents>
                <VideoContent>
                  <video
                    src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4"
                    autoPlay
                    loop
                  ></video>
                  {/* <video src={item.videoSrc} autoPlay loop muted /> */}
                </VideoContent>
                <CommerceContent>
                  <Content>
                    <ContentTitle>{item.title}</ContentTitle>
                    <InfluencerName>{item.name}</InfluencerName>
                    <QuoteSection>{item.quote}</QuoteSection>
                    <Bundles>
                      <Bundle
                        ref={bundleRefs[index]}
                        style={{ height: "500px" }}
                      >
                        <Picture>
                          <img src={item.picture1} alt={item} />
                        </Picture>
                        <DetailBundle>
                          <Pick>{item.pick}</Pick>
                          <Goods>{item.content1}</Goods>
                          <Line />
                        </DetailBundle>
                      </Bundle>
                      <Bundle style={{ height: "500px" }}>
                        <Picture>
                          <img src={item.picture2} alt={item} />
                        </Picture>
                        <DetailBundle>
                          <Pick>{item.pick}</Pick>
                          <Goods>{item.content2}</Goods>
                          <Line />
                        </DetailBundle>
                      </Bundle>
                      <Bundle style={{ height: "500px" }}>
                        <Picture>
                          <img src={item.picture3} alt={item} />
                        </Picture>
                        <DetailBundle>
                          <Pick>{item.pick}</Pick>
                          <Goods>{item.content3}</Goods>
                          <Line />
                        </DetailBundle>
                      </Bundle>
                    </Bundles>
                  </Content>
                </CommerceContent>
              </VideosContents>
            </React.Fragment>
          ))}
        </TattooVideos>
      </TattooContents>
    </>
  );
};

export default WhatInBag;
