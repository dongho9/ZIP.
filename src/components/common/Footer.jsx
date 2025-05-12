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
`;
const Fnb = styled.nav``;
const FooterFnb = styled.ul`
  display: flex;
  gap: 16px;
`;
const Address = styled.address`
  font-size: 1.4rem;
`;
const AddressList = styled.ul`
  display: flex;
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
  const filterFunc = () => {
    if (
      commerceMatch ||
      detailMatch ||
      filterCategoryMatch ||
      loginMatch ||
      signUpMatch ||
      eventMatch ||
      cartMatch
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
            <li>OWNER: JAEGI JUNG</li>
            <li>TEL: 02 - 1234- 5678</li>
            <li>ADDRESS: Gangnam-gu, Seoul</li>
            <li>COPYRIGHT © ZIP. ALL RIGHTS RESERVED.</li>
          </AddressList>
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
