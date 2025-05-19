import { useState, useEffect } from "react";
import styled from "styled-components";
import DetailSwiper from "../components/detail/DetailSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import { StarData } from "../StarData";

// 페이지 연동시 필요한 부분 (재기추가)
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ORDER_ITEMS_KEY } from "../constants/queryKeys";

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

  //재기 추가(페이지 연동)
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const queryClient = useQueryClient();

  // 수량 증가 함수
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  // 수량 감소 함수
  const decreaseCount = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  // 바로 주문하기 mutation
  const orderNowMutation = useMutation({
    mutationFn: (orderItem) => {
      return Promise.resolve([orderItem]);
    },
    onSuccess: (orderItems) => {
      // 주문 정보를 리액트 쿼리 캐시에 저장
      queryClient.setQueryData([ORDER_ITEMS_KEY], orderItems);
      // 결제 페이지로 이동
      navigate("/payment");
    },
  });

  // 장바구니 추가 핸들러
  const handleAddToCart = (product, artist) => {
    let imagePath = "";
    if (product.detailImg) {
      imagePath = Object.values(product.detailImg)[0] || "";
    }

    const cartItem = {
      id: product.productId || Date.now(),
      brand: product.brand || "BRAND",
      name: product.itemName,
      detail: product.description?.substring(0, 30) + "..." || "",
      price: product.price,
      image: imagePath, // 수정된 이미지 경로
      quantity: count,
      selected: true,
    };

    addToCart.mutate(cartItem, {
      onSuccess: () => {
        // 성공 시 알림
        alert("상품이 장바구니에 추가되었습니다.");
        window.dispatchEvent(new CustomEvent("cart-updated"));
      },
    });
  };

  // 바로 주문하기 핸들러
  const handleOrderNow = (product, artist) => {
    let imagePath = "";
    if (product.detailImg) {
      imagePath = Object.values(product.detailImg)[0] || "";
    }

    const orderItem = {
      id: product.productId || Date.now(),
      brand: product.brand || "BRAND",
      name: product.itemName,
      detail: product.description?.substring(0, 30) + "..." || "",
      price: product.price,
      image: imagePath, // 수정된 이미지 경로
      quantity: count,
      selected: true,
      option: product.keyword || "",
    };

    orderNowMutation.mutate(orderItem);
  };

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

    return () => window.removeEventListener("resize", handleResize);
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
                  <ItemPrice>
                    KRW {product.price.toLocaleString("ko-KR")}
                  </ItemPrice>
                  <ItemCount>
                    <button onClick={decreaseCount}>-</button>
                    <p>{count}</p>
                    <button onClick={increaseCount}>+</button>
                  </ItemCount>
                  <TotalPrice>
                    TOTAL: KRW{" "}
                    <span>
                      {(product.price * count).toLocaleString("ko-KR")}
                    </span>
                    (<span>{count}</span>)개
                  </TotalPrice>
                  <ItemButton>
                    <button onClick={() => handleAddToCart(product, artist)}>
                      ADD TO CART
                    </button>
                    <button onClick={() => handleOrderNow(product, artist)}>
                      ORDER NOW
                    </button>
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
