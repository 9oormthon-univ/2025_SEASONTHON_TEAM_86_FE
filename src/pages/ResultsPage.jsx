import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../components/common/NavBar.jsx";
import rank1 from "../assets/first.svg";
import rank2 from "../assets/second.svg";
import rank3 from "../assets/third.svg";
import vote from "../assets/vote.svg";
import vote_gray from "../assets/vote_gray.svg";
import heart from "../assets/heart.svg";
import {
  fetchTop3Restaurants,
  fetchAllRestaurants,
} from "../api/restaurantApi.js";

const ResultsPage = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    async function loadData() {
      try {
        const top3 = await fetchTop3Restaurants();
        const all = await fetchAllRestaurants();

        console.log("Top3 API 응답:", top3);
        console.log("All API 응답:", all);

        // API는 1~N 순서로 반환되므로 그대로 사용
        setTopRestaurants(top3);
        setRestaurants(all.slice(3, 7)); // 4위~7위만 잘라서 표시
      } catch (err) {
        console.error("결과 불러오기 실패:", err);
      } finally {
        setLoading(false); // 끝나면 로딩 OFF
    }
  }
    loadData();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
      {loading ? (
            <FullPageSpinner />
        ) : (
          <>
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
          {topRestaurants.map((restaurant, idx) => (
            <RestaurantCard key={restaurant.restaurantId}>
              <CardImage
                src={restaurant.restaurantImageUrl}
                alt={restaurant.restaurantName}
              />
              <RankIcon
                src={idx === 0 ? rank1 : idx === 1 ? rank2 : rank3}
                alt={`${idx + 1}위`}
              />
              <VoteBadge>
                <VoteIcon src={vote} alt="vote" />
                {restaurant.restaurantVote}표
              </VoteBadge>
              <LikeBox>
                <HeartIcon src={heart} alt="heart" />
                {restaurant.restaurantLike}
              </LikeBox>

              {/* 하단 이름 & 설명 오버레이 */}
              <InfoOverlay>
                <RestaurantName>{restaurant.restaurantName}</RestaurantName>
                <RestaurantDesc>{restaurant.restaurantInfo}</RestaurantDesc>
              </InfoOverlay>
            </RestaurantCard>
          ))}
        </RankingList>

        {/* 4위~7위 */}
        <LowerRankingList>
          {restaurants.map((restaurant, idx) => (
            <RestaurantRow key={restaurant.restaurantId}>
              <RankNumber>{idx + 4}</RankNumber>
              <InfoBox>
                <RestaurantNameSmall>
                  {restaurant.restaurantName}
                </RestaurantNameSmall>
                <RestaurantDescSmall>
                  {restaurant.restaurantInfo}
                </RestaurantDescSmall>
              </InfoBox>
              <LikeBoxRow>
                <HeartIcon src={heart} alt="heart" />
                {restaurant.restaurantLike}
              </LikeBoxRow>
              <PhotoBox>
                <CardImageRow
                  src={restaurant.restaurantImageUrl}
                  alt={restaurant.restaurantName}
                />
                <VoteBadgeRow>
                  <VoteIcon src={vote_gray} alt="vote" />
                  {restaurant.restaurantVote}표
                </VoteBadgeRow>
              </PhotoBox>
            </RestaurantRow>
          ))}
        </LowerRankingList>
        </>
        )}
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
  max-width: 864px;
  max-height: 240px;
  border-radius: 20px;
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
  width: 200px;      /* 가로 크기 줄임 (205 → 150) */
  height: 100px;     /* 세로 크기도 제한 */
  flex-shrink: 0;
`;

const CardImageRow = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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

const FullPageSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3); /* 살짝 하얀 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  &::after {
    content: "";
    border: 8px solid #f3f3f3;
    border-top: 8px solid #ff6b00;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
