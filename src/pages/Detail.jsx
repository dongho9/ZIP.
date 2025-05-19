import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DetailSwiper from "../components/detail/DetailSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams, useNavigate } from "react-router-dom";
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
  font-weight: bold;
`;
const ItemPrice = styled.div`
  font-size: 1.6rem;
`;
const ItemButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 50%;
    border: none;
    padding: 16px;
    font-size: 1.6rem;
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
    cursor: pointer;
  }
  span {
    opacity: 0;
    font-size: 1.2rem;
    visibility: hidden;
    height: 0;
    &.active {
      height: 100%;
      visibility: visible;
      opacity: 1;
    }
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
  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        cursor: pointer;
      }
      .swiper-slide:last-child {
        div {
          border-right: none;
        }
      }
    }
  }
`;
const RelateProductsTitle = styled.h3`
  font-size: 3.2rem !important;
  font-size: var(--dark-color);
`;
const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  padding-right: 20px;
  /* &:last-child {
    border-right: none;
  } */
`;
const FilterItemImgWrap = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const FilterItemImg = styled.img`
  padding: 30px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background: var(--light-color);
  transition: all 0.5s ease;
  /* filter: brightness(0.95); */
  &:hover {
    transform: scale(1.1);
  }
`;
const FilterItemText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  min-height: 120px;
  padding: 10px 10px;
`;
const FilterItemPick = styled.span`
  display: inline-block;
  color: var(--light-color);
  background: var(--dark-color);
  font-weight: 400;
  z-index: 1;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 0;
`;
const FilterItemName = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 10px 0;
  font-weight: 600;
`;
const FilterItemBrand = styled.li`
  color: var(--subTitle);
  font-size: 1.4rem;
`;
const FilterItemPrice = styled.li`
  letter-spacing: 0.2px;
  color: var(--subTitle);
  font-size: 1.4rem;
`;

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [swiperActive, setSwipierActive] = useState(false);
  const { itemName } = useParams();
  const { isLoading, data } = StarData();
  const navigate = useNavigate();
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

  const detailData = data?.artists?.map((artist) => artist).flat() || [];
  const allProducts =
    data?.artists?.map((artist) => artist.products).flat() || [];
  const product = allProducts.find((product) => product.itemName === itemName);
  const relatedProducts = allProducts.filter(
    (item) => item.keyword === product.keyword
  );
  const relatedItems = relatedProducts.slice(0, 8);

  const onDecrease = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };
  const onIncrease = () => {
    setQuantity(quantity + 1);
  };

  const descOpen = (e) => {
    const next = e.target.nextElementSibling;
    next.classList.toggle("active");
  };

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
                  <p>{artist.artistName} PICK</p>
                  <ItemName>{product.itemName}</ItemName>
                  <ItemPrice>
                    KRW <span>{product.price}</span>
                  </ItemPrice>
                  <ItemCount>
                    <button onClick={onDecrease}>-</button>
                    <p>{quantity}</p>
                    <button onClick={onIncrease}>+</button>
                  </ItemCount>
                  <TotalPrice>
                    TOTAL: KRW <span>{product.price * quantity}</span>(
                    <span>{quantity}</span>)개
                  </TotalPrice>
                  <ItemButton>
                    <button>ADD TO CART</button>
                    <button>ORDER NOW</button>
                  </ItemButton>
                  <ItemDesc>
                    <p onClick={descOpen}>DESCRIPTION</p>
                    <span>{product.description}</span>
                  </ItemDesc>
                  <ItemDesc>
                    <p onClick={descOpen}>EXCHANGE</p>
                    <span>
                      해당 상품은 수령일로부터 7일 이내에 미사용/미훼손 상태일
                      경우 교환이 가능하며, 왕복 배송비는 고객 부담입니다. 보다
                      정확한 안내를 원하신다면 고객센터(☎️0000-0000)로 연락
                      부탁드립니다.
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
            >
              {relatedItems.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="RelateItem"
                  onClick={() => {
                    navigate(`/detail/${item.itemName}`);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setQuantity(1);
                  }}
                >
                  <FilterItem className={i}>
                    <FilterItemImgWrap>
                      <FilterItemImg src={item.detailImg.img01} />
                    </FilterItemImgWrap>
                    <FilterItemText>
                      <FilterItemBrand>{item.brand}</FilterItemBrand>
                      <FilterItemName>{item.itemName}</FilterItemName>
                      <FilterItemPrice>
                        KRW {item.price.toLocaleString()}
                      </FilterItemPrice>
                    </FilterItemText>
                  </FilterItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </RelateProducts>
        </Container>
      )}
    </>
  );
};

export default Detail;
