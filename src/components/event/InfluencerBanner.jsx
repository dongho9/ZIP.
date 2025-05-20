import styled from "styled-components";

const ImgWrapper = styled.div`
  /* position: relative; */
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfluencerBanner = () => {
  return (
    <ImgWrapper>
      <img src="/src/imgs/event/influencer-PC.png" alt="eventbanner" />
    </ImgWrapper>
  );
};

export default InfluencerBanner;
