import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SearchComp from "./SearchComp";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Container = styled.header``;
const Wrapper = styled.div`
  height: 60px;
  padding: 0 3%;
  position: fixed;
  transform: translateY(0px);
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  mix-blend-mode: difference;
  background: transparent;
  z-index: 2;
  &.active {
    transform: translateY(-100px);
  }
  &.filterUnActive {
    mix-blend-mode: normal;
  }
  @media screen and (max-width: 1024px) {
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transform-origin: top left;
  padding-top: 24px;
  width: 160px;
  z-index: 3;
  a {
    width: 100%;
  }
`;
const HeaderLogoImg = styled.img`
  width: 100%;
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
  align-items: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  &::after {
    transition: all 0.5s ease-in-out;
  }
  li {
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
    &::after {
      transition: all 0.3s;
      content: attr(data-li);
      position: absolute;
      left: 0;
      top: 0;
      transform: translateY(140%);
    }
    &:hover {
      span {
        transform: translateY(-100%);
      }
      &::after {
        transform: translateY(0%);
      }
    }
  }
  span {
    width: 100%;
    transition: all 0.3s;
    display: block;
    height: 100%;
    position: relative;
    transform: translateY(0);
  }

  @media screen and (max-width: 1024px) {
    display: none;
    position: fixed;
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    display: block;
    padding: 160px 3%;
    li {
      font-size: 2.4rem;
      margin-bottom: 30px;
      padding-bottom: 30px;
      z-index: 10;
      &::after {
        display: none;
      }
      &:hover {
        span {
          transform: none;
        }
      }
    }
  }
  &.active {
    top: 0;
    left: 0;
    opacity: 1;
    visibility: visible;
    pointer-events: visible;
    &::after {
      content: "";
      position: absolute;
      height: 100vh;
      width: 100%;
      background: var(--dark-color);
      top: 0;
      left: 0;
      transition: all 0.5s ease-in-out;
    }
    li {
      width: 100%;
      height: auto;
      color: var(--light-color);
    }
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
const HeaderEtcLi = styled.li``;
const HeaderEtcText = styled.span``;
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
  const [filterCheck, setFilterCheck] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const headerRef = useRef();
  const navigate = useNavigate();
  // let prevScroll = 0;

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
  const handleCategory = (e) => {
    const category = e.target.innerText;
    navigate(`/filtercategory/${category}`.toLowerCase());
    setMenuClick(false);
  };
  const toEvent = () => {
    navigate("./event");
    setMenuClick(false);
  };
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
    searchMatch,
    mypageMatch,
    mypageMatch02,
  ]);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".logo", {
      width: "120px",
      scrollTrigger: {
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });
  }, []);
  // window.addEventListener("scroll", () => {
  //   const scrollTop = window.scrollY;
  //   if (scrollTop > prevScroll) {
  //     headerRef.current.classList.add("active");
  //   } else {
  //     headerRef.current.classList.remove("active");
  //   }
  //   prevScroll = scrollTop;
  // });

  const handleMenuClick = () => {
    setMenuClick((prev) => !prev);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setMenuClick(false);
    }
  });
  const searchToggle = () => {
    setMenuClick(false);
    setSearchClick(true);
  };
  return (
    <Container>
      <Wrapper
        ref={headerRef}
        className={menuClick || searchClick ? "filterUnActive" : ""}
      >
        <HeaderLeft>
          <Logo className="logo">
            <Link to="/">
              <HeaderLogoImg src="/img/Logo.png" alt="logo" />
            </Link>
          </Logo>
          <HeaderSelect>
            {filterCheck ? (
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
          {filterCheck ? (
            <HeaderGnb className={menuClick ? "active" : ""}>
              <li onClick={handleCategory} data-li="Style">
                <span>Style</span>
              </li>
              <li onClick={handleCategory} data-li="Beauty">
                <span>Beauty</span>
              </li>
              <li onClick={handleCategory} data-li="Artist">
                <span>Artist</span>
              </li>
              <li onClick={toEvent} data-li="Promotion">
                <span>Promotion</span>
              </li>
            </HeaderGnb>
          ) : (
            <HeaderGnb>
              <li>haha</li>
            </HeaderGnb>
          )}
          <HeaderBars>|</HeaderBars>
          <HeaderEtc>
            <HeaderEtcLi>
              <HeaderEtcText>
                <Link to="/cart">Cart</Link>
              </HeaderEtcText>
              {/* <img src="./img/cartIcon.svg" alt="" /> */}
            </HeaderEtcLi>
            <HeaderEtcLi>
              <HeaderEtcText onClick={searchToggle}>Search</HeaderEtcText>
            </HeaderEtcLi>
            <HeaderEtcLi>
              <HeaderEtcText>
                <Link to="/login">Login</Link>
              </HeaderEtcText>
            </HeaderEtcLi>
          </HeaderEtc>
          <MenuBars onClick={handleMenuClick}>
            <p></p>
            <p></p>
            <p></p>
          </MenuBars>
        </HeaderRight>
      </Wrapper>
      <SearchComp searchClick={searchClick} setSearchClick={setSearchClick} />
    </Container>
  );
};

export default Header;
