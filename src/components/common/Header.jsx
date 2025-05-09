import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link, useMatch, useNavigate } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  padding: 0 3%;
  position: fixed;
  mix-blend-mode: difference;
  transform: translateY(0px);
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  color: #fff;
  /* backdrop-filter: blur(16px) saturate(180%); */

  &.active {
    transform: translateY(-100px);
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const HeaderLogo = styled.h1`
  cursor: pointer;
  display: block;
  z-index: 10;
  position: relative;
`;

const HeaderLogoImg = styled.img`
  width: 90px;
`;

const HeaderSelect = styled.div`
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 300;
    font-family: "EHNormalTrial";
    font-size: 1.2rem;
    a {
      p {
        &.selectActive {
          color: #5a5959;
        }
        color: #fff;
      }
    }
  }
`;

const HeaderRight = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 300;
  font-family: "EHNormalTrial";
  font-size: 1.2rem;
  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

const HeaderGnb = styled.ul`
  display: flex;
  gap: 16px;
  li {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`;

const HeaderEtc = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  li {
    display: flex;
    align-items: center;
    cursor: pointer;
    /* svg {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      position: absolute;
      width: 16px;
      path {
        width: 100%;
        fill: rgb(255, 255, 255);
      }
    } */
  }
  @media screen and (max-width: 1024px) {
    gap: 20px;
    li {
      span {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        position: absolute;
      }
      img {
        object-fit: cover;
        width: 14px;
        height: 14px;
      }
    }
  }
`;

const HeaderBars = styled.span`
  @media screen and (max-width: 1024px) {
    opacity: 0;
  }
`;

const MenuBars = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  @media screen and (max-width: 1024px) {
    opacity: 1;
    visibility: visible;
    pointer-events: default;
    position: relative;
    height: 16px;
    width: 24px;
    cursor: pointer;
    p {
      position: absolute;
      width: 100%;
      height: 3px;
      background: var(--light-color);
      border-radius: 20px;
      &:first-child {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
`;
const Header = () => {
  const headerRef = useRef();
  const navigate = useNavigate();
  let prevScroll = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    if (scrollTop > prevScroll) {
      headerRef.current.classList.add("active");
    } else {
      headerRef.current.classList.remove("active");
    }
    prevScroll = scrollTop;
  });
  const commerceMatch = useMatch("/");
  const detailMatch = useMatch("/detail");
  const filterCategoryMatch = useMatch("/filtercategory/:category");
  // const handleMenuBars = () => {
  //   console.log("hi");
  // };

  const handleCategory = (e) => {
    const category = e.target.innerText;
    // console.log(category);
    navigate(`/filtercategory/${category}`);
  };
  return (
    <Container ref={headerRef}>
      <HeaderLeft>
        <Link to="/">
          <HeaderLogoImg src="./img/Logo.png" />
        </Link>
        <HeaderSelect>
          {commerceMatch || detailMatch || filterCategoryMatch ? (
            <div>
              <p>COMMERCE</p>
              <span>|</span>
              <Link to="/ott">
                <p className="selectActive">OTT</p>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/">
                <p className="selectActive">COMMERCE</p>
              </Link>
              <span>|</span>
              <p>OTT</p>
            </div>
          )}
        </HeaderSelect>
      </HeaderLeft>
      <HeaderRight>
        {commerceMatch || detailMatch || filterCategoryMatch ? (
          <HeaderGnb>
            <li onClick={handleCategory}>Style</li>
            <li onClick={handleCategory}>Beauty</li>
            <li onClick={handleCategory}>Artist</li>
            <li>Promotion</li>
          </HeaderGnb>
        ) : (
          <HeaderGnb>
            <li>haha</li>
          </HeaderGnb>
        )}
        <HeaderBars>|</HeaderBars>
        <HeaderEtc>
          <li>
            <span>Cart</span>
            {/* <img src="./img/cartIcon.svg" alt="" /> */}
          </li>
          <li>
            <span>Search</span>
          </li>
          <li>
            <span>Login</span>
          </li>
        </HeaderEtc>
        <MenuBars>
          <p></p>
          <p></p>
          <p></p>
        </MenuBars>
      </HeaderRight>
    </Container>
  );
};

export default Header;
