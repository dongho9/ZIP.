import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { StarData } from "../StarData";

const Container = styled.div`
  margin-top: 60px;
  background: var(--light-color);
  padding: 60px 3% 100px 3%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;
const FilterTitle = styled.h3`
  font-size: 6rem;
  font-family: "EHNormalTrial";
`;
const FilterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  border: 1px solid var(--border-color);
`;
const Filter = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const FilterSelect = styled.select`
  height: 100%;
  padding: 10px 40px 10px 4px;
  border: none;
  border-left: 1px solid var(--border-color);
`;
const FilterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  /* grid-template-areas:
    "g01 g01 g02 g03"
    "g04 . g05 g06"
    ". g07 . g08"
    "g09 g10 g11 g11"; */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-areas:
      "g01 g02"
      "g03 g04"
      "g05 g06"
      "g07 g08"
      "g09 g10"
      "g11 ."; */
  }
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
  &.g11 {
    grid-area: g11;
  }
`;
const FilterItemImgWrap = styled.div`
  width: 100%;
`;
const FilterItemImg = styled.img`
  width: 100%;
  object-fit: cover;
  filter: brightness(0.95);
`;
const FilterItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const FilterItemPick = styled.span`
  font-size: 1.4rem;
`;
const FilterItemName = styled.p`
  font-size: 1.8rem;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
`;
const FilterCategory = () => {
  const { categoryName } = useParams();
  const { isLoading, data } = StarData();
  if (categoryName === "style") {
    return (
      <>
        {isLoading ? (
          <div>isLoading...</div>
        ) : (
          <Container>
            <FilterTitle style={{ textTransform: "capitalize" }}>
              {categoryName}
            </FilterTitle>
            <FilterWrap>
              <Filter>
                <li>ALL</li>
                <li>STYLING</li>
                <li>PERFUME</li>
                <li>ACC</li>
              </Filter>
              <FilterSelect>
                <option value="가격순">신상품순</option>
                <option value="가격순">판매많은순</option>
                <option value="가격순">가격높은순</option>
                <option value="가격순">가격낮은순</option>
              </FilterSelect>
            </FilterWrap>
            <FilterContent>
              {data.artists.map((artist) => {
                const products = artist.products.filter(
                  (product) => product.mainCategory === "style"
                );
                return products.map((product, i) => (
                  <FilterItem key={i}>
                    <FilterItemImgWrap>
                      <FilterItemImg src={product.detailImg.img01} />
                    </FilterItemImgWrap>
                    <FilterItemText>
                      <FilterItemPick>{artist.artistName} PICK</FilterItemPick>
                      <FilterItemName>{product.itemName}</FilterItemName>
                      <li>{product.brand}</li>
                      <li>{product.price}</li>
                    </FilterItemText>
                  </FilterItem>
                ));
              })}
            </FilterContent>
          </Container>
        )}
      </>
    );
  } else if (categoryName === "beauty") {
    return (
      <>
        {isLoading ? (
          <div>isLoading...</div>
        ) : (
          <Container>
            <FilterTitle style={{ textTransform: "capitalize" }}>
              {categoryName}
            </FilterTitle>
            <FilterWrap>
              <Filter>
                <li>ALL</li>
                <li>FACE</li>
                <li>BODY</li>
                <li>HAIR</li>
                <li>FOOD</li>
              </Filter>
              <FilterSelect>
                <option value="가격순">신상품순</option>
                <option value="가격순">판매많은순</option>
                <option value="가격순">가격높은순</option>
                <option value="가격순">가격낮은순</option>
              </FilterSelect>
            </FilterWrap>
            <FilterContent>
              {data.artists.map((artist) => {
                const products = artist.products.filter(
                  (product) => product.mainCategory === "beauty"
                );
                return products.map((product, i) => (
                  <FilterItem key={i}>
                    <FilterItemImgWrap>
                      <FilterItemImg src={product.detailImg.img01} />
                    </FilterItemImgWrap>
                    <FilterItemText>
                      <FilterItemPick>{artist.artistName} PICK</FilterItemPick>
                      <FilterItemName>{product.itemName}</FilterItemName>
                      <li>{product.brand}</li>
                      <li>{product.price}</li>
                    </FilterItemText>
                  </FilterItem>
                ));
              })}
            </FilterContent>
          </Container>
        )}
      </>
    );
  }
};

export default FilterCategory;
