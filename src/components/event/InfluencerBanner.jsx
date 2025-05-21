import styled from "styled-components";
import { useEffect, useState } from "react";

const ImgWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfluencerBanner = () => {
  const [imgUrl, setImgUrl] = useState("http://localhost:5173/img/influencer-PC.png")
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <  767){
      setImgUrl("http://localhost:5173/img/influencer-MO.png");
      }else {
        setImgUrl("http://localhost:5173/img/influencer-PC.png");
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  },[])
  return (
    <ImgWrapper>
      <img src={imgUrl} alt="eventbanner" />
    </ImgWrapper>
  );
};

export default InfluencerBanner;
