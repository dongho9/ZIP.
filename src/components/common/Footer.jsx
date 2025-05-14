import { useState, useEffect } from "react";
import { useMatch, Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: var(--light-color);
  background: var(--dark-color);
  padding: 100px 3% 40px 3%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 767px) {
    gap: 40px;
  }
`;
const Fnb = styled.nav``;
const FooterFnb = styled.ul`
  display: flex;
  gap: 16px;

  @media screen and (max-width: 767px) {
  }
`;
const Address = styled.address`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 1.2rem;
  }
`;
const AddressList = styled.ul`
  display: flex;
  gap: 10px;
  li {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    li {
      &:nth-child(even) {
        display: none;
      }
    }
  }
`;
const FooterRight = styled.div``;
const HeaderLogoImg = styled.img`
  width: 90px;
`;
const Footer = () => {
  const [filterCheck, setFilterCheck] = useState(false);
  const commerceMatch = useMatch("/");
  const detailMatch = useMatch("/detail");
  const loginMatch = useMatch("/login");
  const signUpMatch = useMatch("/signup");
  const eventMatch = useMatch("/event");
  const cartMatch = useMatch("/cart");
  const filterCategoryMatch = useMatch("/filtercategory/:categoryName");
  const searchMatch = useMatch("/search/:name");
  const mypageMatch = useMatch("/mypage");
  const mypageMatch02 = useMatch("/mypage/:name");
  const filterFunc = () => {
    if (
      commerceMatch ||
      detailMatch ||
      filterCategoryMatch ||
      loginMatch ||
      signUpMatch ||
      eventMatch ||
      cartMatch ||
      searchMatch ||
      mypageMatch ||
      mypageMatch02
    ) {
      setFilterCheck(true);
    } else {
      setFilterCheck(false);
    }
  };
  useEffect(() => {
    filterFunc();
  }, [
    commerceMatch,
    detailMatch,
    filterCategoryMatch,
    loginMatch,
    signUpMatch,
    eventMatch,
    mypageMatch,
    mypageMatch02,
    searchMatch,
  ]);
  return (
    <Container>
      <FooterLeft>
        <Fnb>
          {filterCheck ? (
            <FooterFnb>
              <li>Style</li>
              <li>Beauty</li>
              <li>Artist</li>
              <li>Promotion</li>
            </FooterFnb>
          ) : (
            <FooterFnb>
              <li>haha</li>
            </FooterFnb>
          )}
        </Fnb>
        <Address>
          <AddressList>
            <li>COMPANY: ZIP.</li>
            <li>|</li>
            <li>OWNER: JAEGI JUNG</li>
            <li>|</li>
            <li>TEL: 02 - 1234- 5678</li>
          </AddressList>
          <p>
            ADDRESS: Gangnam-gu, Seoul <br /> COPYRIGHT © ZIP. ALL RIGHTS
            RESERVED.
          </p>
        </Address>
      </FooterLeft>
      <FooterRight>
        <Link to="/">
          <HeaderLogoImg src="./img/Logo.png" />
        </Link>
      </FooterRight>
    </Container>
  );
};

export default Footer;
