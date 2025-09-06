// src/pages/vote/SearchResultPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import VoteList from '../../components/search/VoteListForSearch';
import SortButtonsForSearch from '../../components/search/SortButtonsForSearch';
import { searchRestaurants } from '../../api/restaurantApi';
import VoteListForSearch from '../../components/search/VoteListForSearch';

// 문자열 → 숫자 매핑
const categoryMap = {
  1: "한식",
  2: "일식",
  3: "중식",
  4: "양식",
  5: "분식",
  6: "패스트푸드",
  7: "카페_디저트",
  8: "기타",
};
const reverseCategoryMap = Object.fromEntries(
  Object.entries(categoryMap).map(([key, value]) => [value, Number(key)])
);

export default function SearchResultPage() {
  const { keyword } = useParams(); // 예: "/search/스시"
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("votes"); // "vote" | "like"
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  // API 호출
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await searchRestaurants(keyword, sortField);
        setRestaurants(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [keyword, sortField]);
  console.log("restaurants state:", restaurants);

  return (
    <PageWrapper>
      <NavBar />
      <HeaderSection>
        <DotWrapper>
          <Dot>•</Dot>
          <Dot>•</Dot>
        </DotWrapper>
        <Title>
          <Highlight>{keyword}</Highlight>를 찾으셨나요? <br />
          검색만 하면 <Highlight>맛집</Highlight>이 한눈에!
        </Title>
        <SubText>{keyword}에 관련된 음식점을 확인하세요.</SubText>
      </HeaderSection>

      <ContentSection>
        {/* 좋아요/투표 정렬 버튼 */}
        <SortButtonsForSearch onSort={(field) => setSortField(field)} />

        {/* 리스트 표시 */}
        {loading ? (
          <Spinner/>
        ) : (
          <VoteListForSearch
            restaurants={restaurants}
            sortField={sortField}
            onItemClick={(id, typeString) => {
              const categoryId = reverseCategoryMap[typeString]; // "일식" → 2
              navigate(`/vote/${categoryId}/${id}`);
            }}
          />
        )}
      </ContentSection>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f6f3ee;
`;

const HeaderSection = styled.div`
  margin-top: 75px;
  padding: 0 300px;
  box-sizing: border-box;
`;

const DotWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: -30px;
  margin-left: 5px;
`;

const Dot = styled.span`
  font-size: 45px;
  color: #ff5d17;
`;

const Title = styled.h2`
  font-size: 38px;
  font-weight: 600;
  line-height: 1.5;
  color: #222;
  margin: 0 0 10px 0;
`;

const Highlight = styled.span`
  color: #ff5d17;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 15px;
  color: #555;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  padding: 0 280px;
  box-sizing: border-box;
  margin-top: 20px;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* 회색 배경 */
  border-top: 8px solid #ff6b00; /* 강조 색 (주황색) */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
  margin: 100px auto; /* 가운데 정렬 */

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
