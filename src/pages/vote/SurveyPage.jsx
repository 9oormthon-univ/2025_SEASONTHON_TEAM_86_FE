import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import SurveyStepBar from "../../components/vote/StepBar";
import SurveyQuestion from "../../components/vote/SurveyQuestion";
import NavBar from "../../components/common/NavBar";
import voteIcon from "../../assets/vote_gray.svg";
import { fetchSurveys, fetchSurveyOptions, saveSurveyAnswers } from "../../api/surveyApi";

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



export default function SurveyPage() {
  const [questions, setQuestions] = useState([]); // 질문 + 옵션 저장
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchSurveys()
      .then(async (data) => {
        const surveysWithOptions = await Promise.all(
          data.map(async (q) => {
            try {
              const options = await fetchSurveyOptions(q.surveyId);
              return { ...q, options }; // optionId + optionText 함께 저장
            } catch (err) {
              console.error(`옵션 API 오류 (surveyId=${q.surveyId}):`, err);
              return { ...q, options: [] };
            }
          })
        );
        setQuestions(surveysWithOptions);
      })
      .catch((err) => console.error("설문 질문 API 오류:", err))
      .finally(() => setLoading(false));
  }, []);
  
  const handleSelect = (surveyId, option, stepIndex) => {
    setAnswers({ ...answers, [surveyId]: option }); // option 객체 저장
    setCurrentStep(stepIndex + 1);
  };
  
  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("로그인이 필요합니다!");
        return;
      }
  
      const payload = Object.entries(answers).map(([surveyId, option]) => ({
        restaurantId: Number(id),   // URL 파라미터
        userId: Number(userId),     // 로그인 사용자
        optionId: option.optionId,  // 선택한 옵션 ID
        surveyId: Number(surveyId),
      }));
  
      console.log("📤 저장 요청:", payload);
      await saveSurveyAnswers(payload);
  
      // alert("설문 응답이 저장되었습니다!");
      navigate(`/vote/${categoryId}/${id}/complete`, { state: { id, answers } });
    } catch (err) {
      console.error("설문 저장 오류:", err);
      // alert("설문 저장에 실패했습니다.");
    }
  };
  
    return (
      <>
        <NavBar />
        <PageWrapper>
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
  
            {loading ? (
              <FullPageSpinner/>
            ) : (
              questions.map((q, idx) => (
                <SurveyQuestion
                  key={q.surveyId}
                  question={q.surveyText}
                  options={q.options} // API에서 불러온 옵션 사용
                  selected={answers[q.surveyId]}
                  onSelect={(ans) => handleSelect(q.surveyId, ans, idx)}
                />
              ))
            )}
  
            <Footer>
              투표를 진행하려면, ‘투표하기’ 버튼을 눌러주세요.
              <br />
              버튼을 누르면 자동으로 투표가 됩니다.
              <br />
              <SubmitButton onClick={handleSubmit}>
                <img src={voteIcon} alt="투표아이콘" />
                투표하기
              </SubmitButton>
            </Footer>
          </Container>
        </PageWrapper>
      </>
    );
  }