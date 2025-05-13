import styled from "styled-components"

const ImgWrapper = styled.div`
  width: 100%;
  height: 600px;
  object-fit: cover;
`

const Banner = () => {
  return (
    <ImgWrapper>
      <img src="/src/imgs/event/banner.png" alt="eventbanner"/>
    </ImgWrapper>
  )
}

export default Banner