import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/NavBar.jsx";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import slide7 from "../assets/slide7.png";
import scrollIcon from "../assets/scrollIcon.svg";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import lastSection from "../assets/lastSection.png";
import lastIcon1 from "../assets/lastIcon1.svg";
import lastIcon2 from "../assets/lastIcon2.svg";
import lastIcon3 from "../assets/lastIcon3.svg";

const OwnerHomePage = () => {
  const navigate = useNavigate();

  // HeroSection 슬라이드 이미지 배열
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]); // currentIndex 의존성 추가

  // 이전/다음 버튼
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const features = [
    {
      img: feature1,
      title: "안정적인 시작",
      subtitle: "주민 투표로 검증된 수요 기반이라 안심할 수 있습니다.",
      desc: "투표로 수요 데이터를 바탕으로 운영 전략을 세울 수 있습니다.",
    },
    {
      img: feature2,
      title: "지속적인 성장",
      subtitle:
        "플랫폼을 통한 홍보와 지역 커뮤니티 연결로 단골을 만들 수 있습니다.",
      desc: "홍보를 따로 고민하지 않아도 플랫폼 자체가 홍보 채널 역할을 합니다.",
    },
    {
      img: feature3,
      title: "확장되는 기회",
      subtitle: "동네가 여행지가 되어 수요가 커질 수 있습니다.",
      desc: "주민과 상인들이 함께 만들어가는 동네는 곧 여행지가 됩니다.",
    },
  ];

  return (
    <>
      <NavBar />
      <Container>
        <HeroSection>
          <BackgroundImage src={slides[currentIndex]} alt="슬라이드 이미지" />
          <Overlay>
            <Title>
              함께 만드는 <Highlight>동네 상권,</Highlight>
              <br />
              지금 <Highlight>시작</Highlight>하세요!
            </Title>

            <Divider />

            <BottomRow>
              <Subtitle>
                주민들의 투표와 그에따른 설문 조사를 확인 후 원하는 지역에
                입점해 보세요.
              </Subtitle>

              <ScrollContainer>
                <ScrollIcon src={scrollIcon} alt="scroll icon" />
                <ScrollText>scroll</ScrollText>
              </ScrollContainer>
            </BottomRow>

            <SlideButtons>
              <SlideButtonLeft onClick={prevSlide}>
                <ArrowIcon src={leftArrow} alt="이전" />
              </SlideButtonLeft>
              <SlideButtonRight onClick={nextSlide}>
                <ArrowIcon src={rightArrow} alt="다음" />
              </SlideButtonRight>
            </SlideButtons>
          </Overlay>
        </HeroSection>

        <SecondSection>
          <SectionTitle>
            <Bold>안심</Bold>하고 시작하고,{" "}
            <OrangeText>
              <DotText>함</DotText>
              <DotText>께</DotText> 키워가는
            </OrangeText>{" "}
            동네 가게.
            <br />
            <Bold>Derere</Bold>는 <Bold>세 가지</Bold>를 <Bold>보장</Bold>
            합니다.
          </SectionTitle>
          <SectionSubtitle>
            내 가게, 과연 될까... 고민되시죠? Derere가 도와드립니다!
          </SectionSubtitle>

          <CardRow>
            {features.map((item, idx) => (
              <Card key={idx}>
                <CardImageWrapper>
                  <CardImage src={item.img} alt={item.title} />
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>{item.subtitle}</CardSubtitle>
                </CardImageWrapper>
                <CardDesc>{item.desc}</CardDesc>
              </Card>
            ))}
          </CardRow>
        </SecondSection>

        <LastSection>
          <LastBackground src={lastSection} alt="마지막 섹션" />
          <LastOverlay>
            <LastRow>
              <LastCard>
                <LastIcon src={lastIcon1} alt="아이콘1" />
                <LastTitle>동네별 음식 수요 분석</LastTitle>
                <LastSubtitle>
                  투표 ∙ 검색 ∙ 예약 데이터를 모아, 지금 이 지역에서 가장 원하는
                  음식을 확인합니다.
                </LastSubtitle>
              </LastCard>
              <LastCard>
                <LastIcon src={lastIcon2} alt="아이콘2" />
                <LastTitle>레스토랑 순환 입점</LastTitle>
                <LastSubtitle>
                  1~3개월 단위로 선정된 콘셉트의 가게가 지역에 입점해 새로운
                  경험을 제공합니다.
                </LastSubtitle>
              </LastCard>
              <LastCard>
                <LastIcon src={lastIcon3} alt="아이콘3" />
                <LastTitle>고객 & 점주 윈윈</LastTitle>
                <LastSubtitle>
                  고객은 새로운 미식을 즐기고, 점주는 검증된 수요를 바탕으로
                  안정적인 기회를 얻습니다.
                </LastSubtitle>
              </LastCard>
            </LastRow>
          </LastOverlay>
        </LastSection>
      </Container>
    </>
  );
};

export default OwnerHomePage;

const Container = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 56px;
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 40%;
  left: 9%;
  right: 9%;
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-size: 90px;
  font-weight: 500;
  margin: 0;
`;

const Highlight = styled.span`
  color: #d5f08a;
  font-family: "Pretendard";
  font-weight: 700;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ffffff;
  margin: 25px 0;
  opacity: 0.5;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ScrollContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ScrollText = styled.span`
  font-family: "Poppins Bold";
  font-size: 19px;
  font-weight: 600;
  color: white;
`;

const ScrollIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.p`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const ArrowIcon = styled.img`
  width: 35px;
  height: 35px;
`;

const SlideButtons = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SlideButtonLeft = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideButtonRight = styled(SlideButtonLeft)``;

const SecondSection = styled.section`
  padding: 50px 15%;
  background-color: #f9f9f9;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Bold = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
`;

const OrangeText = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  color: #ff5d17;
`;

const DotText = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: "·"; /* 점 하나 */
    position: absolute;
    top: -0.8em; /* 글자 위 위치 */
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2em;
    color: #ff5d17;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #2f2f2f;
  margin-bottom: 65px;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const Card = styled.div`
  flex: 1;
  text-align: left;
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin-bottom: 60px;
`;

const CardTitle = styled.h3`
  position: absolute;
  top: 65%;
  left: 10%;
  font-size: 29px;
  font-weight: 700;
  color: white;
  margin: 0;
`;

const CardSubtitle = styled.h4`
  position: absolute;
  top: 80%;
  left: 10%;
  right: 10%;
  font-size: 17px;
  font-weight: 500;
  color: white;
  margin: 0;
`;

const CardDesc = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #575757;
  text-align: center;
  margin-bottom: 40%;
`;

const LastSection = styled.section`
  position: relative;
  width: 100%;
`;

const LastBackground = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const LastOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  box-sizing: border-box;
`;

const LastRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
`;

const LastCard = styled.div`
  flex: 1;
  text-align: center;
  color: white;
`;

const LastIcon = styled.img`
  width: 90px;
  height: 90px;
  margin-bottom: 15px;
`;

const LastTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #d5f08a;
  margin: 0;
  margin-bottom: 15px;
`;

const LastSubtitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
`;
