import React from "react";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  padding: 100px 0% 0px;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const CategotyImg = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  height: 900px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    &:hover {
      opacity: 1;
    }
  }
`;
const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  border: 1px solid var(--border-color);
`;
const MainTitle = styled.div`
  display: flex;
  padding: 60px;
  justify-content: space-between;
  align-items: center;
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
const CategoryItem = styled.ul`
  li {
    font-size: 5rem;
    /* text-transform: uppercase; */
    padding: 50px 60px;
    border-top: 1px solid var(--border-color);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background: var(--dark-color);
      color: var(--light-color);
    }
  }
`;

/*--- 출력 ---*/
const Category = () => {
  return (
    <Container>
      <CategotyImg>
        <img
          src="https://img.29cm.co.kr/next-lookbook/2025/04/23/7fb5907882334d7ea1b2779db0a70331_20250423114212.png"
          alt="스타일 카테고리"
        />
      </CategotyImg>
      <Info>
        <MainTitle>
          <Title>Category</Title>
        </MainTitle>
        <CategoryItem>
          <li>Style</li>
          <li>Beauty</li>
          <li>Star</li>
          <li>Tattoo Zip</li>
        </CategoryItem>
      </Info>
    </Container>
  );
};

export default Category;
