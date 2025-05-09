import React from 'react'
import { button, style } from 'motion/react-client'
import styled from 'styled-components'
import { color } from 'motion'


const Wrapper = styled.div`
width: 100%;
/* height: 600px; */
padding-top: 60px;
/* border: 1px solid var(--dark-color); */
/* padding-bottom: 50px; */
`

const ButtonContents = styled.div`
display: flex;
height: 80px;
`

const ScrollButton = styled.button`
/* display: inline-block; */
width: 640px;
  border: 1px solid var(--dark-color);
  background: var(--light-color);
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background: var(--dark-color);
    color: var(--light-color);
    transition: 0.3s;
  }
`

const TattooContents = styled.div`
/* position: absolute; */
width: 100%;
/* height: 2500px; */
display: flex;
flex-direction: column;
gap: 64px;
padding:  206px 210px 300px 210px ;
`

const TattooTittle = styled.div`
width: 100%;
height: 42px;
  font-size: 5rem;
`
const TattooVideos = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
/* border: 1px solid #f00; */
`

const VideoTop = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: var(--dark-color);
  gap: 10px;
`

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--light-color);
  &:first-child{
    margin-left: 30px;
    background: var(--event-color);
  }
`

const ContentTitle = styled.div`
font-size: 2rem;
font-weight: 700;
color: #ACE0FF;
margin-bottom: 20px;
`


const InfluencerName = styled.div`
font-size: 6rem;
font-weight: bold;
margin-bottom: 40px;
`

const QuoteSection = styled.div`
width: 90%;
font-size: 1.8rem;
line-height: 3rem;
margin-bottom: 30px;
`


const VideosContent = styled.div`
/* position: relative; */
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0 0 20px 20px;
border: 1px solid var(--dark-color);
margin-bottom: 60px;
/* padding: 58px 95px ; */
`
const AllContent = styled.div`
display: flex;
align-items: center;
position: relative;
gap: 40px;
width: 100%;
height: 100%;
padding: 80px;
`

const RightContent = styled.div`
/* position: absolute; */
width: 52%;
height: 443px;
cursor: pointer;
/* border: 1px solid #f00; */
video {
    transition: all 1s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const LeftContent = styled.div`
position: relative;
width: 48%;
height: 100%;
/* border: 1px solid #0f0; */
`

const HashtagWrap = styled.div`
display: flex;
color: var(--light-color);
gap: 10px;
margin-bottom: 40px;
span{
  padding: 14px 20px;
  border-radius: 50px 50px;
background: var(--dark-color);
}
  `

const Content = styled.div`
/* position: absolute; */
  width: 100%;
  height: 100%;
  /* border: 1px solid var(--dark-color); */
`

const ClickButton = styled.div`
width: 64%;
border-radius: 50px;
display: flex;
justify-content: center;
width: 400px;
padding: 16px 0;
/* background: var(--event-color); */
border: 2px solid var(--dark-color);
color: var(--dark-color);
font-size: 2rem;
font-weight: 600;
gap: 10px;
cursor: pointer;
transition: all 0.5s;
span{
  transition: all 0.3s;

}
&:hover{
  background: var(--event-color);
  border: 2px solid var(--event-color);
  span{
    transform: translateX(10px);
    
  }
}
`




const tattooData = [
  {
    title: 'TATTOOED THOUGHTS:',
    name: '박재범 JAY PARK',
    quote: '“그의 타투는 자유에 대한 선언이었다.” 몸에 새기는 건, 지워지지 않는 말. 그는 아무 말도 하지 않아도, 이미 수많은 문장을 새겼다. 타투는 그에게 반항이 아니라 해방이었고, 스타일이 아니라 생존의 증명이었다. 박재범의 몸은, 그가 살아온 기록이다."',
    tags: ["GQ KOREA", "박재범", "JAY PARK", "사자", "치카노"],
    button: '지금, 그의 가방 속까지 들여다보고 싶다면',
    // videoSrc: '/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4',
  },
  {
    title: 'TATTOOED THOUGHTS:',
    name: '모니카 MONIKA',
    quote: '“그녀의 타투는 말보다 강했다.”  단 한 번의 동작,  단 한 줄의 문장. 모니카는 침묵으로 말하고,  몸 위에 의지를 새긴다. 그녀의 타투는 장식이 아닌 다짐이다. 모든 움직임엔 이유가 있고, 그녀의 타투엔 철학이 있다.',
    tags: ["GQ KOREA", "모니카", "MONIKA", "TATTOO", "사슴"],
    button: '지금, 그의 가방 속까지 들여다보고 싶다면',
    // videoSrc: '/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4',
  },
  {
    title: 'TATTOOED THOUGHTS:',
    name: '박준원 PH-1',
    quote: '“그의 타투는 흐름 위에 새긴 방향이었다.” 겉으로는 가볍고 편안하지만, 그는 언제나 선을 알고 있었다. PH-1의 타투는 멋이 아니라 스스로를 잃지 않기 위한 표식. 흔들리지 않기 위해 그는 몸 위에 흐름을 새겼다.',
    tags: ["GQ KOREA", "ph-1", "박준원", "낙서타투", "태극기"],
    button: '지금, 그의 가방 속까지 들여다보고 싶다면',
    // videoSrc: '/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4',
  },
]

const Introduce = () => {
  const HashtagList = ({ tags }) => {
    console.log(tags)
    return (
      <HashtagWrap >
        {tags.map((tag, index) => (
          <span
            key={index} className='hashTags'
          >
            #{tag}
          </span>
        ))}
      </HashtagWrap>
    );
  };// 공부할 것
  return (
    <>
    <Wrapper/>
    <ButtonContents>
          <ScrollButton>INTROUDUCE TATTOO</ScrollButton>
          <ScrollButton>QUIZ</ScrollButton>
          <ScrollButton>IN MY BAG</ScrollButton>
    </ButtonContents>
        <TattooContents>
        <TattooTittle>INTRODUCE TATTOO</TattooTittle>
    <TattooVideos>
    {tattooData.map((item, index) => (
            <div key={index}>
      <VideoTop>
        <Circle/>
        <Circle/>
        <Circle/>
      </VideoTop>
      <VideosContent>
        <AllContent>
          <LeftContent>
        <Content >
          <ContentTitle >{item.title}</ContentTitle>
          <InfluencerName>{item.name}</InfluencerName>
          <QuoteSection>{item.quote}</QuoteSection>
          <HashtagList tags={item.tags} /> 
          <ClickButton >{item.button } <span className='fas fa-angle-right'></span></ClickButton >
        </Content>
          </LeftContent>
          <RightContent>
          <video src="/public/videos/일반비_플러스 메인 상단_V2_저용량 버전.mp4" autoPlay loop ></video>
          {/* <video src={item.videoSrc} autoPlay loop muted /> */}
          </RightContent>
        </AllContent>
      </VideosContent>
      </div>
))}
    </TattooVideos>
        </TattooContents>
        </>
  );
};

export default Introduce