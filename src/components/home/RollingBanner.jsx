import styled, { keyframes } from "styled-components";

const roll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--dark-color);
  color: var(--light-color);
  overflow: hidden;
  position: relative;
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${roll} 20s linear infinite;
`;

const LogoWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const BrandLogo = styled.li`
  width: 80px;
  margin-right: 40px;
  list-style: none;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

// 로고 이미지 여러 개 반복 (한 세트를 두 번 반복)
const logos = new Array(9).fill("/src/imgs/home/image.png");

const RollingBanner = () => {
  return (
    <Container>
      <Track>
        <LogoWrapper>
          {logos.map((src, idx) => (
            <BrandLogo key={`1-${idx}`}>
              <img src={src} alt="브랜드 로고" />
            </BrandLogo>
          ))}
        </LogoWrapper>
        <LogoWrapper>
          {logos.map((src, idx) => (
            <BrandLogo key={`2-${idx}`}>
              <img src={src} alt="브랜드 로고" />
            </BrandLogo>
          ))}
        </LogoWrapper>
      </Track>
    </Container>
  );
};

export default RollingBanner;
