import React from "react";
import styled from "styled-components";

// 스타일
const Container = styled.section`
  width: 100%;
  height: 400px;
  background: var(--dark-color);
  color: var(--light-color);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* padding: 0 3%; */

  @media screen and (max-width: 1024px) {
    height: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.article`
  padding: 6%;
  font-size: 6rem;
  line-height: 7rem;
  grid-column: 1 / span 5;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  p {
    font-size: 2rem;
    color: var(--subTitle);
  }

  @media screen and (max-width: 1024px) {
    padding: 6% 3% 0;
    margin-top: 0%;
    font-size: 5rem;
    line-height: 6rem;
    /* flex-direction: row; */
    br {
      display: none;
    }
  }
`;

const CardWrapper = styled.ul`
  padding: 6% 3%;
  grid-column: 6 / span 7;
  gap: 14px;
  overflow: hidden;
  display: flex;
  height: 400px;
`;

const CardItem = styled.li`
  position: relative;
  flex: 1;
  overflow: hidden;
  cursor: pointer;
  background: var(--light-color);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  .text-overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    transition: bottom 0.5s ease;
  }

  &:hover .text-overlay {
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
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
      </Title>
      <CardWrapper>
        <CardItem>
          <img
            src="https://cafe24.poxo.com/ec01/amomentoweb/6aDrbsrpgztyixM+aENnHx/mbdxKb8ss9vbad0wH9zwPFzEqXIv4/KbMoS5pPAV54N1goY6Yfcrhfuw+zB27yA==/_/web/product/extra/small/202503/cbb16e0c6d6cd86fb8b875fbf2eb429c.jpg"
            alt=""
          />
          <div className="text-overlay">
            <h3>제품명 1</h3>
            <p>제품 설명 1</p>
          </div>
        </CardItem>
        <CardItem>
          <img
            src="https://cafe24.poxo.com/ec01/amomentoweb/6aDrbsrpgztyixM+aENnHx/mbdxKb8ss9vbad0wH9zwPFzEqXIv4/KbMoS5pPAV54N1goY6Yfcrhfuw+zB27yA==/_/web/product/extra/small/202504/01926230a61cb83757aa0385c0eafde9.jpg"
            alt=""
          />
          <div className="text-overlay">
            <h3>제품명 2</h3>
            <p>제품 설명 2</p>
          </div>
        </CardItem>
        <CardItem>
          <img
            src="https://cafe24.poxo.com/ec01/amomentoweb/6aDrbsrpgztyixM+aENnHx/mbdxKb8ss9vbad0wH9zwPFzEqXIv4/KbMoS5pPAV54N1goY6Yfcrhfuw+zB27yA==/_/web/product/extra/small/202504/98ca44cd0400e70e979f808e264bc25b.jpg"
            alt=""
          />
          <div className="text-overlay">
            <h3>제품명 3</h3>
            <p>제품 설명 3</p>
          </div>
        </CardItem>
      </CardWrapper>
    </Container>
  );
};

export default SlideBanner;
