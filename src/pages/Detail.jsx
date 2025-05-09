import { useState, useEffect } from "react";
import styled from "styled-components";
import DetailSwiper from "../components/detail/DetailSwiper";

const Container = styled.div`
  /* margin-top: 60px; */
`;
const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const SwiperBox = styled.div`
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;
const TextBox = styled.div`
  width: 50%;
  height: 100vh;
  position: sticky;
  align-self: flex-start;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5%;
  gap: 40px;
  @media screen and (max-width: 1024px) {
    height: 500px;
    width: 100%;
    position: relative;
  }
`;

const ItemName = styled.h3`
  font-size: 3.6rem;
`;
const ItemPrice = styled.div`
  font-size: 1.4rem;
`;
const ItemButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 50%;
    border: none;
    padding: 16px;
    font-size: 1.4rem;
    cursor: pointer;
    &:nth-child(1) {
      background: var(--light-color);
      border: 1px solid var(--border-color);
    }
    &:nth-child(2) {
      background: var(--dark-color);
      color: var(--light-color);
    }
  }
`;
const TotalPrice = styled.div`
  font-size: 1.4rem;
`;
const ItemCount = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  button {
    font-size: 1.4rem;
    border: none;
    background: none;
    border: 1px solid var(--border-color);
    cursor: pointer;
    font-family: "Pretendard";
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    padding: 0;
    align-items: center;
    &:first-of-type {
      border-right: none;
    }
  }
  p {
    border: 1px solid var(--border-color);
    border-right: none;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 1.4rem;
  }
  span {
    font-size: 1.2rem;
  }
`;

const RelateProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px 3%;
  margin-bottom: 80px;
`;
const RelateProductsTitle = styled.h3`
  font-size: 3.2rem !important;
  font-size: var(--dark-color);
`;
const RelateItemWrap = styled.div`
  height: 300px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const RelateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const RelateItemImgWrap = styled.div`
  width: 100%;
`;
const RelateItemImg = styled.img`
  width: 100%;
`;
const RelateItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const RelateItemPick = styled.span`
  font-size: 1.4rem;
`;
const RelateItemName = styled.p`
  font-size: 1.8rem;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
`;
const Detail = () => {
  const [swiperActive, setSwipierActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSwipierActive(true);
      } else {
        setSwipierActive(false);
      }
    };
    handleResize();
    window.addEventListener("resize", () => {
      handleResize();
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <SwiperBox>
          <DetailSwiper enabled={swiperActive} />
        </SwiperBox>
        <TextBox>
          <ItemName>Treatment</ItemName>
          <ItemPrice>KRW 49,900</ItemPrice>
          <ItemCount>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </ItemCount>
          <TotalPrice>
            TOTAL: KRW <span>49,900</span>(<span>1</span>)개
          </TotalPrice>
          <ItemButton>
            <button>ADD TO CART</button>
            <button>ORDER NOW</button>
          </ItemButton>
          <ItemDesc>
            <p>DESCRIPTION</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              obcaecati fuga facere deleniti incidunt quam et dolore in. Optio
              quae eligendi nobis sed rem nam consequatur, qui quis nisi. Quos!
            </span>
          </ItemDesc>
          <ItemDesc>
            <p>EXCHANGE</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              obcaecati fuga facere deleniti incidunt quam et dolore in. Optio
              quae eligendi nobis sed rem nam consequatur, qui quis nisi. Quos!
            </span>
          </ItemDesc>
        </TextBox>
      </Wrapper>
      <RelateProducts>
        <RelateProductsTitle>Related Products</RelateProductsTitle>
        <RelateItemWrap>
          <RelateItem>
            <RelateItemImgWrap>
              <RelateItemImg
                src="https://relilla.com/cdn/shop/files/product_15_kikii_1280x.jpg?v=1698491589"
                alt="img02"
              />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </RelateItem>
          <RelateItem>
            <RelateItemImgWrap>
              <RelateItemImg
                src="https://relilla.com/cdn/shop/files/product_8_moist_1280x.jpg?v=1698501809"
                alt="img03"
              />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </RelateItem>
          <RelateItem>
            <RelateItemImgWrap>
              <RelateItemImg
                src="https://relilla.com/cdn/shop/files/product_11_1280x.jpg?v=1698491524"
                alt="img04"
              />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </RelateItem>
          <RelateItem>
            <RelateItemImgWrap>
              <RelateItemImg
                src="https://relilla.com/cdn/shop/files/product_25_1280x.jpg?v=1698498801"
                alt="img05"
              />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </RelateItem>
          <RelateItem>
            <RelateItemImgWrap>
              <RelateItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </RelateItem>
        </RelateItemWrap>
      </RelateProducts>
    </Container>
  );
};

export default Detail;
