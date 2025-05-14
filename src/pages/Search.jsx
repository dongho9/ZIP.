import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 60px;
  background: var(--light-color);
  padding: 60px 3% 100px 3%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
const FilterTitle = styled.h3`
  font-size: 6rem;
  font-family: "EHNormalTrial";
`;
const SearchResult = styled.div`
  font-size: 2.4rem;
  span {
    font-weight: bold;
  }
`;
const FilterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border: 1px solid var(--border-color);
`;
const Filter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-weight: bold;
  }
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
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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
const Search = () => {
  const { name } = useParams();
  return (
    <Container>
      <FilterTitle>Search</FilterTitle>
      <SearchResult>
        <span>"{name}"</span>에 대한 검색결과입니다.
      </SearchResult>
      <FilterWrap>
        <Filter>
          <p>
            검색결과 <span>123</span>건
          </p>
        </Filter>
        <FilterSelect>
          <option value="가격순">신상품순</option>
          <option value="가격순">판매많은순</option>
          <option value="가격순">가격높은순</option>
          <option value="가격순">가격낮은순</option>
        </FilterSelect>
      </FilterWrap>
      <FilterContent>
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
        <FilterItem>
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
};

export default Search;
