import React, { useState, useEffect } from "react";
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
import heart from "../assets/heart.svg";

// API 함수 import
import {
  fetchLikeAll,
  fetchLikeTop1,
  fetchLikeTop3,
} from "../api/restaurantApi.js";

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
    { id: 7, img: cafe, name: "카페_디저트" },
    { id: 8, img: etc, name: "기타" },
  ];

  const [filter, setFilter] = useState("all");
  const [restaurants, setRestaurants] = useState([]);

  // 필터가 바뀔 때마다 API 호출
  useEffect(() => {
    async function loadData() {
      try {
        if (filter === "all") {
          const data = await fetchLikeAll();
          setRestaurants(data);
        } else if (filter === "top1") {
          const data = await fetchLikeTop1();
          setRestaurants([data]); // 단일 객체이므로 배열로 감싸줌
        } else if (filter === "top3") {
          const data = await fetchLikeTop3();
          setRestaurants(data);
        }
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    }
    loadData();
  }, [filter]);

  const handleFilter = (type) => {
    setFilter(type);
  };
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
          {restaurants.map((res, index) => (
            <div key={res.restaurantId}>
              <RestaurantCard>
                <Rank $rank={index + 1}>{index + 1}</Rank>
                <RestaurantImage
                  src={res.restaurantImageUrl}
                  alt={res.restaurantName}
                />
                <RestaurantInfo>
                  <RestaurantName>{res.restaurantName}</RestaurantName>
                  <RestaurantDesc>{res.restaurantInfo}</RestaurantDesc>
                  <RestaurantDetail>
                    타입: {res.restaurantType} | 위치: {res.restaurantLocation}
                  </RestaurantDetail>
                </RestaurantInfo>
                <LikeContainer>
                  <HeartImage src={heart} alt="Heart" />
                  <LikeCount>{res.restaurantLike}</LikeCount>
                </LikeContainer>
              </RestaurantCard>
              {index < restaurants.length - 1 && <BoldDivider />}
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
  justify-content: space-between; /* 아이템 간격 일정하게 */
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageCard = styled.div`
  flex: 1; /* 화면 크기에 맞춰 자동으로 늘어나거나 줄어듦 */
  cursor: pointer;
  overflow: hidden;
  border-radius: 50%;
  transition: transform 0.3s, filter 0.3s, background-color 0.1s;

  width: 140px;
  height: 140px;
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
  width: 200px;        /* 가로 길이 */
  height: 270px;       /* 세로 짧게 */
  object-fit: cover;   /* 비율 유지하면서 잘림 */
  border-radius: 10px; /* 모서리 둥글게 */
  margin-left: 18px;
`;

const RestaurantInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const RestaurantName = styled.span`
  font-family: "Poppins Bold";
  font-size: 28px;
`;

const FlagIcon = styled.img`
  width: 40px;
  height: auto;
  margin-left: 7px;
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
