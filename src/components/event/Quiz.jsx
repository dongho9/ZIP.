import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  background: var(--dark-color);
  padding-bottom: 100px
`

const QuizTitle = styled.div`
color: var(--light-color);
font-size: 8rem;
font-weight: bold;
padding: 176px  50px 152px;
@media screen and (max-width: 1024px) {
    font-size: 6rem;
    padding: 100px 50px;
}
@media screen and (max-width: 402px) {
  font-size: 2.5rem;
  padding: 100px 30px;
  }
`

const BlueBox = styled.div`
/* width: 240px; */
height: 1326px;
background: #ACE0FF;
border-radius: 50px 0 0 50px;
display: flex;
justify-content: center;
/* align-items: center; */
padding: 0 60px;
@media screen and (max-width: 1024px) {
padding: 0;
height: auto;
}
`

const Question = styled.div`
font-size: 8rem;
font-weight: bold;
padding-top: 126px;
color: var(--dark-color);

@media screen and (max-width: 1024px) {
  font-size: 4.2rem;
  padding: 80px 36px;
}
@media screen and (max-width: 402px) {
  font-size: 2rem;
  padding: 36px 10px;
}


`

const WhiteBox = styled.div`
background: #fff;
border-radius: 0 50px 50px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;
@media screen and (max-width: 1024px) {
  width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 70px;
}
@media screen and (max-width: 402px) {
  gap: 20px;
  padding-bottom : 40px;
}
`

const AllBox = styled.div`
/* box-sizing: border-box; */
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    padding: 0 50px 100px 50px;
  }
  @media screen and (max-width: 402px) {
    padding: 0 20px 100px;
  }
`

const Title = styled.div`
/* position: absolute; */
font-weight: bold;
font-size: 6rem;
padding: 0 100px;
@media screen and (max-width: 1024px) {
      font-weight: bold;
    font-size: 4.2rem;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding: 80px 0  0;
}
@media screen and (max-width: 402px) {
  font-weight: bold;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        padding: 36px 0 0;
}
`


const EachName = styled.div`
font-size: 3.2rem;
line-height: 2;
@media screen and (max-width: 1024px) {
  font-size: 2.8rem;
line-height: 1;
}
@media screen and (max-width: 402px) {
  font-size: 1.5rem;
  line-height: 0.8;
}
`

const Picture = styled.div`
width: 320px;
height: 320px;
background: #f00;
border-radius: 10%;
@media screen and (max-width: 1024px) {
  width: 250px;
    height: 250px;
}
@media screen and (max-width: 402px) {
  width: 100px;
  height: 100px;
}
`

const FirstBundle = styled.div`
  display: flex;
  gap: 200px;
  /* border: 1px solid #000; */
  @media screen and (max-width: 1024px) {
    gap: 150px;
  }
  @media screen and (max-width: 402px) {
    gap: 20px;
  }
`

const SecondBundle = styled.div`
  display: flex;
  gap: 200px;
  /* border: 1px solid #000; */
  @media screen and (max-width: 1024px) {
    gap: 150px;
  }
  @media screen and (max-width: 402px) {
    gap: 20px;
  }
`

const DetailBundle = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
  /* border: 1px solid #000; */
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 402px) {
    gap: 10px;
  }
`

const ThirdBundle = styled.div`
display: flex
;
    flex-direction: column;
    gap: 100px;
    /* margin-top: 7%; */
    @media screen and (max-width: 1024px) {
    }
    @media screen and (max-width: 402px) {
      gap: 30px;
    }

`

const EventButton = styled.div`
width: fit-content;
height: 60px;
padding: 30px;
margin: 0 auto ;
  color: var(--dark-color);
  background: var(--border-color);
  border-radius: 50px 50px;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 402px) {
    font-size: 1.3rem;
    height: 50px;
    padding: 20px;
  }
  &:hover{
    color: var(--light-color);
    transition: all 0.3s;
  }
`


const quizData = [
  {
    question:'Q1',
    title:'박재범에게 타투이스트를 소개시켜준 인물은?',
    name1:'A. 더 콰이엇 ',
    name2:'B. 빈지노 ',
    name3:'C. 오왼 오바도즈  ',
    name4:'D. 도끼 ',
    picture1:'/public/img/thumbnail.png',
    picture2:'/public/img/thumbnail.png',
    picture3:'/public/img/thumbnail.png',
    picture4:'/public/img/thumbnail.png',
  },
  {
    question:'Q2',
    title:'영상에서 모니카가 마지막타투를 한 부위는?',
    name1:'A. 손 ',
    name2:'B. 어깨 ',
    name3:'C. 팔 ',
    name4:'D. 팔안쪽 ',
    picture1:'/public/img/thumbnail.png',
    picture2:'/public/img/thumbnail.png',
    picture3:'/public/img/thumbnail.png',
    picture4:'/public/img/thumbnail.png',
  },
  {
    question:'Q3',
    title:'영상에서 PH-1이 새긴 명품 브랜드 로고는?',
    name1:'A. 루이비통',
    name2:'B. 샤넬 ',
    name3:'C. 구찌 ',
    name4:'D. 에르메스 ',
    picture1:'/public/img/thumbnail.png',
    picture2:'/public/img/thumbnail.png',
    picture3:'/public/img/thumbnail.png',
    picture4:'/public/img/thumbnail.png',
  }
]

const Quiz = () => {
  return (
    <Container>
      <QuizTitle>
      WHAT'S IN THEIR BAG?<br/>
      퀴즈 챌린지
      </QuizTitle>
      {quizData.map((item, index) => (
        <React.Fragment key={index}>
        <AllBox>
          <BlueBox>
            <Question>
              {item.question}
            </Question>
          </BlueBox>
          <WhiteBox>
          <Title>{item.title}</Title>
              <ThirdBundle>
                <FirstBundle>
                  <DetailBundle>
                    <EachName>{item.name1}</EachName>
                    <Picture>{item.picture1}</Picture> 
                  </DetailBundle>
                  <DetailBundle>
                    <EachName>{item.name2}</EachName>
                    <Picture>{item.picture2}</Picture> 
                  </DetailBundle>
                </FirstBundle>
                <SecondBundle>
                  <DetailBundle>
                    <EachName>{item.name3}</EachName>
                    <Picture>{item.picture3}</Picture> 
                  </DetailBundle>
                  <DetailBundle>
                    <EachName>{item.name4}</EachName>
                    <Picture>{item.picture4}</Picture> 
                  </DetailBundle>
                </SecondBundle>
              </ThirdBundle>
          </WhiteBox>
        </AllBox>
      </React.Fragment>
          ))}
          <EventButton>
            이벤트 참여하기
          </EventButton>
    </Container>
  )
}

export default Quiz
