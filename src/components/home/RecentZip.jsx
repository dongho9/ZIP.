import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* --- 스타일 --- */
const Container = styled.div`
  width: 100%;
  background: var(--light-color);
  color: var(--dark-color);
`;
const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
  }
`;
const OverlayTop = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  display: flex;
  gap: 50px;
  text-transform: uppercase;
  padding: 2% 0;
  font-family: "EHNormalTrial";
  transition: all 0.3s;
  color: var(--light-color);
  font-size: 1.8rem;
  font-weight: 700;
  z-index: 3;
  width: 100%;
  height: 100%;
  transform: translate3d(0px, -3vw, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  opacity: 0;
  &:hover {
    opacity: 1;
    transform: scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    will-change: transform;
  }
  .scrolling-text {
    display: flex;
    gap: 50px;
    white-space: nowrap;
    animation: scrollLeft 8s linear infinite;
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  div {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
    gap: 40px;
  }
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;
const Item = styled.section`
  width: 100%;
  height: 80%;
  border-top: 1px solid var(--lightGray);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: relative;
  background: var(--light-color);

  &:last-child {
    border-bottom: 1px solid var(--lightGray);
  }
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 3% 0px;
  @media screen and (max-width: 1024px) {
    padding: 50px 3% 0px;
  }
`;
const Title = styled.h2`
  color: var(--dark-color);
  font-size: 8rem;
  letter-spacing: -4px;
  font-family: "EHNormalTrial";
  @media screen and (max-width: 1024px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -2px;
  }
`;
const Button = styled.button`
  font-size: 2rem;
  padding: 22px 40px;
  background: var(--dark-color);
  color: var(--light-color);
  font-family: "EHNormalTrial";
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
    padding: 14px 28px;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    padding: 16px 24px;
  }
`;
const AccordionCard = styled.div`
  width: 100%;
  padding: 0 15%;
  margin: 40px 0;
  @media screen and (max-width: 1024px) {
    padding: 0 20%;
  }
  @media screen and (max-width: 767px) {
    padding: 0 10%;
  }
`;
const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 50px;
  span {
    font-family: "EHNormalTrial";
  }
  @media screen and (max-width: 1024px) {
    font-size: 4rem;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 767px) {
    font-size: 3rem;
  }
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const LeftInfo = styled.aside`
  width: 50%;
  h4 {
    font-size: 2.8rem;
    font-weight: 600;
    line-height: 1.2;
  }
  p {
    max-width: 500px;
    margin: 14px 0 24px;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.4;
  }
  button {
    font-family: "EHNormalTrial";
    font-weight: 500;
    background: var(--dark-color);
    color: var(--light-color);
    padding: 14px 30px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    h4 {
      font-size: 2.4rem;
      white-space: pre-line;
      margin-top: 20px;
    }
    p {
      margin: 10px 0 20px;
      white-space: pre-line;
      font-size: 1.4rem;
    }
    button {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    h4 {
      font-size: 2.2rem;
    }
    p {
      margin: 10px 0 10px;
      font-size: 1.4rem;
    }
    button {
      display: none;
    }
  }
`;
const RightInfo = styled.div`
  position: relative;
  width: 50%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  /* min-height: 280px; */
  min-width: 450px;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 200px;
    min-width: 300px;
  }
`;

/* --- 출력 --- */
const RecentZip = () => {
  const navigate = useNavigate();
  const [starData, setStarData] = useState([]);

  const [isHovered, setIsHovered] = useState(false);

  const videoRef = useRef(null);
  useEffect(() => {
    fetch("/API/homeData.json")
      .then((response) => response.json())
      .then((data) => setStarData(data.starData));
  }, []);

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
      <MainTitle>
        <Title>Artist Zip</Title>
        <Button onClick={() => navigate("/star")}>More Zip</Button>
      </MainTitle>
      <Wrapper>
        {starData.map((item) => (
          <Item key={item.id}>
            <AccordionCard>
              <CardTitle>
                <span>{String(item.id).padStart(2, "0")}</span>
                <h3>{item.name}</h3>
              </CardTitle>
              <CardInfo>
                <LeftInfo>
                  <h4>
                    {item.title.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </h4>
                  <p>{item.desc}</p>
                  <button onClick={() => navigate(`/star/${item.name}`)}>view zip</button>
                </LeftInfo>
                <RightInfo onClick={() => navigate(`/star/${item.name}`)}>
                  <OverlayTop onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <div className="scrolling-text">
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                      <div>view</div>
                    </div>
                  </OverlayTop>
                  <video src={item.video} ref={videoRef} muted autoPlay loop></video>
                </RightInfo>
              </CardInfo>
            </AccordionCard>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
};

export default RecentZip;
