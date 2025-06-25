import styled from "styled-components";
import { AiOutlineLike } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { StarData, bagData, interviewData, allData } from "../../StarData";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";
import YouTube from "react-youtube";

const Container = styled.div`
  width: 100%;
  padding: 0 3%;
  overflow-x: hidden;
  color: var(--light-color);
  background: var(--ott-bg-color);
  padding-top: 30px;
  .swiper {
    width: 100%;
    display: flex;
  }
`;

const Line = styled.div`
  width: 100%;
  margin: 34px 0;
  left: 10px;
  right: 10px;
`;

const MainContent = styled.div`
  display: flex;
  padding: 5% 0 20px 0;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid var(--light-color);
  @media (max-width: 1024px) {
    gap: 20px;
    flex-direction: column;
  }
  @media (max-width: 767px) {
    padding-top: 8%;
  }

  /* @media (max-width: 480px) {
    padding: 40px 0 0 0;
    gap: 30px;
  } */
`;

const RightContent = styled.div`
  width: 100%;
  height: 100%;
  flex: 6;
  @media screen and(max-width: 1024px) {
    order: 1;
  }
`;

const VideoContent = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  height: 100%;
  /* border: 1px solid var(--light-color); */
  /* 
  @media (max-width: 1024px) {
    height: 450px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 250px;
  } */
`;

const LeftContent = styled.div`
  width: 100%;
  min-height: 100%;
  flex: 4;
  @media (max-width: 1024px) {
    width: 100%;
    order: 2;
  }
`;

const LeftTop = styled.div`
  border-top: 1px solid var(--light-color);
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  width: 100%;
  padding-top: 10px;
  font-family: "EHNormalTrial";
  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const LeftMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.2;
  height: 100%;
  & > div:nth-child(1) {
    font-size: 2.6rem;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 2.4rem;
    }
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: auto;
    gap: 30px;
  }
`;

const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > div {
    &:last-child {
      font-size: 1.6rem;
    }
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
  gap: 10px;
`;
const DescriptionText = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  &.expanded {
    overflow: visible;
    display: block;
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const DescriptionButton = styled.div`
  display: contents;
  background: var(--dark-color);
  cursor: pointer;
  font-size: 1.4rem;
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  /* gap: 10px; */

  @media (max-width: 768px) {
    /* padding: 15px 0 0 30px; */
  }

  @media (max-width: 480px) {
    /* padding: 10px 0 0 20px; */
  }
`;

const Like = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--light-color);
  transition: all 0.3s;
  cursor: pointer;

  &.like-default {
    background: var(--dark-color);
    color: var(--light-color);
  }

  &.like-default:hover {
    background: #fff;
    color: #000;
  }

  &.like-selected {
    background: var(--light-color);
    color: var(--dark-color);
  }

  &.like-selected:hover {
    background: #fff;
    color: #000;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Insta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--light-color);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #000;
    background: #fff;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Share = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid var(--light-color);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: #000;
    background: #fff;
  }
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const VideoContents = styled.div`
  /* padding: 0 0 0 40px; */
  /* aspect-ratio: 16 / 9; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  .swiper-slide {
    gap: 16px;
    display: flex;
    flex-direction: column;
  }
`;

const ContentVideo = styled.div`
  width: 400px;
  height: 225px;
  margin: 20px 0 10px 0;
`;

const Toptitle = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  font-family: "EHNormalTrial";
  text-transform: uppercase;
  margin-top: 60px;
  @media screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;
const Profile = styled.div`
  display: flex;
  gap: 15px;
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 44px;
  height: 44px;
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  :nth-child(1) {
    font-size: 1.4rem;
    line-height: 1.8rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :nth-child(2) {
    font-size: 1.2rem;
    color: var(--subTitle);
    text-transform: uppercase;
  }
`;

const RelateProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 80px 0;
  /* margin-bottom: 80px; */
  @media screen and (max-width: 1024px) {
    /* margin-top: 80px; */
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
  font-size: 2.8rem;
  font-weight: bold;
  font-family: "EHNormalTrial";
  text-transform: uppercase;
  @media screen and (max-width: 1024px) {
    font-size: 2.4rem;
  }
`;
const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  padding-right: 20px;
`;
const FilterItemImgWrap = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const FilterItemImg = styled.img`
  display: block;
  padding: 30px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background: var(--light-color);
  transition: all 0.5s ease;
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
  padding: 10px 10px;
  min-height: 120px;
`;

const FilterItemName = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 10px 0;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
`;
const FilterItemBrand = styled.li`
  color: var(--subTitle);
  font-size: 1.4rem;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const RelateItemPrice = styled.span`
  letter-spacing: 0.2px;
  color: var(--subTitle);
  font-size: 1.4rem;
  color: var(--subTitle);
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

// const StyledYouTubeWrapper = styled.span`
//   position: absolute;
//   /* display: none; */
//   width: 100%;
//   height: 100%;
//   padding-bottom: 56.25%; /* 16:9 비율 (9 / 16 = 0.5625) */
//   /* height: 0; */
//   /* overflow: hidden; */
//   margin: 40px 0 25px 0;
//   /* opacity: 0%; */
//   /* z-index: 100; */
//   iframe {
//     /* position: absolute; */
//     width: 100%;
//     height: 100%;
//     border: none;
//     &:hover {
//       /* display: block; */
//     }
//   }
// `;

const Thumbnails = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-bottom: 56.25%; */
  /* z-index: 1000; */
  /* opacity: 0%; */
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    &:hover {
      /* display: none; */
    }
  }
`;

const OttDetail = () => {
  // 마우스 오버했을때 동영상 재생
  // const playerRef = useRef(null);

  // const onPlayerReady = (event) => {
  //   playerRef.current = event.target;
  // };

  // const handleMouseEnter = () => {
  //   if (playerRef.current) {
  //     playerRef.current.playVideo();
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (playerRef.current) {
  //     playerRef.current.pauseVideo();
  //   }
  // };

  const toggleExpanded = () => {
    //description useref사용
    if (descriptionRef.current) {
      const el = descriptionRef.current;
      el.classList.toggle("expanded");
    }
    if (buttonRef.current) {
      buttonRef.current.textContent =
        buttonRef.current.textContent === "더보기" ? "접기" : "더보기";
    }
  };
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const { title } = useParams();
  const navigate = useNavigate();
  const likeRef = useRef(null); //좋아요
  const isSelected = useRef(false); // 상태 저장용

  const handleLikeClick = () => {
    isSelected.current = !isSelected.current; //현재 선택되었는지 안되어있는지 확인

    if (likeRef.current) {
      //만약 선택이 되었다면
      likeRef.current.classList.toggle("like-selected", isSelected.current); //선택된값 클래스 주기
      likeRef.current.classList.toggle("like-default", !isSelected.current); //디폴트값 클래스 주기
    }
  };

  const YouTubeEmbed = ({ videoId }) => (
    <iframe
      style={{ pointerEvents: "true" }} //포인트가 이동했을때 누를 수 있을지 없을지 boolean값으로 확인
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${find02Data?.contentDetails?.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;  block;"
      allowFullScreen
    />
  );

  const { data } = StarData(); //스타 상품 데이터
  // console.log(data);
  const { data: data02 } = bagData(); //인마이백데이터
  // console.log(data02);
  const { data: data03 } = interviewData(); //인터뷰데이터
  // console.log(data03);
  const { data: YoutubeDatas } = allData(); //모든 데이터

  const findData = data?.artists?.find(
    (
      artist //영상 title과 맞는 artistName이 있는 것을 출력하기
    ) => title.includes(artist.artistName)
  );
  console.log(findData);

  const find02Data = YoutubeDatas?.find(
    (
      YoutubeData //title 과 맞는 youtube정보값 찾아오기
    ) => YoutubeData.snippet.title?.includes(title)
  );

  console.log(find02Data);

  const regex = new RegExp(findData?.artistName); //정규표현식 사용해서 아티스트네임 찾아오기

  const matchedDataLists = YoutubeDatas?.filter((YoutubeData) =>
    regex.test(YoutubeData.snippet.title)
  );

  // const thumb = matchedDataLists?.find((matchedDataList) => {
  //   matchedDataList..includes(title)
  // })

  // console.log(matchedDataLists[0]?.snippet?.title); //아티스트의 인마백,인터뷰,본업영상 찾아오기

  return (
    <Container>
      <MainContent>
        <LeftTop>
          <div>{find02Data?.snippet?.videoOwnerChannelTitle}</div>
          {/* charAt함수는 몇번째 알파벳을 찾아올 수있다
              slice함수 인자값으로 숫자 하나만 넣어준다면 그 숫자 부터 찾아온다 */}
          <div>
            {find02Data?.contentDetails?.videoPublishedAt.split("T")[0]}
          </div>
          {/* split함수는 T를 기준으로 2개를 나누어 0과 1로 둘중에 무었을 사용할 것 인지를 결정해주면 된다 */}
        </LeftTop>
        <LeftContent>
          <LeftMain>
            <LeftText>
              <div>{find02Data?.snippet?.title}</div>
              <DescriptionWrap>
                <DescriptionText ref={descriptionRef}>
                  {find02Data?.snippet?.description}
                </DescriptionText>
                <DescriptionButton ref={buttonRef} onClick={toggleExpanded}>
                  더보기
                </DescriptionButton>
              </DescriptionWrap>
            </LeftText>
            <Buttons>
              <Like
                ref={likeRef}
                className="like-default"
                onClick={handleLikeClick}
              >
                <AiOutlineLike size={30} />
              </Like>
              <Insta
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav"
                  )
                }
              >
                <FaInstagram size={30} />
              </Insta>
              <Share
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href); // 현재 페이지 주소 복사
                  alert("복사되었습니다!"); // 알림창 띄우기
                }}
              >
                <PiShareFat size={30} />
              </Share>
            </Buttons>
          </LeftMain>
        </LeftContent>
        <RightContent>
          <VideoContent>
            <YouTubeEmbed videoId={find02Data?.contentDetails?.videoId} />
          </VideoContent>
        </RightContent>
      </MainContent>
      <VideoContents>
        <Toptitle>Related Video</Toptitle>
        <Swiper
          breakpoints={{
            1920: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 2, // ✅ 모바일용 설정 추가 (예: 1개 보여줌)
              spaceBetween: 20,
            },
          }}
        >
          {matchedDataLists?.map((matchedDataList) => (
            <SwiperSlide>
              <Thumbnails
                onClick={() =>
                  navigate(
                    `/ott/detail/${encodeURIComponent(
                      matchedDataList.snippet.title
                    )}`
                  )
                }
              >
                <img
                  src={matchedDataList?.snippet?.thumbnails?.standard?.url}
                  alt="썸네일"
                />
              </Thumbnails>
              <Profile>
                <ProfileImg
                  onClick={() => navigate(`/star/${findData.artistName}`)}
                >
                  <img src={findData.artistImg} alt="아티스트이미지" />
                </ProfileImg>
                <Title
                  onClick={() =>
                    navigate(
                      `/ott/detail/${encodeURIComponent(
                        matchedDataList.snippet.title
                      )}`
                    )
                  }
                >
                  <div>{matchedDataList.snippet.title}</div>
                  <div>{matchedDataList.snippet.videoOwnerChannelTitle}</div>
                </Title>
              </Profile>
            </SwiperSlide>
          ))}
        </Swiper>
      </VideoContents>
      <RelateProducts>
        <RelateProductsTitle>{findData?.artistName} Pick</RelateProductsTitle>
        <Swiper
          className="RelateItemWrap"
          breakpoints={{
            1920: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
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
          {findData?.products.map((product) => (
            <SwiperSlide
              onClick={() =>
                navigate(`/detail/${encodeURIComponent(product.itemName)}`)
              }
            >
              {/* /detail/만 넣어줌으로써 localhost가 서로 이어붙지 않도록 해주었다
                      encodeURIComponent함수를 사용하면 20%를 자동으로 공백에 붙여준다*/}
              <FilterItem>
                <FilterItemImgWrap>
                  <FilterItemImg
                    src={product.detailImg.img01}
                    alt="제품 이미지"
                  />
                </FilterItemImgWrap>
                <FilterItemText>
                  <FilterItemBrand>{product.brand}</FilterItemBrand>
                  <FilterItemName key={product.productId}>
                    {product.itemName}
                  </FilterItemName>
                  <RelateItemPrice>
                    KRW {product.price.toLocaleString()}
                  </RelateItemPrice>
                </FilterItemText>
              </FilterItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </RelateProducts>
    </Container>
  );
};

export default OttDetail;
