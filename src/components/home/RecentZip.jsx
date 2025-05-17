import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";
import { scrollTop } from "../common/Footer";
import { useLocation } from "react-router-dom";

/* --- styled-components --- */
const Container = styled.div`
  width: 100%;
  background: var(--light-color);
  color: var(--dark-color);
  margin-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 100px 0;
  @media screen and (max-width: 1024px) {
    margin: 80px 0;
  }
  @media screen and (max-width: 767px) {
    margin: 50px 0;
  }
`;

const Item = styled.section`
  width: 100%;
  /* height: 100vh; */
  height: 80%;
  /* height: 80vh; */
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  position: relative;
  /* padding: 10px; */
  background: #fff;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 3% 0px;
`;

const Title = styled.h2`
  color: var(--dark-color);
  font-size: 10rem;
  letter-spacing: -4px;
  font-family: "EHNormalTrial";

  @media screen and (max-width: 1024px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: -2px;
  }
`;

const Button = styled.button`
  font-size: 2rem;
  padding: 22px 50px;
  color: var(--light-color);
  background: var(--dark-color);
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-family: "EHNormalTrial";

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
    padding: 20px 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
    padding: 16px 24px;
  }
`;

const AccordionCard = styled.div`
  width: 100%;
  padding: 0 10%;
  margin: 50px 0;
  @media screen and (max-width: 1024px) {
    padding: 0% 14%;
    margin: 0;
    /* margin: 50px 0; */
  }
`;
const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 100px;
  span {
    font-family: "EHNormalTrial";
  }

  @media screen and (max-width: 1024px) {
    font-size: 5rem;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 4rem;
    margin-bottom: 30px;
  }
`;
const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const LeftInfo = styled.aside`
  width: 50%;

  h4 {
    font-size: 3.2rem;
    font-weight: 600;
    line-height: 4.2rem;
  }

  p {
    margin: 20px 0 30px;
    font-size: 1.8rem;
    font-weight: 300;
    line-height: 2.6rem;
  }

  button {
    font-family: "EHNormalTrial";
    font-weight: 500;
    background: #000;
    color: #fff;
    padding: 18px 44px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;

    h4 {
      font-size: 2.6rem;
      line-height: 3.4rem;
    }

    p {
      margin: 20px 0 20px;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    button {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    h4 {
      font-size: 2.2rem;
      line-height: 3rem;
    }
    p {
      margin: 10px 0 10px;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    button {
      display: none;
    }
  }
`;

const RightInfo = styled.div`
  position: relative;
  width: 60%;
  padding-top: 26.625%;
  cursor: pointer;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-top: 50.625%;
  }
`;

gsap.registerPlugin(ScrollTrigger);

function RecentZip() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location.pathname]);

  const navigate = useNavigate();

  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".panel").forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        markers: true,
      });

      const inner = panel.querySelector(".card-inner");
      if (inner) {
        gsap.fromTo(
          inner,
          { y: 100 },
          {
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top center",
              end: "bottom center",
              scrub: true,
            },
          }
        );
      }
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <Container>
      <MainTitle>
        <Title>Artist Zip</Title>
        <Button
          onClick={() => {
            scrollTop();
            navigate("/filtercategory/artist");
          }}
        >
          More Zip
        </Button>
      </MainTitle>
      <Wrapper>
        <Item className="panel">
          <AccordionCard className="card-inner">
            <CardTitle>
              <span>01</span>
              <h3>닝닝</h3>
            </CardTitle>
            <CardInfo>
              <LeftInfo>
                <h4>
                  에스파 닝닝 인마이백
                  <br />
                  제대로 모시겠습니다.
                </h4>
                <p>
                  닝닝이 자신의 애장품을 보부상 백에 가득 담아왔습니다. 작사 노트부터 폴라로이드 필름 앨범, 유치원
                  시절부터 모아온 편지들, 팬이 만들어 준 파우치, 최애 간식까지!
                </p>
                <button>view zip</button>
              </LeftInfo>
              <RightInfo>
                <video src="/videos/recent_1.mp4" muted autoPlay loop></video>
              </RightInfo>
            </CardInfo>
          </AccordionCard>
        </Item>
        <Item className="panel">
          <AccordionCard className="card-inner">
            <CardTitle>
              <span>02</span>
              <h3>필릭스</h3>
            </CardTitle>
            <CardInfo>
              <LeftInfo>
                <h4>
                  스트레이키즈 필릭스가
                  <br />
                  n번째 구매한 아이템은?
                </h4>
                <p>
                  스트레이 키즈 필릭스가 화이트 셔츠에 뿌린다는 향수부터 가장 아끼는 애착 인형, 당 충전용 젤리까지! 보고
                  있으면 나도 모르게 웃게 되는 필릭스의 인 마이 백을 만나보세요
                </p>
                <button>view zip</button>
              </LeftInfo>
              <RightInfo>
                <video src="/videos/recent_2.mp4" muted autoPlay loop></video>
              </RightInfo>
            </CardInfo>
          </AccordionCard>
        </Item>
        <Item className="panel">
          <AccordionCard className="card-inner">
            <CardTitle>
              <span>03</span>
              <h3>고현정</h3>
            </CardTitle>
            <CardInfo>
              <LeftInfo>
                <h4>
                  품절 대란, 고현정이
                  <br />
                  가방 탈탈 털어 소개한 일상템
                </h4>
                <p>
                  업로드 일주일 만에 유튜브 조회 수는 100만을 앞뒀고, 소개한 팩트는 이미 품절되었다는 소식을 전해왔죠!
                  흔치 않은 기회, 요즘 고현정이 주로 쓰는 찐 일상템, 구경해볼까요?
                </p>
                <button>view zip</button>
              </LeftInfo>
              <RightInfo>
                <video src="/videos/recent_3.mp4" muted autoPlay loop></video>
              </RightInfo>
            </CardInfo>
          </AccordionCard>
        </Item>
      </Wrapper>
    </Container>
  );
}

export default RecentZip;
