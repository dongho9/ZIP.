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
  position: relative;
`;
const FilterTitle = styled.h3`
  font-size: 10rem;
  letter-spacing: -4px;
  font-family: "EHNormalTrial";
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
  font-size: 2rem;
  transition: all 0.5s;
  li {
    color: var(--dark-color);
    background: var(--light-color);
    padding: 20px;
    &:hover {
      color: var(--light-color);
      background: var(--dark-color);
      font-weight: 500;
    }
  }
`;
const FilterSelect = styled.select`
  height: 100%;
  border-left: 1px solid var(--border-color);
`;
const FilterContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;

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

  &:nth-child(5),
  &:nth-child(10),
  &:nth-child(15),
  &:nth-child(20),
  &:nth-child(25),
  &:nth-child(30),
  &:nth-child(35),
  &:nth-child(40) {
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
const FilterCategory = () => {
  const { categoryName } = useParams();
  const { isLoading, data } = StarData();
  const navigate = useNavigate("");
  if (categoryName === "style") {
    return (
      <>
        {isLoading ? (
          <div>isLoading...</div>
        ) : (
          <Container>
            <FilterTitle style={{ textTransform: "capitalize" }}>{categoryName} ZIP</FilterTitle>
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
                const products = artist.products.filter((product) => product.mainCategory === "style");
                return products.map((product, i) => (
                  <FilterItem key={i} onClick={() => navigate(`/detail/${product.itemName}`)}>
                    <FilterItemImgWrap>
                      <FilterItemPick>
                        {artist.artistName} <br />
                        PICK
                      </FilterItemPick>
                      <FilterItemImg src={product.detailImg.img01} />
                    </FilterItemImgWrap>
                    <FilterItemText>
                      <FilterItemBrand>{product.brand}</FilterItemBrand>
                      <FilterItemName>{product.itemName}</FilterItemName>
                      <FilterItemPrice>KRW {product.price}</FilterItemPrice>
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
            <FilterTitle style={{ textTransform: "capitalize" }}>{categoryName} ZIP</FilterTitle>
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
                const products = artist.products.filter((product) => product.mainCategory === "beauty");
                return products.map((product, i) => (
                  <FilterItem key={i} onClick={() => navigate(`/detail/${product.itemName}`)}>
                    <FilterItemImgWrap>
                      <FilterItemPick>{artist.artistName} PICK</FilterItemPick>
                      <FilterItemImg src={product.detailImg.img01} />
                    </FilterItemImgWrap>
                    <FilterItemText>
                      <FilterItemBrand>{product.brand}</FilterItemBrand>
                      <FilterItemName>{product.itemName}</FilterItemName>
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
  } else {
    null;
  }
};

export default FilterCategory;
