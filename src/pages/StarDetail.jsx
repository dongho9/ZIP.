import { useParams } from "react-router-dom";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
// import YouTube from "react-youtube";
import { StarData } from "../StarData";

const Container = styled.div`
  color: var(--light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
    gap: 100px;
    row-gap: 100px;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    &:nth-child(even) {
      margin-top: 100px;
    }
  }
  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 100px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    .my-masonry-grid {
      gap: 30px;
      margin-left: 0;
    }
    .my-masonry-grid_column {
      padding-left: 0px; /* gutter size */
      background-clip: padding-box;
      &:nth-child(even) {
        margin-top: 100px;
      }
    }
    /* Style your items */
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      margin-bottom: 50px;
    }
  }
`;

const ArtistTitle = styled.h3`
  font-size: 6rem;
  font-family: "EHNormalTrial";
`;

const ArtistBg = styled.div`
  top: 0;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    object-fit: cover;
    height: 100vh;
    filter: brightness(50%);
  }
`;
const ArtistInfoWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 450px;
  padding: 0 3%;
  position: absolute;
  top: 40%;
  z-index: 1;
`;

const ArtistText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  p {
    font-size: 2.6rem;
    font-family: "EHNormalTrial";
  }
  h4 {
    margin-top: 14px;
  }
`;

const RelateProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 3%;
  width: 100%;
  color: #000;
  background: #fff;
  @media screen and (max-width: 1024px) {
  }
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
  object-fit: cover;
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

const StarDetail = () => {
  const { starName } = useParams();
  const { itemName } = useParams();
  
  const { isLoading, data } = StarData();

  const videoOpts = {
    height: "1920",
    width: "1080",
    playerVars: {
      autoplay: 0, // 자동재생 끔
      controls: 1, // 컨트롤 보임
    },
  };

  return (
    <Container>
      <ArtistInfoWrap>
        <ArtistText>
          <p>ACTOR</p>
          <ArtistTitle>
            IN MY PLACE
            <h4>{starName}</h4>
          </ArtistTitle>
        </ArtistText>
      </ArtistInfoWrap>
      <ArtistBg>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=dQw4w9WgXcQ"
          title="Artist Background Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      </ArtistBg>
      <RelateProducts>
        <RelateProductsTitle>{starName} Pick</RelateProductsTitle>
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
              <RelateItemImg src="https://relilla.com/cdn/shop/files/product_11_1280x.jpg?v=1698491524" alt="img04" />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </SwiperSlide>
          <SwiperSlide className="RelateItem">
            <RelateItemImgWrap>
              <RelateItemImg src="https://relilla.com/cdn/shop/files/product_25_1280x.jpg?v=1698498801" alt="img05" />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </SwiperSlide>
          <SwiperSlide className="RelateItem">
            <RelateItemImgWrap>
              <RelateItemImg src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654" alt="img06" />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </SwiperSlide>
          <SwiperSlide className="RelateItem">
            <RelateItemImgWrap>
              <RelateItemImg src="https://relilla.com/cdn/shop/files/product_25_1280x.jpg?v=1698498801" alt="img05" />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </SwiperSlide>
          <SwiperSlide className="RelateItem">
            <RelateItemImgWrap>
              <RelateItemImg src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654" alt="img06" />
            </RelateItemImgWrap>
            <RelateItemText>
              <RelateItemPick>카리나 PICK</RelateItemPick>
              <RelateItemName>Sorbet Balm</RelateItemName>
            </RelateItemText>
          </SwiperSlide>
        </Swiper>
      </RelateProducts>
    </Container>
  );
};

export default StarDetail;
