import React from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import acceptIcon from "../assets/submit.svg";
import rejectIcon from "../assets/reject.svg";
import sushiImage from "../assets/동양 사시미초밥_메뉴_연어 누드롤.jpg"
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; /* NavBar 높이만큼 띄움 */
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #222;
  margin: 0 0 16px;

  .light {
    font-size: 40px;
    font-weight: 10;
  }
`;

const Highlight = styled.span`
  color: #FF6B00;
  position: relative;
  display: inline-block;
`;

const DotWrapper = styled.div`
  position: absolute;
  top: -22px;
  left: 65%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
`;

const Dot = styled.span`
  font-size: 39px;
  color: #FF6B00;
  line-height: 1;
`;

const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 24px;

  h2 {
    font-size: 40px;
    font-weight: bold;
    color: #222;
    margin: 0;
  }

  p {
    font-size: 18px;
    margin-top: 6px;
    color: #4D4D4D;
    font-weight: 400;

    .highlight {
      color: #FF6B00;
      font-weight: 700;
    }
  }
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #F2EDE4;
  border-radius: 12px;
  padding:  24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
`;

const RestaurantTitle = styled.span`
  margin-bottom: 30px;
  display: inline-block;  /* 이렇게 하면 margin-bottom 먹음 */

  .name {
    font-size: 32px;
    font-weight: bold;
    color: #FF6B00; /* 주황색 */
  }

  .middle {
    font-size: 32px;
  }

  .survey {
    font-size: 32px;
    font-weight: bold;
  }

  .question {
    font-size: 32px;
  }
`;

const Question = styled.div`
  margin-bottom: 48px;
`;

const QuestionText = styled.p`
  font-weight: 600;
  margin-bottom: 12px;
`;

// 옵션 원형
const OptionCircle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 6px 16px;
  margin: 6px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #E1E1E1;
  background: #fff;
  color: #333;
  position: relative;
  gap:
`;

// 순위 뱃지
const RankBadge = styled.span`
  position: absolute;
  top: -8px;
  left: -5px;
  background: ${(props) =>
    props.rank === 1 ? "#FF5D17" : "#E1E1E1"};
  color: ${(props) =>
    props.rank === 1 ? "#fff" : "#737373"};
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #777;
  display: flex;
  flex-direction: column;   /* 텍스트와 버튼을 세로로 */
  align-items: center;      /* 가운데 정렬 */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px; /* 버튼 간 간격 */
  margin-top: 24px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 999px; /* 완전 동그랗게 */
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background: ${(props) => (props.reject ? "#E7DCCB" : "#FF5D17")};
  color: ${(props) => (props.reject ? "#555" : "#FFE96F")};

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export default function SurveyResultPage() {
  const { restaurantId } = useParams();
  const navigate = useNavigate(); 

  // 목데이터
  const restaurantName = "동양 사시미&초밥";
  const restaurantData = {
    id: restaurantId,
    name: restaurantName,
    image: sushiImage,
  };

  const questions = [
    {
      key: "q1",
      text: "1. 주간 이용 횟수를 선택해 주세요.",
      options: [
        { text: "0~1회", rank: 3 },
        { text: "2~3회", rank: 1 },
        { text: "4~5회", rank: 2 },
        { text: "6회 이상", rank: null },
      ],
    },
    {
      key: "q2",
      text: "2. 선호하는 음식 종류는 무엇인가요?",
      options: [
        { text: "한식", rank: 2 },
        { text: "중식", rank: null },
        { text: "일식", rank: 1 },
        { text: "양식", rank: null },
        { text: "분식", rank: null },
        { text: "카페·디저트", rank: 3 },
        { text: "패스트푸드", rank: null },
      ],
    },
    {
      key: "q3",
      text: "3. 방문하실 인원을 선택해 주세요.",
      options: [
        { text: "혼자", rank: 2 },
        { text: "2~3인", rank: 1 },
        { text: "4인 이상", rank: 3 },
        { text: "10인 이상", rank: null },
      ],
    },
    {
      key: "q4",
      text: "4. 가게를 선택할 때 중요하게 생각하시는 요소를 선택해 주세요.",
      options: [
        { text: "다양성", rank: null },
        { text: "맛", rank: 1 },
        { text: "가격", rank: 2 },
        { text: "접근성", rank: 3 },
        { text: "분위기", rank: null },
      ],
    },
    {
      key: "q5",
      text: "5. 한 끼 식사 시 선호하는 가격대를 선택해 주세요.",
      options: [
        { text: "5,000원 이하", rank: 3 },
        { text: "5,000~7,000원", rank: 2 },
        { text: "10,000~15,000원", rank: 1 },
        { text: "15,000원 이상", rank: null },
      ],
    },
  ];

    // 수락 버튼 핸들러
    const handleAccept = () => {
        navigate(`/results/${restaurantId}/confirm`, {
          state: { restaurant: restaurantData }
        });
      };
    
      // 거절 버튼 핸들러 
      const handleReject = () => {
        console.log("거절하기 클릭!");
        navigate(`/results/${restaurantId}/reject`, {
          state: { restaurant: restaurantData }
        }); 
      };
  

  return (
    <>
      <NavBar />
      <PageWrapper>
        {/* 상단 헤더 */}
        <HeaderText>
          <Title>
            <Highlight>
              주민 설문 결과,
              <DotWrapper>
                <Dot>•</Dot>
                <Dot>•</Dot>
                <Dot>•</Dot>
                <Dot>•</Dot>
              </DotWrapper>
            </Highlight>
            한눈<span className="light">에</span> 보기!
          </Title>
          <p>우리 가게를 선택해주신 주민들의 의견을 확인해보세요.</p>
        </HeaderText>

        {/* 컨테이너 */}
        <Container>
        <RestaurantTitle>
            <span className="name">{restaurantName}</span>
            <span className="middle">의</span>
            <span className="survey">설문 결과</span>
            <span className="question">는?</span>
        </RestaurantTitle>
          {questions.map((q) => (
            <Question key={q.key}>
              <QuestionText>{q.text}</QuestionText>
              {q.options.map((opt, idx) => (
                <OptionCircle key={idx} rank={opt.rank}>
                  {opt.text}
                  {opt.rank && <RankBadge rank={opt.rank}>{opt.rank}</RankBadge>}
                </OptionCircle>
              ))}
            </Question>
          ))}

            <Footer>
                우리 가게를 선택해주신 주민들의 의견을 확인해보세요.
                <br />
                '선택하기'버튼을 눌러주세요.
                <br />
                <ButtonWrapper>
                    <ActionButton onClick={handleAccept}>
                        <img src={acceptIcon} alt="수락" />
                        수락하기
                    </ActionButton>
                    <ActionButton reject onClick={handleReject}>
                        <img src={rejectIcon} alt="거절" />
                        거절하기
                    </ActionButton>
                </ButtonWrapper>
            </Footer>
        </Container>
      </PageWrapper>
    </>
  );
}
