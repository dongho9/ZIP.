import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  /* margin: 60px 0; */
  width: 100%;
  height: 80px;
  background: var(--dark-color);
  color: var(--light-color);
  /* animation: roll 10s linear infinite; */
`;
const LogoWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: roll 12s linear infinite;
`;
// const LogoWrapperTwo = styled.ul`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   animation-delay: 10s;
//   animation: roll 10s linear infinite;
// `;
const BrandLogo = styled.li`
  width: 80px;
  img {
    width: 100%;
    object-fit: cover;
  }

  @keyframes roll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const RollingBanner = () => {
  return (
    <Container>
      <LogoWrapper>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
      </LogoWrapper>
      {/* <LogoWrapperTwo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
        <BrandLogo>
          <img src="/src/imgs/home/image.png" alt="엘르매거진 로고" />
        </BrandLogo>
      </LogoWrapperTwo> */}
    </Container>
  );
};

export default RollingBanner;
