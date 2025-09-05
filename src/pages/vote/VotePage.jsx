import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import VoteList from "../../components/vote/VoteList";
import CategoryList from "../../components/vote/CategoryList";
import SortButtons from "../../components/vote/SortButtons";

export default function VotePage() {
  const { categoryId } = useParams(); // URL에서 카테고리 ID 읽음
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState(Number(categoryId) || 1);
  const navigate = useNavigate();

    // URL 파라미터(categoryId)가 바뀌면 state도 업데이트
    useEffect(() => {
        if (categoryId) {
          console.log("categoryId from URL:", categoryId);
          setSelectedCategory(Number(categoryId));
        }
      }, [categoryId]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleItemClick = (id) => {
    navigate(`/vote/${id}`);
  };
  console.log("render categoryId:", categoryId);

  return (
    
    <PageWrapper>
      <NavBar />
      <CategorySection>
        <CategoryList
          selected={selectedCategory}
          onSelect={(id) => {
            setSelectedCategory(id);
            navigate(`/vote/${id}`); // 카테고리 클릭 시 URL 변경
          }}
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
