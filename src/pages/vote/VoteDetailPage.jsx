// src/pages/vote/SearchPage.jsx
import React from "react";
import { useParams , useNavigate} from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../components/common/NavBar";
import FoodCard from "../../components/vote/StoreMainInfo";
import MenuList from "../../components/vote/MenuList"; 
import arrow from "../../assets/arrow.svg";

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

export default function SearchPage() {
    const { categoryId } = useParams();
    // 메뉴 데이터 준비
    const { id } = useParams(); 
    const navigate = useNavigate();
    const menuData = [
        {
          id: 1,
          title: "치즈 폭탄 오꼬노미야끼",
          price: "₩15,000",
          desc: "치즈를 아낌없이 올려 풍미를 극대화한 오꼬노미야끼...",
          img: "https://via.placeholder.com/100",
        },
        {
          id: 2,
          title: "미니 돈까스 6p",
          price: "₩6,000",
          desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
          img: "https://via.placeholder.com/100",
        },
        {
            id: 3,
            title: "미니 돈까스 6p",
            price: "₩6,000",
            desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
            img: "https://via.placeholder.com/100",
          },
          {
            id: 4,
            title: "미니 돈까스 6p",
            price: "₩6,000",
            desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
            img: "https://via.placeholder.com/100",
          },
          {
            id: 5,
            title: "미니 돈까스 6p",
            price: "₩6,000",
            desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
            img: "https://via.placeholder.com/100",
          },
          {
            id: 6,
            title: "미니 돈까스 6p",
            price: "₩6,000",
            desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
            img: "https://via.placeholder.com/100",
          },
          {
            id: 7,
            title: "미니 돈까스 6p",
            price: "₩6,000",
            desc: "바삭한 식감과 가성비 좋은 미니 돈까스...",
            img: "https://via.placeholder.com/100",
          },
      ];

  return (
    <PageContainer>
      {/* 상단 네비게이션바 */}
      <NavBar />

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
                <img src={arrow} alt="뒤로가기" style={{ width: '19px', height: '19px' }} />
                다시 선택하기
                </SubText>
            </HeaderSection>
          <FoodCard
            image="https://via.placeholder.com/400"
            title="오키 오꼬노미야끼"
            likes={37}
            description="지글지글 철판 위에서 갓 부쳐내는 오코노미야키의 풍미를 즐겨보세요. 신선한 채소와 해물, 고기, 치즈까지 다양한 재료를 듬뿍 넣어 겉은 바삭하고 속은 촉촉하게 완성했습니다. 정통 일본 가정식의 따뜻한 맛을 그대로 재현해 남녀노소 누구나 만족할 수 있는 한 끼를 제공합니다. 취향에 따라 소스와 토핑을 고르는 재미까지 더해져, 언제 찾아와도 새로운 맛을 경험할 수 있는 특별한 오코노미야키 전문점입니다."
            votes={37}
            onVote={() => console.log("투표하기")}
            onSurvey={() => navigate(`/vote/${categoryId}/${id}/survey`)}
          />
        </LeftSection>

        {/* 가운데 구분선 */}
        <Divider />

        {/* 오른쪽: 메뉴 리스트 */}
        <RightSection>
          <MenuList menus={menuData}/>
        </RightSection>
      </ContentWrapper>
    </PageContainer>
  );
}
