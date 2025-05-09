import React from "react";
import styled, { keyframes } from "styled-components";

//스타일
const Container = styled.section`
  width: 100%;
  height: 400px;
  background: var(--dark-color);
  color: var(--light-color);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
const Title = styled.article`
  padding: 6%;
  font-size: 6rem;
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 7rem;
  p {
    font-size: 2rem;
    color: var(--subTitle);
  }
`;
const ControlBar = styled.div`
  height: 2px;
  width: 100px;
  background: var(--light-color);
`;
const CardWrapper = styled.ul`
  padding: 3% 0;
  grid-column: 6 / span 7;
  gap: 14px;
  overflow: hidden;
  display: flex;
  /* width: 100%; */
  /* justify-content: space-between; */
  height: 400px;
`;
const CardItem = styled.li`
  /* width: 100px; */
  /* height: 100%; */
  background: var(--light-color);
  cursor: pointer;
  overflow: hidden;
  video {
    transition: all 1s;
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      transform: scale(120%);
    }
  }
`;

const SlideBanner = () => {
  return (
    <Container>
      <Title>
        <h2>
          Weekly <br />
          New Product
        </h2>
        <p>새로나온 NEW ZIP 컨텐츠를 만나보세요</p>
        <ControlBar>
          <div></div>
          <div></div>
          <div></div>
        </ControlBar>
      </Title>
      <CardWrapper>
        <CardItem>
          <video src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4" autoPlay loop></video>
        </CardItem>
        <CardItem>
          <video src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4" loop></video>
        </CardItem>
        <CardItem>
          <video src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4" loop></video>
        </CardItem>
      </CardWrapper>
    </Container>
  );
};

export default SlideBanner;
