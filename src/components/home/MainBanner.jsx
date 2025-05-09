import React from "react";
import styled from "styled-components";
// import YouTube from "react-youtube";

//스타일
const Container = styled.div`
  width: 100%;
  text-transform: uppercase;
  height: 100%;
  /* height: 900px; */
  /* height: 90vh; */
  /* display: grid; */
  display: flex;
  /* align-items: center; */
  align-items: end;
  /* grid-template-columns: repeat(12, 1fr); */
  /* grid-template-columns: 100px 780px 1020px; */
  /* grid-template-columns: 120px 1fr 1fr; */
  background: #ffffff;
`;
const Header = styled.div`
  z-index: 1;
  width: 100%;
  position: absolute;
  img {
    object-fit: cover;
  }
`;
const SideSection = styled.div`
  width: 5%;
  display: flex;
  align-items: end;
  /* align-items: center; */
  justify-content: center;
  /* padding: 100px 0; */
  padding-top: 80px;
  padding: 5% 0;
  /* & > div {
    width: 100%;
    height: 100%;
    display: flex;
    transform: rotate(-90deg);
  } */
  /* img {
    width: 50px;
    object-fit: cover;
  } */
`;
const Line = styled.div`
  width: 1px;
  height: 100px;
  background: #000;
`;
const ImgSection = styled.div`
  /* height: 100%; */
  width: 38%;
  overflow: hidden;
  /* padding: 50px 0; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.13);
  }
`;
const InfoSection = styled.div`
  height: 100%;
  /* width: 100%; */
  /* padding: 100px 0; */
  width: 54%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* justify-content: end; */
  /* padding-top: 80px; */
  padding-left: 90px;
  /* padding: 3% 6%; */
  h2 {
    font-weight: 600;
    font-size: 9.4rem;
    line-height: 9.6rem;
    /* font-weight: 600; */
    letter-spacing: -5px;
    strong {
      font-family: "EHNormalTrial";
      font-weight: 700;
    }
    b {
      font-size: 10rem;
      font-family: "EHNormalTrial";
      font-weight: 600;
    }
  }
  p {
    font-size: 2rem;
    letter-spacing: 0.6rem;
    /* letter-spacing: 9px; */
    font-weight: 600;
    margin-bottom: 60px;
    font-family: "Pretendard";
    padding: 10px;
  }
`;
const InfoImg = styled.div`
  /* width: 800px; */
  height: 400px;
  width: 800px;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 20px;
  /* margin: 30px 0; */
  video {
    width: 100%;
    height: 100%;
    transform: scale(1.2);
    object-fit: cover;
  }
`;
//출력
const MainBanner = () => {
  return (
    <Container>
      <SideSection>
        <img src="/src/imgs/home/vertical.png" alt="" />
        {/* <div>
          <p> What’s in Their Bag, Now Yours</p>
          <Line></Line>
          <span>only on zip</span>
        </div> */}
      </SideSection>
      <ImgSection>
        <img
          src="https://www.cosmopolitan.co.kr/resources/online/online_image/2025/01/21/32b5668b-9f68-4e77-8f81-48d847320422.jpg"
          alt=""
        />
      </ImgSection>
      <InfoSection>
        <h2>
          <strong>서강준</strong>의
          <br />
          리얼템만을 <b> ZIP.</b>
        </h2>
        <InfoImg>
          <video src="/public/videos/main.mp4" muted autoPlay loop></video>
          {/* <img src="/public/img/thumbnail.png" alt="" /> */}
        </InfoImg>
        <p>스타가 진짜로 쓰는 아이템만 모았다. 광고 NO, 찐템 YES.</p>
      </InfoSection>
    </Container>
  );
};

export default MainBanner;
