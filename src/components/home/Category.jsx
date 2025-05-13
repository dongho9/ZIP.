import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/*--- 스타일 ---*/
const Container = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  padding: 100px 0% 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 767px) {
    padding: 0px;
  }
`;

const CategotyImg = styled.ul`
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  height: 900px;
  overflow: hidden;
  li {
    width: 100%;
    height: 100%;
    transition: all 0.7s;
    img {
      cursor: pointer;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (max-width: 767px) {
    height: 200px;
  }
`;

const Info = styled.section`
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainTitle = styled.div`
  display: flex;
  padding: 60px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 50px 5%;
  }
  @media screen and (max-width: 767px) {
    padding: 30px 5%;
  }
`;

const Title = styled.h2`
  color: var(--dark-color);
  font-size: 10rem;
  letter-spacing: -4px;

  @media screen and (max-width: 1024px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 767px) {
    letter-spacing: -2px;
    font-size: 5rem;
  }
`;

const CategoryItem = styled.ul`
  li {
    font-size: 5rem;
    letter-spacing: -1px;
    padding: 50px 60px;
    border-top: 1px solid var(--border-color);
    transition: all 0.7s;
    cursor: pointer;
    &:hover {
      background: var(--dark-color);
      color: var(--light-color);
    }
  }

  @media screen and (max-width: 1024px) {
    li {
      font-size: 4rem;
      padding: 40px 5%;
    }
  }
  @media screen and (max-width: 767px) {
    li {
      font-size: 3.2rem;
      padding: 30px 5%;
    }
  }
`;

/*--- 출력 ---*/
const Category = () => {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState(
    "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/7b92c9b5-8641-48f2-e332-78536e252f00/w=1024,h=1425"
  );

  const onMouseEnter = (category) => {
    switch (category) {
      case "style":
        setSelectedImg(
          "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/7b92c9b5-8641-48f2-e332-78536e252f00/w=1024,h=1425"
        );
        // setSelectedImg("https://live.staticflickr.com/65535/54330744628_71f27d7e9f_o.jpg");
        break;
      case "beauty":
        // setSelectedImg(
        //   "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/e7558fbb-25fb-492c-0b86-bcfd8bffb800/w=1024,h=1359"
        // );
        setSelectedImg(
          "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/9d458ee2-a152-421e-a1ba-10a1b43ba800/w=1920,h=1920,fit=crop"
        );
        // setSelectedImg(
        //   "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/4a477542-164f-4ef6-7abd-1a512bc8d000/w=1920,h=2400"
        // );
        // setSelectedImg("https://i.pinimg.com/originals/b9/92/46/b992462a11f3bd71303ceae71efd9af5.png");
        break;
      case "artist":
        setSelectedImg(
          "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/272b22c6-0a0c-44b3-9cc6-39f3f5a87700/w=1024,h=1359"
        );
        break;
      case "promotion":
        setSelectedImg(
          "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/df9dabf9-6084-4123-cd4a-b58594f45500/w=1024,h=712"
        );
        setSelectedImg(
          "https://www.elle.co.kr/resources/online/online_image/2024/04/22/a7b95468-a366-4d66-9b2f-4c1287f072c1.jpg"
        );
        break;
      default:
        setSelectedImage(
          "https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/7b92c9b5-8641-48f2-e332-78536e252f00/w=1024,h=1425"
        );
        break;
    }
  };

  return (
    <Container>
      <CategotyImg>
        <li>
          <img src={selectedImg} alt="카테고리 이미지" />
        </li>
      </CategotyImg>
      <Info>
        <MainTitle>
          <Title>Category</Title>
        </MainTitle>
        <CategoryItem>
          <li onClick={() => navigate("/filtercategory/style")} onMouseEnter={() => onMouseEnter("style")}>
            Style
          </li>
          <li onClick={() => navigate("/filtercategory/beauty")} onMouseEnter={() => onMouseEnter("beauty")}>
            Beauty
          </li>
          <li onClick={() => navigate("/filtercategory/artist")} onMouseEnter={() => onMouseEnter("artist")}>
            Artist
          </li>
          <li onClick={() => navigate("/event")} onMouseEnter={() => onMouseEnter("promotion")}>
            Promotion
          </li>
        </CategoryItem>
      </Info>
    </Container>
  );
};

export default Category;
