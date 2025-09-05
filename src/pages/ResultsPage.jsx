import styled from "styled-components";
import NavBar from "../components/common/NavBar.jsx";
import resultrank1 from "../assets/resultrank1.png";
import resultrank2 from "../assets/resultrank2.png";
import resultrank3 from "../assets/resultrank3.png";
import resultrank4 from "../assets/fourth.png";
import resultrank5 from "../assets/fifth.png";
import resultrank6 from "../assets/sixth.png";
import resultrank7 from "../assets/seventh.png";
import rank1 from "../assets/first.svg";
import rank2 from "../assets/second.svg";
import rank3 from "../assets/third.svg";
import vote from "../assets/vote.svg";
import vote_gray from "../assets/vote_gray.svg";
import heart from "../assets/heart.svg";

const ResultsPage = () => {
  const topRestaurants = [
    {
      id: 1,
      name: "동양 사시미&초밥",
      description: "사시미와 초밥 전문점",
      img: resultrank1,
      rankIcon: rank1,
      votes: 230,
      likes: 93,
    },
    {
      id: 2,
      name: "로스테이크 Rosteak",
      description: "스테이크 전문점",
      img: resultrank2,
      rankIcon: rank2,
      votes: 132,
      likes: 121,
    },
    {
      id: 3,
      name: "유어도넛 Your Donuts",
      description: "수제 도넛 전문점",
      img: resultrank3,
      rankIcon: rank3,
      votes: 97,
      likes: 91,
    },
  ];

  const restaurants = [
    {
      id: 4,
      name: "행복한 돼지",
      description: "숯불향 돼지고기 전문점 입니다.",
      img: resultrank4,
      votes: 76,
      likes: 98,
    },
    {
      id: 5,
      name: "할머니 분식집",
      description: "손맛 일품 분식 전문점 입니다.",
      img: resultrank5,
      votes: 74,
      likes: 95,
    },
    {
      id: 6,
      name: "깜언 비엣남",
      description: "베트남 음식 전문점 입니다.",
      img: resultrank6,
      votes: 69,
      likes: 78,
    },
    {
      id: 7,
      name: "오이시이 우동",
      description: "일본 우동 전문점 입니다.",
      img: resultrank7,
      votes: 61,
      likes: 71,
    },
  ];

  return (
    <>
      <NavBar />
      <Container>
        <Title>
          가맹 투표 브랜드, <Bold>Top 3</Bold> <Highlight> 최종 순위</Highlight>
          는?
          <br />
          내가 <Highlight>투표한 음식점</Highlight>을 <Bold>찾아보세요.</Bold>
        </Title>
        <Subtitle>
          전지역 표를 합산하여, 가맹점주에게 입점 신청을 합니다.
        </Subtitle>

        {/* Top 3 */}
        <RankingList>
          {topRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id}>
              <CardImage src={restaurant.img} alt={restaurant.name} />
              <RankIcon src={restaurant.rankIcon} alt={`${restaurant.id}위`} />
              <VoteBadge>
                <VoteIcon src={vote} alt="vote" />
                {restaurant.votes}표
              </VoteBadge>
              <LikeBox>
                <HeartIcon src={heart} alt="heart" />
                {restaurant.likes}
              </LikeBox>

              {/* 하단 이름 & 설명 오버레이 */}
              <InfoOverlay>
                <RestaurantName>{restaurant.name}</RestaurantName>
                <RestaurantDesc>{restaurant.description}</RestaurantDesc>
              </InfoOverlay>
            </RestaurantCard>
          ))}
        </RankingList>

        {/* 4위~7위 */}
        <LowerRankingList>
          {restaurants.map((restaurant, index) => (
            <RestaurantRow key={restaurant.id}>
              <RankNumber>{restaurant.id}</RankNumber>
              <InfoBox>
                <RestaurantNameSmall>{restaurant.name}</RestaurantNameSmall>
                <RestaurantDescSmall>
                  {restaurant.description}
                </RestaurantDescSmall>
              </InfoBox>
              <LikeBoxRow>
                <HeartIcon src={heart} alt="heart" />
                {restaurant.likes}
              </LikeBoxRow>
              <PhotoBox>
                <CardImageRow src={restaurant.img} alt={restaurant.name} />
                <VoteBadgeRow>
                  <VoteIcon src={vote_gray} alt="vote" />
                  {restaurant.votes}표
                </VoteBadgeRow>
              </PhotoBox>
            </RestaurantRow>
          ))}
        </LowerRankingList>
      </Container>
    </>
  );
};

export default ResultsPage;

const Container = styled.div`
  min-height: 100vh;
  overflow-y: auto;
  padding-top: 56px;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 5%;
`;

const Title = styled.h1`
  font-family: "Pretendard";
  font-size: 40px;
  font-weight: 500;
  margin: 0;
`;

const Highlight = styled.span`
  color: #ff5d17;
  font-family: "Pretendard";
  font-weight: 700;
`;

const Bold = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-family: "Pretendard";
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
`;

const RankingList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45px;
  margin-top: 55px;
`;

const RestaurantCard = styled.div`
  position: relative;
  width: 100%;
  overflow: visible; /* 바깥으로 튀어나와도 보이게 */
  margin: 0 auto;
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const InfoOverlay = styled.div`
  position: absolute;
  bottom: 6%;
  left: 6%;
  width: 100%;
  padding: 12px;
`;

const RestaurantName = styled.h3`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
  color: #fff;
`;

const RestaurantDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
`;

const RankIcon = styled.img`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 65px;
  height: auto;
  z-index: 2; /* 이미지 위에 겹치도록 */
`;

const VoteBadge = styled.div`
  position: absolute;
  top: 11%;
  right: 6%;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ff5d17;
  padding: 5px 12px;
  border-radius: 20px;
  color: #d5f08a;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 700;
`;

const VoteIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const LikeBox = styled.div`
  position: absolute;
  bottom: 11%;
  right: 6%;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  border-radius: 20px;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 400;
  color: white;
`;

const HeartIcon = styled.img`
  width: 18px;
  height: 18px;
`;

const LowerRankingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-left: 25%;
  padding-right: 25%;
`;

const RestaurantRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 16px;
  border-radius: 14px;
  border: 1px solid #e5ddd1;
  background: #f2ede4;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;

const RankNumber = styled.div`
  color: #545454;
  font-family: Pretendard;
  font-size: 61px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  flex: 1;
`;

const RestaurantNameSmall = styled.h4`
  color: #545454;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

const RestaurantDescSmall = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  margin: 4px 0 0;
`;

const LikeBoxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PhotoBox = styled.div`
  position: relative;
  width: 205px;
  height: auto;
  flex-shrink: 0;
`;

const CardImageRow = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const VoteBadgeRow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, -50%);
  display: flex;
  align-items: center;
  gap: 4px;
  background: #e5ddd1;
  padding: 2px 12px;
  border-radius: 50px;
  font-family: "Pretendard";
  font-size: 19px;
  font-weight: 700;
  color: #b0afab;
`;
