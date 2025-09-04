import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/common/NavBar.jsx";
import mainImage from "../assets/mainImage.png";
import scrollIcon from "../assets/scrollIcon.svg";
import hansik from "../assets/hansik.png";
import ilsik from "../assets/ilsik.png";
import jungsik from "../assets/jungsik.png";
import yangsik from "../assets/yangsik.png";
import bunsik from "../assets/bunsik.png";
import fastfood from "../assets/fastfood.png";
import cafe from "../assets/cafe.png";
import etc from "../assets/etc.png";
import pick from "../assets/pick.svg";
import rank1 from "../assets/rank1.png";
import rank2 from "../assets/rank2.png";
import rank3 from "../assets/rank3.png";
import rank4 from "../assets/rank4.png";
import heart from "../assets/heart.svg";

const HomePage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(null);

  const categories = [
    { id: 1, img: hansik, name: "한식" },
    { id: 2, img: ilsik, name: "일식" },
    { id: 3, img: jungsik, name: "중식" },
    { id: 4, img: yangsik, name: "양식" },
    { id: 5, img: bunsik, name: "분식" },
    { id: 6, img: fastfood, name: "패스트푸드" },
    { id: 7, img: cafe, name: "카페-디저트" },
    { id: 8, img: etc, name: "기타" },
  ];

  const [filter, setFilter] = useState("all"); // 초기값: All

  const handleFilter = (type) => {
    setFilter(type);
  };

  // 예시 데이터
  const restaurant = [
    {
      id: 1,
      img: rank1,
      name: "Rosteak",
      description: "스테이크 전문점 입니다.",
      detail:
        "매일 엄선된 패티와 풍부한 재료를 사용하여, 누구나 쉽게 즐길 수 있으면서도, 매 순간 정성과 즐거움을 느낄 수 있도록 세심하게 준비했습니다.",
      likes: 121,
    },
    {
      id: 2,
      img: rank2,
      name: "행복한 돼지",
      description: "숯불향 돼지고기 전문점 입니다.",
      detail:
        "정성껏 구워낸 신선한 삼겹살과 함께하는 즐거운 식사 시간. 두툼한 고기와 풍부한 육즙, 그리고 직접 담근 양념까지 더해져 매 순간 만족스러운 한 끼를 제공합니다.",
      likes: 98,
    },
    {
      id: 3,
      img: rank3,
      name: "할머니 분식집",
      description: "할머니의 손맛으로 만든 분식 전문점 입니다.",
      detail:
        "따끈한 떡볶이, 바삭한 튀김, 달콤한 순대까지. 정성껏 만든 소스와 신선한 재료로 매 순간 만족스러운 한 끼를 제공합니다. 친구와 가족, 언제나 함께 즐길 수 있는 따뜻한 분식 공간입니다.",
      likes: 95,
    },
    {
      id: 4,
      img: rank4,
      name: "Ross Pasta",
      description: "이탈리아 요리 전문점 입니다.",
      detail:
        "깊은 풍미의 소스와 알맞게 삶아낸 면이 어우러져 특별한 한 끼를 제공합니다. 친구, 가족과 함께 편안한 분위기 속에서 풍성한 맛을 경험해 보세요.",
      likes: 81,
    },
  ];

  const filteredRestaurants = restaurant.filter((res, idx) => {
    if (filter === "all") return true;
    if (filter === "top1") return idx === 0;
    if (filter === "top3") return idx < 3;
  });

  return (
    <>
      <NavBar />
      <Container>
        <HeroSection>
          <BackgroundImage src={mainImage} alt="메인 이미지" />
          <Overlay>
            <Title>
              함께 <Highlight>선택</Highlight>하고,
              <br />
              함께 바꾸는 <Highlight>우리 공간</Highlight>
            </Title>

            <Divider />

            <BottomRow>
              <Subtitle>
                투표 과정에서는 이성적이고 신뢰감 있는 경험을 제공하며, 다수의
                환경에서도 누구나 쉽게 의견을 표현할 수 있습니다.
              </Subtitle>

              <ScrollContainer>
                <ScrollIcon src={scrollIcon} alt="scroll icon" />
                <ScrollText>scroll</ScrollText>
              </ScrollContainer>
            </BottomRow>
          </Overlay>
        </HeroSection>

        <OrangeSection>
          <SectionTitle>
            <Highlight>투표</Highlight>하고 싶은{" "}
            <Highlight>
              <DotText>음</DotText>
              <DotText>식</DotText>
            </Highlight>
            은 무엇인가요?
          </SectionTitle>
          <SectionSubtitle>
            원하는 음식이 없다면 ‘기타'를 눌러보세요.
          </SectionSubtitle>
          <ImageGrid>
            {categories.map((category) => (
              <CategoryWrapper key={category.id}>
                <ImageCard
                  $active={selected === category.id}
                  onClick={() => {
                    setSelected(category.id);
                    navigate(`/vote/${category.id}`); // 선택 시 VotePage로 이동
                  }}
                >
                  <CardImage src={category.img} alt={category.name} />
                </ImageCard>
                <Label>{category.name}</Label>
              </CategoryWrapper>
            ))}
          </ImageGrid>
        </OrangeSection>

        <LastSection>
          <LastSectionTitle>
            현재 <Bold>주민들</Bold>의 <PickImage src={pick} alt="Pick" /> 은?
          </LastSectionTitle>
          <LastSectionSubtitle>
            자세한 정보를 보고싶다면 Pick을 클릭해 보세요!
          </LastSectionSubtitle>

          <FilterButtons>
            <FilterButton
              $active={filter === "all"}
              onClick={() => handleFilter("all")}
            >
              All
            </FilterButton>
            <FilterButton
              $active={filter === "top1"}
              onClick={() => handleFilter("top1")}
            >
              Top 1
            </FilterButton>
            <FilterButton
              $active={filter === "top3"}
              onClick={() => handleFilter("top3")}
            >
              Top 3
            </FilterButton>
          </FilterButtons>
        </LastSection>

        <RestaurantList>
          {filteredRestaurants.map((res, index) => (
            <div key={res.id}>
              <RestaurantCard>
                <Rank $rank={index + 1}>{index + 1}</Rank>
                <RestaurantImage src={res.img} alt={res.name} />
                <RestaurantInfo>
                  <RestaurantName>{res.name}</RestaurantName>
                  <RestaurantDesc>{res.description}</RestaurantDesc>
                  <RestaurantDetail>{res.detail}</RestaurantDetail>
                </RestaurantInfo>
                <LikeContainer>
                  <HeartImage src={heart} alt="Heart" />
                  <LikeCount>{res.likes}</LikeCount>
                </LikeContainer>
              </RestaurantCard>
              {/* 마지막 항목이 아니면 구분선 */}
              {index < filteredRestaurants.length - 1 && <BoldDivider />}
            </div>
          ))}
        </RestaurantList>
      </Container>
    </>
  );
};

export default HomePage;

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
  top: 45%;
  left: 9%;
  right: 9%;
  color: white;
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-size: 101px;
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

const OrangeSection = styled.section`
  background-color: #ff6b00;
  display: flex;
  flex-direction: column;
  padding: 40px 9%;
`;

const SectionTitle = styled.h2`
  font-family: "Pretendard";
  font-size: 46px;
  font-weight: 500;
  color: white;
  margin: 0;
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
    color: #d5f08a;
  }
`;

const SectionSubtitle = styled.p`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const ImageGrid = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto; /* 화면 넘치면 스크롤 */
  padding: 10px 10px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCard = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  transition: transform 0.3s, filter 0.3s, background-color 0.1s;

  width: 125px;
  height: 125px;
  background-color: rgba(255, 93, 23, 0.73);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: brightness(0.7);
    transition: filter 0.3s;
  }

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 93, 23, 0);
    img {
      filter: brightness(1);
    }
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Label = styled.span`
  margin-top: 20px;
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const LastSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 9%;
`;

const LastSectionTitle = styled.h2`
  font-family: "Pretendard";
  font-size: 69px;
  font-weight: 500;
  color: #020202;
  margin: 0;
`;

const Bold = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
`;

const PickImage = styled.img`
  height: 1.5em; // 텍스트 높이와 동일하게 맞춤
  display: inline-block;
  vertical-align: middle; // 텍스트 가운데 맞춤
  margin: 0 4px; // 텍스트와 이미지 사이 여백
`;

const LastSectionSubtitle = styled.p`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 30px;
`;

const FilterButton = styled.button`
  padding: 10px 25px;
  font-family: "Poppins Bold";
  font-size: 24px;
  font-weight: 600;
  border: none;
  border-radius: 60px;
  cursor: pointer;
  width: 130px;
  background-color: ${(props) => (props.$active ? "#FF5D17" : "#F0E9DE")};
  color: ${(props) => (props.$active ? "white" : "#9B9B9B")};
`;

const RestaurantList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const RestaurantCard = styled.div`
  display: grid;
  grid-template-columns: 120px 200px 1fr auto;
  align-items: center;
  padding: 60px 7%;
`;

const Rank = styled.span`
  font-family: "Pretendard";
  font-size: 132px;
  font-weight: 400;
  text-align: center;
  color: ${(props) => (props.$rank === 1 ? "#ff5d17" : "#E7DCCB")};
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const RestaurantInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const RestaurantName = styled.span`
  font-family: "Poppins Bold";
  font-size: 28px;
`;

const RestaurantDesc = styled.span`
  font-family: "Pretendard";
  font-size: 22px;
  font-weight: 400;
  margin-top: 30px;
`;

const RestaurantDetail = styled.span`
  font-family: "Pretendard";
  font-size: 20px;
  font-weight: 400;
  margin-top: 30px;
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const HeartImage = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 50px;
`;

const LikeCount = styled.span`
  font-family: "Pretendard";
  font-size: 50px;
  font-weight: 500;
`;

const BoldDivider = styled.div`
  width: 85%;
  height: 3px;
  background-color: #e7dccb;
  margin: 0 auto; /* 가운데 정렬 */
`;
