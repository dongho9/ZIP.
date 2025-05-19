import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StarData } from "../StarData";

const Container = styled.div`
  margin-top: 100px;
  background: var(--light-color);
  padding: 60px 3% 100px 3%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;
const FilterTitle = styled.h3`
  font-size: 7rem;
  letter-spacing: -4px;
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
  justify-content: space-between;
  /* padding-left: 10px; */
  border: 1px solid var(--border-color);
`;
const Filter = styled.ul`
  display: flex;
  font-family: "EHNormalTrial";
  align-items: center;
  font-size: 1.6rem;
  transition: all 0.5s;
  padding: 14px 20px;
  li {
    color: var(--dark-color);
    background: var(--light-color);
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: var(--light-color);
      background: var(--dark-color);
      font-weight: 500;
    }
    &.active {
      color: var(--light-color);
      background: var(--dark-color);
      font-weight: 500;
    }
  }
`;
const FilterSelect = styled.select`
  border: none;
  border-left: 1px solid var(--border-color);
  padding-right: 30px;
  padding-left: 10px;
`;
const FilterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  position: relative;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--border-color);
  padding-right: 20px;
  cursor: pointer;
  &:nth-child(5n) {
    border-right: none;
  }
  &:last-child {
    border-right: none;
  }
`;
const FilterItemImgWrap = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const FilterItemImg = styled.img`
  padding: 30px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  background: var(--light-color);
  transition: all 0.5s ease;
  /* filter: brightness(0.95); */
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
  min-height: 120px;
  padding: 10px 10px;
`;
const FilterItemPick = styled.span`
  display: inline-block;
  color: var(--light-color);
  background: var(--dark-color);
  font-weight: 400;
  z-index: 1;
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: center;
  padding: 8px;
  position: absolute;
  right: 0;
  top: 0;
`;
const FilterItemName = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  margin: 10px 0;
  font-weight: 600;
`;
const FilterItemBrand = styled.li`
  color: var(--subTitle);
  font-size: 1.4rem;
`;
const FilterItemPrice = styled.li`
  letter-spacing: 0.2px;
  color: var(--subTitle);
  font-size: 1.4rem;
`;
const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30.3vh;
  grid-column: 1 / -1;
`;
const Search = () => {
  const [sortOption, setSortOption] = useState("신상품순");
  const { isLoading, data } = StarData();
  const { name } = useParams();
  const navigate = useNavigate();
  const onSelectChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    setSortOption("신상품순");
  }, [name]);

  const allProducts =
    data?.artists?.flatMap((artist) => {
      return artist.products
        .filter(
          (product) =>
            product.itemName.toLowerCase().includes(name.toLowerCase()) ||
            product.brandEng.toLowerCase().includes(name.toLowerCase()) ||
            product.brand.toLowerCase().includes(name.toLowerCase()) ||
            artist.artistName.includes(name)
        )
        .map((product) => ({
          ...product,
          artistName: artist.artistName,
        }));
    }) || [];

  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOption === "신상품순") {
      return b.releasedDate - a.releasedDate;
    } else if (sortOption === "가격높은순") {
      return b.price - a.price;
    } else if (sortOption === "가격낮은순") {
      return a.price - b.price;
    } else if (sortOption === "판매낮은순") {
      return a.sellNum - b.sellNum;
    }
  });
  return (
    <Container>
      <FilterTitle>Search ZIP</FilterTitle>
      <SearchResult>
        <span>"{name}"</span>에 대한 검색결과입니다.
      </SearchResult>
      <FilterWrap>
        <Filter>
          <p>
            검색결과 <spaan>{sortedProducts.length}</spaan>건
          </p>
        </Filter>
        <FilterSelect onChange={onSelectChange} value={sortOption}>
          <option value="가격순">신상품순</option>
          <option value="판매많은순">판매많은순</option>
          <option value="가격높은순">가격높은순</option>
          <option value="가격낮은순">가격낮은순</option>
        </FilterSelect>
      </FilterWrap>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <FilterContent>
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product, j) => (
              <FilterItem
                key={j}
                onClick={() => navigate(`/detail/${product.itemName}`)}
              >
                <FilterItemImgWrap>
                  <FilterItemPick>
                    {product.artistName}
                    <br />
                    PICK
                  </FilterItemPick>
                  <FilterItemImg src={product.detailImg.img01} />
                </FilterItemImgWrap>
                <FilterItemText>
                  <FilterItemBrand>{product.brand}</FilterItemBrand>
                  <FilterItemName>{product.itemName}</FilterItemName>
                  <FilterItemPrice>
                    KRW {product.price.toLocaleString()}
                  </FilterItemPrice>
                </FilterItemText>
              </FilterItem>
            ))
          ) : (
            <NotFound>검색결과가 없습니다.</NotFound>
          )}
        </FilterContent>
      )}
    </Container>
  );
};

export default Search;
