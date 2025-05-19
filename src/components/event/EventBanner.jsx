import styled from "styled-components";

const ImgWrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const EventBanner = () => {
  return (
    <ImgWrapper>
      <img src="/src/imgs/event/tattoo-PC.png" alt="eventbanner" />
    </ImgWrapper>
  );
};

export default EventBanner;
