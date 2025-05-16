import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
const Container = styled.div`
  padding: 160px 3%;
  background: var(--dark-color);
  color: var(--light-color);
`;
const Title = styled.h3`
  font-size: 3.6rem;
  margin-bottom: 40px;
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  :hover {
    img {
      transform: scale(0.9);
    }
  }
  &.g01 {
    grid-area: g01;
  }
  &.g02 {
    grid-area: g02;
  }
  &.g03 {
    grid-area: g03;
  }
  &.g04 {
    grid-area: g04;
  }
  &.g05 {
    grid-area: g05;
  }
  &.g06 {
    grid-area: g06;
  }
  &.g07 {
    grid-area: g07;
  }
  &.g08 {
    grid-area: g08;
  }
  &.g09 {
    grid-area: g09;
  }
  &.g10 {
    grid-area: g10;
  }
  /* &.g11 {
    grid-area: g11;
  } */
`;
const FilterItemImgWrap = styled.div`
  width: 100%;
`;
const FilterItemImg = styled.img`
  width: 100%;
  transition: all 0.3s ease-in-out;
`;
const FilterItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterItemName = styled.p`
  font-size: 1.8rem;
  padding-bottom: 20px;
`;
const Star = () => {
  const navigate = useNavigate();
  const itemClick = (e) => {
    const itemValue = e.currentTarget.getAttribute("value");
    navigate(`${itemValue}`);
  };
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
  };

  return (
    <Container>
      <Title>Star</Title>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <FilterItem className="g01" onClick={itemClick} value="닝닝">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/11/style_673c87ab13c1b-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg src="https://img.allurekorea.com/allure/2024/11/style_673c87ab13c1b-960x1200.jpg" />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>닝닝</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g02" onClick={itemClick} value="고보결">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/09/style_66f104ba7339d-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.allurekorea.com/allure/2024/09/style_66f104ba7339d-960x1200.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>고보결</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g03" onClick={itemClick} value="김민하">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/11/style_673c77e5599e5-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg src="https://img.allurekorea.com/allure/2024/11/style_673c77e5599e5-960x1200.jpg" />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>김민하</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g04" onClick={itemClick} value="노정의">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2025/04/style_68037587a4290-650x650.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.allurekorea.com/allure/2025/04/style_68037587a4290-650x650.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>노정의</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g05" onClick={itemClick} value="홍경">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.gqkorea.co.kr/gq/2024/01/style_65b0b92e18ef3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.gqkorea.co.kr/gq/2024/01/style_65b0b92e18ef3.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>홍경</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g06">
          <FilterItemImgWrap>
            <FilterItemImg src="https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/727ef2ac-e008-4477-8853-5df65f42cf00/w=1024,h=1280" />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>Sorbet Balm</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g07">
          <FilterItemImgWrap>
            <FilterItemImg
              src="https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/c2aba865-6f12-46b8-22b5-9ada8f1ed300/w=1024,h=1280"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>Sorbet Balm</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g08">
          <FilterItemImgWrap>
            <FilterItemImg
              src="https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/71c291ce-a98c-41bf-0dcd-95ed3967b800/w=1024,h=1280"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>Sorbet Balm</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g09">
          <FilterItemImgWrap>
            <FilterItemImg
              src="https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/b595f38f-3fb6-4917-ec0b-ed7a0fa95c00/w=1024,h=1024,fit=crop"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>Sorbet Balm</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g10">
          <FilterItemImgWrap>
            <FilterItemImg
              src="https://imagedelivery.net/djfufN1Ft6CV8Emdrip5jA/e434fb00-76d5-4d76-b9d0-7d4b47c27600/w=1024,h=1359"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>Sorbet Balm</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g01" onClick={itemClick} value="닝닝">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/11/style_673c87ab13c1b-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg src="https://img.allurekorea.com/allure/2024/11/style_673c87ab13c1b-960x1200.jpg" />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>닝닝</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g02" onClick={itemClick} value="고보결">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/09/style_66f104ba7339d-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.allurekorea.com/allure/2024/09/style_66f104ba7339d-960x1200.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>고보결</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g03" onClick={itemClick} value="김민하">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2024/11/style_673c77e5599e5-960x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg src="https://img.allurekorea.com/allure/2024/11/style_673c77e5599e5-960x1200.jpg" />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>김민하</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g04" onClick={itemClick} value="노정의">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.allurekorea.com/allure/2025/04/style_68037587a4290-650x650.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.allurekorea.com/allure/2025/04/style_68037587a4290-650x650.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>노정의</FilterItemName>
          </FilterItemText>
        </FilterItem>
        <FilterItem className="g05" onClick={itemClick} value="홍경">
          <FilterItemImgWrap
            style={{
              backgroundImage:
                "url('https://img.gqkorea.co.kr/gq/2024/01/style_65b0b92e18ef3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <FilterItemImg
              src="https://img.gqkorea.co.kr/gq/2024/01/style_65b0b92e18ef3.jpg"
              alt="img06"
            />
          </FilterItemImgWrap>
          <FilterItemText>
            <FilterItemName>홍경</FilterItemName>
          </FilterItemText>
        </FilterItem>
      </Masonry>
    </Container>
  );
};

export default Star;
