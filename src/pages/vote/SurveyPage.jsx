import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import SurveyStepBar from "../../components/vote/StepBar";
import SurveyQuestion from "../../components/vote/SurveyQuestion";
import NavBar from "../../components/common/NavBar";
import voteIcon from "../../assets/vote_gray.svg";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; /* NavBar 높이만큼 띄움 */
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 35px;
  font-weight: bold;
  color: #222;
  margin: 0 0 16px;
`;

const Highlight = styled.span`
  color: #000;
  position: relative; /* 점 위치 기준 */
  display: inline-block;
`;

const DotWrapper = styled.div`
  position: absolute;
  top: -22px;   /* 단어 위쪽 */
  left: 50%;    /* 단어 중앙 */
  transform: translateX(-50%);
  display: flex;
  gap: 13px;     /* 점 사이 간격 */
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
    font-size: 35px;
    font-weight: bold;
    color: #222;
    margin: 0;
  }

  p {
    font-size: 34px;
    margin-top: 6px;
    color: #222;
    font-weight: 500;

    .highlight {
      color: #FF6B00;   /* 강조 색상 */
      font-weight: 700; /* 두껍게 */
  }
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #F2EDE4;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  margin-bottom: 40px;
`;

const StepBarWrapper = styled.div`
  width: 116%;
  margin-bottom: 24px;
`;

const Footer = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 13px;
  color: #777;
  display: flex;
  flex-direction: column;   /* 텍스트와 버튼을 세로로 */
  align-items: center;      /* 가운데 정렬 */
`;

const SubmitButton = styled.button`
  margin-top: 12px;
  background: #E7DCCB;
  color: #8A8A8A;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  display: flex;              /* 가로 배치 */
  align-items: center;        /* 세로 가운데 정렬 */
  justify-content: center;    /* 전체 중앙 (선택) */

  &:hover {
    background: #FF6B00;
    color: #fff;
  }

  img{
    width: 23px;
    height:23px;
    margin-right: 8px;
  }
`;

export default function SurveyPage() {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { categoryId } = useParams();

  const questions = [
    { key: "q1", text: "1. 주간 이용 횟수를 선택해 주세요.", options: ["0~1회", "2~3회", "4~5회", "6회 이상"] },
    { key: "q2", text: "2. 선호하는 음식 종류는 무엇인가요?", options: ["한식", "중식", "일식", "양식", "분식", "카페·디저트", "패스트푸드"] },
    { key: "q3", text: "3. 방문하실 인원을 선택해 주세요.", options: ["혼자", "2~3인", "4인 이상", "10인 이상"] },
    { key: "q4", text: "4. 가게를 선택할 때 중요하게 생각하시는 요소를 선택해 주세요.", options: ["다양성", "맛", "가격", "접근성", "분위기"] },
    { key: "q5", text: "5. 한 끼 식사 시 선호하는 가격대를 선택해 주세요.", options: ["5,000원 이하", "5,000~7,000원", "10,000~15,000원", "15,000원 이상"] },
  ];

  const handleSelect = (qKey, ans, stepIndex) => {
    setAnswers({ ...answers, [qKey]: ans });
    setCurrentStep(stepIndex + 1);
  };

  const handleSubmit = () => {
    console.log("저장된 설문 응답:", answers);
    navigate(`/vote/${categoryId}/${id}/complete`, { state: { id, answers } });
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        {/* 설문 박스 바깥, 중앙에 텍스트 */}
        <HeaderText>
        <Title>
        투표 전에{" "}
        <Highlight>
            잠깐
            <DotWrapper>
            <Dot>•</Dot>
            <Dot>•</Dot>
            </DotWrapper>
        </Highlight>
        !
        </Title>
          <p>
            <span className="highlight">설문 참여</span>로 의견을 모아주세요.
          </p>
        </HeaderText>

        <Container>
          <StepBarWrapper>
            <SurveyStepBar current={currentStep} />
          </StepBarWrapper>

          {questions.map((q, idx) => (
            <SurveyQuestion
              key={q.key}
              question={q.text}
              options={q.options}
              selected={answers[q.key]}
              onSelect={(ans) => handleSelect(q.key, ans, idx)}
            />
          ))}

          <Footer>
            투표를 진행하려면, ‘투표하기’ 버튼을 눌러주세요.
            <br />
            버튼을 누르면 자동으로 투표가 됩니다.
            <br />
            <SubmitButton onClick={handleSubmit}><img src={voteIcon}/>투표하기</SubmitButton>
          </Footer>
        </Container>
      </PageWrapper>
    </>
  );
}
