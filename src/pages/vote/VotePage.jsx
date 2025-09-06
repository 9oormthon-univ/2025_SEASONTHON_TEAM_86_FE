import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import VoteList from "../../components/vote/VoteList";
import CategoryList from "../../components/vote/CategoryList";
import SortButtons from "../../components/vote/SortButtons";
import { fetchRestaurantsByType } from "../../api/restaurantApi"; // API 불러오기

export default function VotePage() {
  const { categoryId } = useParams(); // URL에서 카테고리 ID 읽음
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedCategory, setSelectedCategory] = useState(Number(categoryId) || 1);
  const [restaurants, setRestaurants] = useState([]); // API 결과 저장
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // URL 파라미터(categoryId)가 바뀌면 state도 업데이트
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(Number(categoryId));
    }
  }, [categoryId]);

  // API 호출
  useEffect(() => {
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

    const type = categoryMap[selectedCategory];
    if (!type) return;

    setLoading(true);
    fetchRestaurantsByType(type, sortOrder)
      .then((data) => {
        setRestaurants(data);
      })
      .catch((err) => {
        console.error("API 호출 오류:", err);
      })
      .finally(() => setLoading(false));
  }, [selectedCategory, sortOrder]);

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handleItemClick = (id) => {
    navigate(`/vote/${categoryId}/${id}`);
  };

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
        {loading ? (
          <Spinner />
        ) : (
          <VoteList
            restaurants={restaurants} // API 데이터 전달
            onItemClick={handleItemClick}
          />
        )}
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
