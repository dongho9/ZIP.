import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  background: var(--dark-color);
  /* margin-top: 140%; */
`

const QuizTitle = styled.div`
color: var(--light-color);
font-size: 8rem;
font-weight: bold;
padding: 176px  238px 152px;
`

const BlueBox = styled.div`
width: 240px;
height: 1326px;
background: #ACE0FF;
border-radius: 50px 0 0 50px;
display: flex;
justify-content: center;
/* align-items: center; */
`

const Question = styled.div`
font-size: 8rem;
font-weight: bold;
padding-top: 126px;
color: var(--dark-color);
`

const WhiteBox = styled.div`
width: 1155px;
height: 1326px;
background: #fff;
border-radius: 0 50px 50px 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 100px;
`

const AllBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* border: 1px solid #f00; */
  padding-bottom: 100px;
`

const Title = styled.div`
position: absolute;
font-weight: bold;
font-size: 6rem;
transform: translateY(-830%);
`

const EachName = styled.div`
font-size: 3.2rem;
line-height: 2;
`

const Picture = styled.div`
width: 320px;
height: 320px;
background: #f00;
border-radius: 10%;
`

const FirstBundle = styled.div`
  display: flex;
  gap: 200px;
  /* border: 1px solid #000; */
`

const SecondBundle = styled.div`
  display: flex;
  gap: 200px;
  /* border: 1px solid #000; */
`

const DetailBundle = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
  /* border: 1px solid #000; */
`

const ThirdBundle = styled.div`
display: flex;
flex-direction: column;
gap: 100px;
margin-top: 12%;
`

const EventButton = styled.div`
width: 12%;
height: 60px;
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