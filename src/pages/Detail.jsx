import { useState, useEffect } from "react";
import styled from "styled-components";
import DetailSwiper from "../components/detail/DetailSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { StarData } from "../StarData";

const Container = styled.div``;
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
    padding: 0 3%;
    margin-top: 50px;
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
  .RelateItemWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .RelateItem {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;
const RelateProductsTitle = styled.h3`
  font-size: 3.2rem !important;
  font-size: var(--dark-color);
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
  const { itemName } = useParams();
  const { isLoading, data } = StarData();
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
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          {data.artists.map((artist) => {
            const product = artist.products.find(
              (product) => product.itemName === itemName
            );
            if (product === undefined) {
              return null;
            }
            return (
              <Wrapper key={product.itemName}>
                <SwiperBox>
                  <DetailSwiper enabled={swiperActive} product={product} />
                </SwiperBox>
                <TextBox>
                  <ItemName>{product.itemName}</ItemName>
                  <ItemPrice>KRW {product.price}</ItemPrice>
                  <ItemCount>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </ItemCount>
                  <TotalPrice>
                    TOTAL: KRW <span>{product.price}</span>(<span>1</span>)개
                  </TotalPrice>
                  <ItemButton>
                    <button>ADD TO CART</button>
                    <button>ORDER NOW</button>
                  </ItemButton>
                  <ItemDesc>
                    <p>DESCRIPTION</p>
                    <span>{product.description}</span>
                  </ItemDesc>
                  <ItemDesc>
                    <p>EXCHANGE</p>
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus obcaecati fuga facere deleniti incidunt quam et
                      dolore in. Optio quae eligendi nobis sed rem nam
                      consequatur, qui quis nisi. Quos!
                    </span>
                  </ItemDesc>
                </TextBox>
              </Wrapper>
            );
          })}
          <RelateProducts>
            <RelateProductsTitle>Related Products</RelateProductsTitle>
            <Swiper
              className="RelateItemWrap"
              breakpoints={{
                1920: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2, // ✅ 모바일용 설정 추가 (예: 1개 보여줌)
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
              <SwiperSlide className="RelateItem">
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
              </SwiperSlide>
            </Swiper>
          </RelateProducts>
          ;
        </Container>
      )}
    </>
  );
};

export default Detail;
