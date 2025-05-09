import React from "react";
import styled from "styled-components";
// background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
// url(${({ bgPhoto }) => bgPhoto}) center/cover no-repeat;
/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  background: var(--light-color);
  color: var(--dark-color);
`;
const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 3% 0px;
`;
const Title = styled.h2`
  color: var(--dark-color);
  font-size: 10rem;
  letter-spacing: -4px;
`;
const Button = styled.button`
  font-size: 2rem;
  padding: 22px 50px;
  color: var(--light-color);
  background: var(--dark-color);
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
`;
const AccordionWrapper = styled.article`
  width: 100%;
  /* height: 500px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-top: 1px solid #ddd;
  margin-top: 100px;
  /* border: 1px solid #f00; */
`;
const AccordionCard = styled.div`
  width: 100%;
  padding: 0% 10%;
  margin: 100px 0;
`;
const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 100px;
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftInfo = styled.aside`
  width: 500px;
  h4 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 4rem;
  }
  p {
    margin: 30px 0;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 3rem;
  }
  button {
    font-weight: 700;
    background: #000;
    color: #fff;
    padding: 14px 40px;
    outline: none;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
  }
`;
const RighttInfo = styled.div`
  img {
    width: 800px;
    height: 400px;
    object-fit: cover;
  }
`;

/*--- 출력 ---*/
const RecentZip = () => {
  return (
    <Container>
      <MainTitle>
        <Title>Recent Zip</Title>
        <Button>More Zip</Button>
      </MainTitle>
      <AccordionWrapper>
        <AccordionCard>
          <CardTitle>
            <span>01</span>
            <h3>카리나</h3>
          </CardTitle>
          <CardInfo>
            <LeftInfo>
              <h4>에스파 카리나 인마이백! 기다리고 있었습니다. 제대로 모시겠습니다.</h4>
              <p>
                카리나가 자신의 애장품을 보부상 백에 가득 담아왔습니다. 작사 노트부터 폴라로이드 필름 앨범, 유치원
                시절부터 모아온 편지들, 팬이 만들어 준 파우치, 최애 간식까지! 그녀가 바리바리 챙겨온 아이템이 궁금하다면
                지금 바로 풀 영상을 확인하세요.
              </p>
              <button>view zip</button>
            </LeftInfo>
            <RighttInfo>
              <img src="https://img.wkorea.com/w/2024/07/style_66a84eee52ce2-1920x1080.jpg" alt="" />
            </RighttInfo>
          </CardInfo>
        </AccordionCard>
      </AccordionWrapper>
    </Container>
  );
};

export default RecentZip;
