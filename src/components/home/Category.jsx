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
`;

const CategotyImg = styled.ul`
  border-top: 1px solid #ccc;
  /* border-bottom: 1px solid #ccc; */
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
`;

const Title = styled.h2`
  color: var(--dark-color);
  font-size: 10rem;
  letter-spacing: -4px;

  @media screen and (max-width: 1024px) {
    font-size: 7rem;
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
`;

/*--- 출력 ---*/
const Category = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(
    "https://live.staticflickr.com/65535/54330744628_71f27d7e9f_o.jpg"
  );

  const onMouseEnter = (category) => {
    switch (category) {
      case "style":
        setSelectedImage("https://live.staticflickr.com/65535/54330744628_71f27d7e9f_o.jpg");
        break;
      case "beauty":
        setSelectedImage("https://i.pinimg.com/originals/b9/92/46/b992462a11f3bd71303ceae71efd9af5.png");
        break;
      case "artist":
        setSelectedImage("https://live.staticflickr.com/65535/54266825217_c9c289945e_o.jpg");
        break;
      case "promotion":
        setSelectedImage(
          "https://www.elle.co.kr/resources/online/online_image/2024/04/22/a7b95468-a366-4d66-9b2f-4c1287f072c1.jpg"
        );
        break;
      default:
        setSelectedImage("https://live.staticflickr.com/65535/54330744628_71f27d7e9f_o.jpg");
        break;
    }
  };

  return (
    <Container>
      <CategotyImg>
        <li>
          <img src={selectedImage} alt="카테고리 이미지" />
        </li>
      </CategotyImg>
      <Info>
        <MainTitle>
          <Title>Category</Title>
        </MainTitle>
        <CategoryItem>
          <li onClick={() => navigate("/filtercategory/Style")} onMouseEnter={() => onMouseEnter("style")}>
            Style
          </li>
          <li onClick={() => navigate("/filtercategory/Beauty")} onMouseEnter={() => onMouseEnter("beauty")}>
            Beauty
          </li>
          <li onClick={() => navigate("/filtercategory/Artist")} onMouseEnter={() => onMouseEnter("arist")}>
            Artist
          </li>
          <li onClick={() => navigate("/promotion")} onMouseEnter={() => onMouseEnter("promotion")}>
            Promotion
          </li>
        </CategoryItem>
      </Info>
    </Container>
  );
};

export default Category;
