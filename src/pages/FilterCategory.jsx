import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-template-areas:
    "g01 g01 g02 g03"
    "g04 . g05 g06"
    ". g07 . g08"
    "g09 g10 g11 g11";
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "g01 g02"
      "g03 g04"
      "g05 g06"
      "g07 g08"
      "g09 g10"
      "g11 .";
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
  if (
    categoryName === "style" ||
    categoryName === "beauty" ||
    categoryName === "artist"
  ) {
    return (
      <Container>
        <FilterTitle style={{ textTransform: "capitalize" }}>
          {categoryName}
        </FilterTitle>
        <FilterWrap>
          <Filter>
            <li>ALL</li>
            <li>SKINCARE</li>
            <li>MAKEUP</li>
          </Filter>
          <FilterSelect>
            <option value="가격순">신상품순</option>
            <option value="가격순">판매많은순</option>
            <option value="가격순">가격높은순</option>
            <option value="가격순">가격낮은순</option>
          </FilterSelect>
        </FilterWrap>
        <FilterContent>
          <FilterItem className="g01">
            <Link to="/detail">
              <FilterItemImgWrap>
                <FilterItemImg
                  src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                  alt="img06"
                />
              </FilterItemImgWrap>
              <FilterItemText>
                <FilterItemPick>카리나 PICK</FilterItemPick>
                <FilterItemName>Sorbet Balm</FilterItemName>
              </FilterItemText>
            </Link>
          </FilterItem>
          <FilterItem className="g02">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g03">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g04">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g05">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g06">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g07">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g08">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g09">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g10">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
          <FilterItem className="g11">
            <FilterItemImgWrap>
              <FilterItemImg
                src="https://relilla.com/cdn/shop/files/Web_1920_2_0_1280x.jpg?v=1718842654"
                alt="img06"
              />
            </FilterItemImgWrap>
            <FilterItemText>
              <FilterItemPick>카리나 PICK</FilterItemPick>
              <FilterItemName>Sorbet Balm</FilterItemName>
            </FilterItemText>
          </FilterItem>
        </FilterContent>
      </Container>
    );
  } else {
    return null;
  }
};

export default FilterCategory;
