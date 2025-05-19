import ScrollButton from '../../components/event/ScrollButton'
import styled from 'styled-components'
import InfluencerBanner from '../../components/event/InfluencerBanner'

// Main layout containers
const PageWrapper = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BlurBackground = styled.div`
  width: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 80px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 0;
  }
`


const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
`

const LeftContent = styled.div`
  width: 60%;
  padding: 40px;
  display: flex;
  flex-direction: column;
`

const RightContent = styled.div`
  width: 40%;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Header = styled.div`
  margin-bottom: 30px;
`

const SmallTitle = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin: 0;
`

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`

const ProductImage = styled.div`
  width: 65px;
  height: 65px;
  margin-right: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const ProductInfo = styled.div`
  flex: 1;
`

const ProductName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const DetailButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #e8e8e8;
  }
`

const ProfileSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  padding: 20px;
`

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`

const ProfileSocial = styled.div`
  font-size: 12px;
  color: #888;
`

const ProfileDescription = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  
  a {
    color: #4a90e2;
    text-decoration: none;
  }
`

const CampaignTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

const Footer = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 40px 0;
  
  h3 {
    font-size: 18px;
    font-weight: normal;
    margin-bottom: 20px;
    line-height: 1.5;
  }
  
  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 3px;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`

const Influencer = () => {
  // Images for the product thumbnails
  const productImages = [
    '/imgs/event/',
    '/images/product-eyeshadow.jpg',
    '/images/product-mist.jpg',
    '/images/product-eyeshadow2.jpg'
  ];
  
  // Profile images
  const profileImage = '/images/risabae-profile.jpg';
  
  // Model images
  const modelImage1 = '/images/model-white-headwrap.jpg';
  const modelImage2 = '/images/model-sunglasses.jpg';
  
  // Background blur images (using the same images but could be different)
  const bgImage1 = '/images/bg-blur-1.jpg';
  const bgImage2 = '/images/bg-blur-2.jpg';
  const bgImage3 = '/images/bg-blur-3.jpg';
  
  return (
    <PageWrapper>
      <InfluencerBanner/>
      <ScrollButton/>
      

      
      {/* First Card Section - Model with white headwrap */}
      <BlurBackground bgImage={bgImage1}>
        <CardContainer>
          <LeftContent>
            <Header>
              <SmallTitle>Top Influencer Picks</SmallTitle>
              <Title>이사배 PICK</Title>
            </Header>
            <ProductList>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[0]} alt="Lipstick Set" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>이사배 LIPSTICK SET (PRO3 Colors)</ProductName>
                  <ProductPrice>KRW 15,300</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[1]} alt="Eyeshadow Palette" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>셀렉트 아이섀도우 팔레트 (12 Colors)</ProductName>
                  <ProductPrice>KRW 18,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[2]} alt="Face Mist" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>페이스 앤 보디 미스트</ProductName>
                  <ProductPrice>KRW 8,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[3]} alt="Eyeshadow Palette 2" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>셀렉트 아이섀도우 팔레트 (12 Colors)</ProductName>
                  <ProductPrice>KRW 18,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
            </ProductList>
          </LeftContent>
          <RightContent>
            <img src={modelImage1} alt="Model with white headwrap" />
            <ProfileSection>
              <ProfileHeader>
                <ProfilePicture>
                  <img src={profileImage} alt="RISABAE Profile" />
                </ProfilePicture>
                <ProfileName>RISABAE</ProfileName>
                <ProfileSocial>@risabae_art</ProfileSocial>
              </ProfileHeader>
              <CampaignTitle>FADE OUT, LOOK CLEAR</CampaignTitle>
              <ProfileDescription>
                오랜 연구 끝에 완성한 이사배 X 집닷컴 콜라보레이션 상품을 만나보세요. 
                프로페셔널 메이크업 아티스트로서 선보이는 특별한 제품들과 함께 
                당신만의 스타일을 완성하세요. 
                <a href="#"> @risabae_official</a> 에서 더 많은 정보를 확인하실 수 있습니다.
              </ProfileDescription>
            </ProfileSection>
          </RightContent>
        </CardContainer>
      </BlurBackground>
      
      {/* Second Card Section - Model with sunglasses */}
      <BlurBackground bgImage={bgImage2}>
        <CardContainer>
          <RightContent>
            <img src={modelImage2} alt="Model with sunglasses" />
          </RightContent>
          <LeftContent>
            <Header>
              <SmallTitle>Top Influencer Picks</SmallTitle>
              <Title>정원 PICK</Title>
            </Header>
            <ProductList>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[0]} alt="Lipstick Set" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>샤이닝 브로우 컬러 카라(3 Colors)</ProductName>
                  <ProductPrice>KRW 26,900</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[1]} alt="Eyeshadow Palette" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>미니 브로우 브러쉬</ProductName>
                  <ProductPrice>KRW 3,900</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[2]} alt="Face Mist" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>페이스 앤 보디 미스트</ProductName>
                  <ProductPrice>KRW 8,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
            </ProductList>
            <ProfileHeader style={{ marginTop: '20px' }}>
              <ProfilePicture>
                <img src={profileImage} alt="RISABAE Profile" />
              </ProfilePicture>
              <ProfileName>RISABAE</ProfileName>
              <ProfileSocial>@risabae_art</ProfileSocial>
            </ProfileHeader>
            <CampaignTitle>FADE OUT, LOOK CLEAR</CampaignTitle>
            <ProfileDescription>
              오랜 연구 끝에 완성한 이사배 X 집닷컴 콜라보레이션 상품을 만나보세요. 
              프로페셔널 메이크업 아티스트로서 선보이는 특별한 제품들과 함께 
              당신만의 스타일을 완성하세요. 
              <a href="#"> @risabae_official</a> 에서 더 많은 정보를 확인하실 수 있습니다.
            </ProfileDescription>
          </LeftContent>
        </CardContainer>
      </BlurBackground>
      
      {/* Third Card Section - Repeat of first layout */}
      <BlurBackground bgImage={bgImage3}>
        <CardContainer>
          <LeftContent>
            <Header>
              <SmallTitle>Top Influencer Picks</SmallTitle>
              <Title>이사배 PICK</Title>
            </Header>
            <ProductList>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[0]} alt="Lipstick Set" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>이사배 LIPSTICK SET (PRO3 Colors)</ProductName>
                  <ProductPrice>KRW 15,300</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[1]} alt="Eyeshadow Palette" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>셀렉트 아이섀도우 팔레트 (12 Colors)</ProductName>
                  <ProductPrice>KRW 18,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[2]} alt="Face Mist" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>페이스 앤 보디 미스트</ProductName>
                  <ProductPrice>KRW 8,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
              <ProductItem>
                <ProductImage>
                  <img src={productImages[3]} alt="Eyeshadow Palette 2" />
                </ProductImage>
                <ProductInfo>
                  <ProductName>셀렉트 아이섀도우 팔레트 (12 Colors)</ProductName>
                  <ProductPrice>KRW 18,000</ProductPrice>
                  <DetailButton>상세보기</DetailButton>
                </ProductInfo>
              </ProductItem>
            </ProductList>
          </LeftContent>
          <RightContent>
            <img src={modelImage1} alt="Model with white headwrap" />
            <ProfileSection>
              <ProfileHeader>
                <ProfilePicture>
                  <img src={profileImage} alt="RISABAE Profile" />
                </ProfilePicture>
                <ProfileName>RISABAE</ProfileName>
                <ProfileSocial>@risabae_art</ProfileSocial>
              </ProfileHeader>
              <CampaignTitle>FADE OUT, LOOK CLEAR</CampaignTitle>
              <ProfileDescription>
                오랜 연구 끝에 완성한 이사배 X 집닷컴 콜라보레이션 상품을 만나보세요. 
                프로페셔널 메이크업 아티스트로서 선보이는 특별한 제품들과 함께 
                당신만의 스타일을 완성하세요. 
                <a href="#"> @risabae_official</a> 에서 더 많은 정보를 확인하실 수 있습니다.
              </ProfileDescription>
            </ProfileSection>
          </RightContent>
        </CardContainer>
      </BlurBackground>
      
      {/* Footer CTA Section */}
      <Footer>
        <h3>이제 ZIP에서<br />당신도 인플루언서 상품을 판매해보세요</h3>
        <button>신청 바로가기</button>
      </Footer>
    </PageWrapper>
  )
}

export default Influencer;