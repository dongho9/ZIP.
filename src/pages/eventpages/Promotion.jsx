import ScrollButton from '../../components/event/ScrollButton'
import Banner from '../../components/event/Banner'
import styled from 'styled-components'

const Container = styled.div`
width: 100%;
height: 100%;
background: crimson;
`
const Leftcontents = styled.div``

const Maintitle = styled.div``

const Title = styled.div``

const Subtitle = styled.div``

const Bundles = styled.div``

const Bundle = styled.div``

const Picture = styled.div``

const RightButton = styled.div``

const Namepricebundle = styled.div``

const Name = styled.div``

const Price = styled.div``

const Detailbutton = styled.div``

const Rightcontents = styled.div``

const Toprightcontent = styled.div``

const Bottomrightcontent = styled.div``

const Profile = styled.div``

const CirclePicture = styled.div``

const Influencer = styled.div``

const Instargram = styled.div``

const ProfileDetail = styled.div``

const Profileintroduce = styled.div``

const Promotion = () => {
  return (
  <>
  <Banner/>
  <ScrollButton/>
      <Container>
        <Leftcontents>
          <Maintitle>
            <Title></Title>
            <Subtitle></Subtitle>
          </Maintitle>
          <Bundles>
            <Bundle>
              <Picture></Picture>
              <RightButton>
                <Namepricebundle>
                  <Name></Name>
                  <Price></Price>
                </Namepricebundle>
                <Detailbutton></Detailbutton>
              </RightButton>
            </Bundle>
            <Bundle>
              <Picture></Picture>
              <RightButton>
                <Namepricebundle>
                  <Name></Name>
                  <Price></Price>
                </Namepricebundle>
                <Detailbutton></Detailbutton>
              </RightButton>
            </Bundle>
            <Bundle>
              <Picture></Picture>
              <RightButton>
                <Namepricebundle>
                  <Name></Name>
                  <Price></Price>
                </Namepricebundle>
                <Detailbutton></Detailbutton>
              </RightButton>
            </Bundle>
            <Bundle>
              <Picture></Picture>
              <RightButton>
                <Namepricebundle>
                  <Name></Name>
                  <Price></Price>
                </Namepricebundle>
                <Detailbutton></Detailbutton>
              </RightButton>
            </Bundle>
          </Bundles>
        </Leftcontents>
        <Rightcontents>
          <Toprightcontent></Toprightcontent>
          <Bottomrightcontent>
            <Profile>
              <CirclePicture></CirclePicture>
              <Influencer></Influencer>
              <Instargram></Instargram>
            </Profile>
            <ProfileDetail>
            <Profileintroduce></Profileintroduce>
            </ProfileDetail>
          </Bottomrightcontent>
        </Rightcontents>
      </Container>
      </>
  )
}

export default Promotion;