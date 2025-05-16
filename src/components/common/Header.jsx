import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import SearchComp from "./SearchComp";
import { Link, useMatch, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollTop } from "./Footer";

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
  /* backdrop-filter: blur(16px) saturate(180%); */
  z-index: 2;
  &.active {
    transform: translateY(-100px);
  }
  &.filterUnActive {
    mix-blend-mode: normal;
    /* filter: invert(1); */
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
  transition: all 0.3s;
  a {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 120px !important;
  }
  @media screen and (max-width: 767px) {
    width: 100px !important;
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
      border-bottom: 1px solid #fff;
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
    img {
      filter: invert(1);
      position: absolute;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      width: 18px;
      height: 18px;
    }
    svg {
      position: absolute;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      width: 20px;
      height: 20px;
    }
  }
  @media screen and (max-width: 1024px) {
    gap: 20px;
    li {
      span {
        display: flex;
        align-items: center;
        span {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          position: absolute;
        }
      }
      img {
        display: block;
        position: relative;
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
      }
      svg {
        display: block;
        position: relative;
        opacity: 1;
        visibility: visible;
        pointer-events: visible;
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
      height: 2px;
      background: var(--light-color);
      border-radius: 20px;
      transition: all 0.3s;
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
    &.active {
      p {
        &:nth-child(1) {
          transform: rotate(45deg);
          top: 50%;
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          top: 50%;
        }
      }
    }
  }
`;
const Header = () => {
  const [filterCheck, setFilterCheck] = useState(false);
  const [menuClick, setMenuClick] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [toggleClick, setToggleClick] = useState(false);
  const headerRef = useRef();
  const navigate = useNavigate();
  const commerceMatch = useMatch("/");
  const detailMatch = useMatch("/detail");
  const loginMatch = useMatch("/login");
  const signUpMatch = useMatch("/signup");
  const eventMatch = useMatch("/event");
  const cartMatch = useMatch("/cart");
  const starMatch = useMatch("/star");
  const filterCategoryMatch = useMatch("/filtercategory/:categoryName");
  const searchMatch = useMatch("/search/:name");
  const mypageMatch = useMatch("/mypage");
  const mypageMatch02 = useMatch("/mypage/:name");
  const handleCategory = (e) => {
    const category = e.target.innerText;
    navigate(`/filtercategory/${category}`.toLowerCase());
    setMenuClick(false);
    setToggleClick(false);
    scrollTop();
  };
  const toEvent = () => {
    navigate("./event");
    setMenuClick(false);
    setToggleClick(false);
    scrollTop();
  };
  const toStar = () => {
    navigate("./star");
    setMenuClick(false);
    setToggleClick(false);
    scrollTop();
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
      mypageMatch02 ||
      starMatch
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
    starMatch,
  ]);

  gsap.registerPlugin(ScrollTrigger);

  const headerLogo = () => {
    if (window.innerWidth > 1024) {
      gsap.to(".logo", {
        width: "120px",
        scrollTrigger: {
          trigger: ".logo",
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      });
    }
  };
  headerLogo();

  const handleMenuClick = () => {
    setMenuClick((prev) => !prev);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      setMenuClick(false);
      setToggleClick(false);
    }
  });
  const searchToggle = () => {
    setToggleClick(false);
    setMenuClick(false);
    setSearchClick(true);
  };
  const ToggleMenu = () => {
    setToggleClick((prev) => !prev);
  };
  return (
    <Container>
      <Wrapper ref={headerRef} className={menuClick ? "filterUnActive" : ""}>
        <HeaderLeft>
          <Logo className="logo">
            <Link
              to="/"
              onClick={() => {
                setMenuClick(false);
                setToggleClick(false);
                scrollTop();
              }}
            >
              <HeaderLogoImg src="/img/Logo.png" alt="logo" />
            </Link>
          </Logo>
          <HeaderSelect>
            {filterCheck ? (
              <div>
                <p>COMMERCE</p>
                <span>|</span>
                <Link to="/ott" onClick={scrollTop}>
                  <p className="selectActive">OTT</p>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/" onClick={scrollTop}>
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
              <li onClick={toStar} data-li="Star">
                <span>Star</span>
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
                <Link
                  to="/cart"
                  onClick={() => {
                    setMenuClick(false);
                    setToggleClick(false);
                    scrollTop();
                  }}
                >
                  <span>Cart</span>
                  <svg
                    fill="none"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </Link>
              </HeaderEtcText>
            </HeaderEtcLi>
            <HeaderEtcLi>
              <HeaderEtcText onClick={searchToggle}>
                <span>Search</span>
                <img
                  src="https://ecimg.cafe24img.com/pg326b45779995089/oiad/web/oiad_renewal/img/oiad-icon-search-mo.svg"
                  alt="search"
                />
              </HeaderEtcText>
            </HeaderEtcLi>
            <HeaderEtcLi>
              <HeaderEtcText>
                <Link
                  to="/login"
                  onClick={() => {
                    setMenuClick(false);
                    setToggleClick(false);
                    scrollTop();
                  }}
                >
                  <span>Login</span>
                  <img
                    src="https://ecimg.cafe24img.com/pg326b45779995089/oiad/web/oiad_renewal/img/oiad_mypage.svg"
                    alt="login"
                  />
                </Link>
              </HeaderEtcText>
            </HeaderEtcLi>
          </HeaderEtc>
          <MenuBars
            onClick={() => {
              handleMenuClick();
              ToggleMenu();
            }}
            className={toggleClick ? "active" : ""}
          >
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
