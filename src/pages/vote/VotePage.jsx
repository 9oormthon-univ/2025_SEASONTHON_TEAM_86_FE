import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/common/NavBar';
import VoteList from '../../components/vote/VoteList';
import CategoryList from '../../components/vote/CategoryList';
import SortButtons from '../../components/vote/SortButtons';

export default function VotePage() {
    const [sortOrder, setSortOrder] = useState("desc"); // 초기값: 표 많은 순
  
    const handleSort = (order) => {
      setSortOrder(order);
      console.log("정렬 기준:", order);
      // 나중에 VoteList에 props로 넘겨서 정렬 반영 가능
    };
  
    return (
      <PageWrapper>
        <NavBar />
        <CategoryList />
        <SortButtons onSort={handleSort} />
        <VoteList sortOrder={sortOrder} />
      </PageWrapper>
    );
  }
  
  // 전체 페이지에 양옆 패딩 주기
const PageWrapper = styled.div`
padding: 0 70px;   /* 양옆 여백 */
box-sizing: border-box;
`;
