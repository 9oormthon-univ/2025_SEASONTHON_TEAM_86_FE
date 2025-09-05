// src/pages/vote/SearchResultPage.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import VoteList from '../../components/search/VoteListForSearch';
import SortButtonsForSearch from '../../components/search/SortButtonsForSearch';

export default function SearchResultPage() {
  const { keyword } = useParams(); // 예: "/search/스시"
  const navigate = useNavigate();

  // 정렬 기준 상태 ("votes" | "likes")
  const [sortField, setSortField] = useState("votes");

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
        <VoteList
          sortOrder="desc"          // 항상 내림차순
          sortField={sortField}     // "votes" 또는 "likes"
          category={4}              // 예: 일식 카테고리
          onItemClick={(id) => navigate(`/vote/${id}`)}
        />
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
  margin-bottom: -18px;
  margin-left: 5px;
`;

const Dot = styled.span`
  font-size: 40px;
  color: #ff5d17;
`;

const Title = styled.h2`
  font-size: 28px;
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
