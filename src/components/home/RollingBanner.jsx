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
  display: flex;
`;

const Track = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 30px 0;
  animation: ${roll} 10s linear infinite;
`;

const LogoWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrandLogo = styled.li`
  width: 60px;
  margin-right: 60px;
  list-style: none;
  /* mix-blend-mode: difference; */
  img {
    width: 100%;
    height: auto;
    /* object-fit: contain; */
  }
`;

const logos = [
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },
  {
    logo: "/public/img/Logo.png",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },
  {
    logo: "https://www.pngall.com/wp-content/uploads/15/Gq-Logo-PNG-Photo.png",
  },

  {
    logo: "/public/img/Logo.png",
  },
];

const RollingBanner = () => {
  return (
    <Container>
      <Track>
        <LogoWrapper>
          {logos.map((logo, index) => (
            <BrandLogo key={index}>
              <img src={logo.logo} alt="브랜드 로고" />
            </BrandLogo>
          ))}
        </LogoWrapper>
        <LogoWrapper>
          {logos.map((logo, index) => (
            <BrandLogo key={index}>
              <img src={logo.logo} alt="브랜드 로고" />
            </BrandLogo>
          ))}
        </LogoWrapper>
      </Track>
    </Container>
  );
};

export default RollingBanner;
