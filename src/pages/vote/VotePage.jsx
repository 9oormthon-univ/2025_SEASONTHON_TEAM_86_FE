import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import VoteList from "../../components/vote/VoteList";
import CategoryList from "../../components/vote/CategoryList";
import SortButtons from "../../components/vote/SortButtons";

export default function VotePage() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const navigate = useNavigate();

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleItemClick = (id) => {
    navigate(`/vote/${id}`);
  };

  return (
    <PageWrapper>
      <NavBar />
      <CategorySection>
        <CategoryList
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </CategorySection>
      <ContentSection>
        <SortButtons onSort={handleSort} />
        <VoteList
          sortOrder={sortOrder}
          onItemClick={handleItemClick}
          category={selectedCategory}
        />
      </ContentSection>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
`;

const CategorySection = styled.div`
  background: #f3eee7; /* 카테고리 영역만 배경 */
`;

const ContentSection = styled.div`
  padding: 0 70px; /* 컨텐츠는 양옆 여백 */
  box-sizing: border-box;
  margin-top: 20px;
`;
