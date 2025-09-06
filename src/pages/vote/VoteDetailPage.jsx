// src/pages/vote/SearchPage.jsx
import React, {useState, useEffect} from "react";
import { useParams , useNavigate} from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import FoodCard from "../../components/vote/StoreMainInfo";
import MenuList from "../../components/vote/MenuList"; 
import arrow from "../../assets/arrow.svg";
import { fetchMenusByRestaurant, fetchRestaurantDetail } from "../../api/restaurantApi";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #F6F3EE;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 80px; /* NavBar 높이만큼 아래로 내림 */
  padding: 0 16px;
`;

const HeaderSection = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  color: #222;
  margin: 0 0 16px;

  span {
    color: #FF6B00; /* '투표' 강조 색상 */
  }
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: flex-start; /* 왼쪽 정렬 */
  gap: 10px;                   /* 점 사이 간격 */
  margin-left: 8px;            /* 글자 시작 위치랑 딱 맞추기 위해 살짝 밀기 */
  margin-bottom: -14px;         /* 점과 글자 간격 */
`;

const Dot = styled.span`
  font-size: 39px;
  color: #FF6B00;
  line-height: 1;
`;

const SubText = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }

  img {
    display: block;
  }
`;


const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;  
  max-height: calc(100vh - 80px); /* 네브바 높이만큼 빼기 */        
  padding-right: 10px;           /* 스크롤바랑 컨텐츠 사이 여백 */
  padding-bottom: 30px;
  margin-bottom: 30px;
  margin-top: 10px;

    /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  margin-bottom: 10px;
  margin-left:17px;
`;

const Divider = styled.div`
  width: 3px;
  background-color: #EBE7D8;
  margin: 0 24px;
  align-self: stretch; 
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


export default function SearchPage() {
  const { categoryId, id: restaurantId } = useParams();
  const navigate = useNavigate();

  const [menus, setMenus] = useState([]);
  const [loadingMenus, setLoadingMenus] = useState(false);

  const [storeInfo, setStoreInfo] = useState(null);
  const [loadingStore, setLoadingStore] = useState(false);

  // 왼쪽: 가게 상세 API 호출
  useEffect(() => {
    if (!restaurantId) return;

    setLoadingStore(true);
    fetchRestaurantDetail(restaurantId)
      .then((data) => {
        console.log("가게 상세 API 응답:", data);
        setStoreInfo({
          image: data.restaurantImageUrl || "https://via.placeholder.com/400",
          title: data.restaurantName,
          likes: data.restaurantLike,
          description: data.restaurantInfo,
          votes: data.restaurantVote,
        });
      })
      .catch((err) => {
        console.error("가게 상세 API 오류:", err);
      })
      .finally(() => setLoadingStore(false));
  }, [restaurantId]);

  // 오른쪽: 메뉴 API 호출
  useEffect(() => {
    if (!restaurantId) return;

    setLoadingMenus(true);
    fetchMenusByRestaurant(restaurantId)
      .then((data) => {
        console.log("메뉴 API 응답:", data);
        setMenus(data);
      })
      .catch((err) => {
        console.error("메뉴 API 오류:", err);
      })
      .finally(() => setLoadingMenus(false));
  }, [restaurantId]);

  return (
    <PageContainer>
      <NavBar />
  
      {(loadingStore || loadingMenus) && <FullPageSpinner />}
  
      <ContentWrapper>
        {/* 왼쪽: 가게 정보 */}
        <LeftSection>
          <HeaderSection>
            <DotWrapper>
              <Dot>•</Dot>
              <Dot>•</Dot>
            </DotWrapper>
            <Title>
              <span>투표</span>할 가게를 선택하고,
              <br />
              정보를 확인하세요!
            </Title>
            <SubText onClick={() => navigate(`/vote/${categoryId}`)}>
              <img src={arrow} alt="뒤로가기" style={{ width: "19px", height: "19px" }} />
              다시 선택하기
            </SubText>
          </HeaderSection>
  
          {storeInfo && (
            <FoodCard
              image={storeInfo.image}
              title={storeInfo.title}
              likes={storeInfo.likes}
              description={storeInfo.description}
              votes={storeInfo.votes}
              onVote={() => console.log("투표하기")}
              onSurvey={() => navigate(`/vote/${categoryId}/${restaurantId}/survey`)}
            />
          )}
        </LeftSection>
  
        {/* 가운데 구분선 */}
        <Divider />
  
        {/* 오른쪽: 메뉴 리스트 */}
        <RightSection>
          <MenuList menus={menus} />
        </RightSection>
      </ContentWrapper>
    </PageContainer>
  );
  
}