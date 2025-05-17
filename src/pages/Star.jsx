import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Masonry from "react-masonry-css";
import { StarData } from "../StarData";
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
  const { isLoading, data } = StarData();
  console.log(data);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Container>
          <Title>Star</Title>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.artists.map((artist) => (
              <FilterItem
                className="g01"
                onClick={itemClick}
                value={artist.artistName}
                key={artist.artistName}
              >
                <FilterItemImgWrap
                  style={{
                    backgroundImage: `url('${artist.artistImg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <FilterItemImg src={artist.artistImg} />
                </FilterItemImgWrap>
                <FilterItemText>
                  <FilterItemName>{artist.artistName}</FilterItemName>
                </FilterItemText>
              </FilterItem>
            ))}
          </Masonry>
        </Container>
      )}
    </>
  );
};

export default Star;
