import styled from "styled-components";
import { useLocation } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 56px; /* NavBar 높이만큼 띄움 */
  min-height: 100vh;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;

  /* 배경 이미지 + 그라데이션 */
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 10%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${(props) => props.$bg}) no-repeat center center/cover;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  bottom: 18%; /* 화면 아래쪽으로 */
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  z-index: 1;
  color: #fff;
  width: 100%;
  padding: 0 20px;

  h1,
  h2 {
    padding-left: 140px; /* 왼쪽에서 40px 들여쓰기 */
  }

  h1 {
    font-size: 80px;
    font-weight: 700;
    color: #d5f08a;
    margin: 0; /* 간격 줄이기 */
  }

  h2 {
    font-size: 80px;
    font-weight: 700;
    margin: 8px 0 24px; /* 위아래 간격 최소화 */
    color: #fff;

    span {
      color: #d5f08a; /* "완료" 강조 */
    }
  }
`;

const Divider = styled.div`
  width: 80%; /* 전체 화면의 70% */
  height: 2px;
  background: rgba(255, 255, 255, 0.6);
  margin: 0 auto 24px;
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #ddd;
  margin-top: 0;

  width: 80%; /* 선과 같은 너비 */
  margin-left: auto; /* 좌우 가운데 정렬 */
  margin-right: auto;
  text-align: left; /* 텍스트는 왼쪽 정렬 */
`;

export default function ConfirmPage() {
  const location = useLocation();
  const { restaurant } = location.state || {};

  // 목데이터 fallback
  const restaurantName = restaurant?.name || "동양 사시미&초밥";
  const restaurantImage =
    restaurant?.image ||
    "https://images.unsplash.com/photo-1601312375650-3c9a503d1b07";

  return (
    <>
      <NavBar />
      <PageWrapper>
        <Background $bg={restaurantImage}>
          <Content>
            <h1>{restaurantName}</h1>
            <h2>
              입점 <span>완료</span> 되었습니다!
            </h2>
            <Divider />
            <SubText>
              가게 입점할 준비를 하세요. 새로운 일상의 여정을 응원합니다.
            </SubText>
          </Content>
        </Background>
      </PageWrapper>
    </>
  );
}
