import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import SurveyStepBar from "../../components/vote/StepBar";
import NavBar from "../../components/common/NavBar";
import MenuSection from "../../components/register/MenuSection";
import registerIcon from "../../assets/register.svg";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const HeaderText = styled.div`
  text-align: center;
  margin-bottom: 24px;

  p {
    font-size: 33px;
    margin-top: 6px;
    color: #222;
    font-weight: 500;

    .highlight {
      color: #FF6B00;
      font-weight: 700;
    }

    .bold {
      font-weight: 700;
    }
  }
`;

const HighlightWord = styled.span`
  color: #FF6B00;
  font-weight: 700;
  position: relative;   /* 점 위치 기준 */
  display: inline-block;
`;

const DotWrapper = styled.div`
  position: absolute;
  top: -22px;     /* 단어 위쪽 */
  left: 50%;      /* 단어 중앙 */
  transform: translateX(-50%);
  display: flex;
  gap: 12px;      /* 점 사이 간격 */
`;

const Dot = styled.span`
  font-size: 35px;
  color: #FF6B00;
  line-height: 1;
`;


const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: #F2EDE4;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
`;

const StepBarWrapper = styled.div`
  width: 115%;
  margin-bottom: 80px;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: block;
  margin-left: 4px;
`;

const Input = styled.input`
  padding: 9px 18px;
  border-radius: 18px;
  border: none;
  width: 80%;
  background: #FF5D17;
  color: #FFF;
  font-size: 16px;
  font-weight: 550;

  &::placeholder {
    color: rgba(255, 255, 255, 0.83);
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

const Section = styled.div`
  margin-bottom: 60px;
`;

const OptionGroup = styled.div`
  display: flex;
  gap: 17px;
  flex-wrap: wrap;
`;

const OptionButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background: ${(props) => (props.$active ? "#FF6B00" : "#E7DCCB")};
  color: ${(props) => (props.$active ? "#FFF" : "#8A8A8A")};
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #FF6B00;
    color: #fff;
  }
`;

const Footer = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
  color: #777;
  display: flex;
  flex-direction: column;   /* 텍스트와 버튼을 세로로 */
  align-items: center;      /* 가운데 정렬 */
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  background: #E7DCCB;
  color: #8A8A8A;
  border: none;
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 16px;
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
    width: 18px;
    height:18px;
    margin-right: 8px;
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  width: 170px;
`;

const Selected = styled.div`
  background: #ff5d17;
  color: #fff;
  padding: 5px 30px;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 500;

  position: relative;
  z-index: 200;
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 98.5%;
  max-height: 130px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 100;
  margin-top: -28px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff5d17;
    border-radius: 7px;
  }
`;

const Option = styled.div`
  padding: 8px 20px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #ffe5d2;
  }
`;

export default function SurveyPage() {
  const [storeName, setStoreName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const times = Array.from({ length: (24 * 60) / 30 }, (_, i) => {
    const totalMinutes = i * 30;
    const hours24 = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const period = hours24 < 12 ? "오전" : "오후";
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${period} ${hours12}시 ${minutes}분`;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const categories = ["한식", "중식", "일식", "양식", "분식", "카페·디저트", "패스트푸드", "기타"];

  const handleSubmit = () => {
    console.log("등록 정보:", { storeName, phone, selectedCategory, startTime, endTime });
    navigate("/register/complete", { state: { id, storeName, phone, selectedCategory, startTime, endTime } });
  };

  // 입력 상태에 따라 스텝 자동 갱신
  useEffect(() => {
    if (!storeName) setCurrentStep(1);
    else if (!phone) setCurrentStep(2);
    else if (!startTime || !endTime) setCurrentStep(3);
    else if (!selectedCategory) setCurrentStep(4);
    else setCurrentStep(5);
  }, [storeName, phone, startTime, endTime, selectedCategory]);

  return (
    <>
      <NavBar />
      <PageWrapper>
        <HeaderText>
          <p>
          <HighlightWord>
            가게
            <DotWrapper>
                <Dot>•</Dot>
                <Dot>•</Dot>
            </DotWrapper>
          </HighlightWord>
            <span className="highlight">정보</span>를 입력하고,
            <br />
            <span className="bold">동네 주민과 만나는 준비</span>를 시작하세요.
          </p>
        </HeaderText>

        <Container>
          <StepBarWrapper>
            <SurveyStepBar current={currentStep} />
          </StepBarWrapper>

          {/* STEP 1 & 2: 가게명/전화번호 */}
          <Section>
            <InputRow>
              <div style={{ flex: 1, marginRight: "12px" }}>
                <Label>가게명</Label>
                <Input
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="가게명을 입력하세요"
                />
              </div>
              <div style={{ flex: 1 }}>
                <Label>전화번호</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="전화번호를 입력하세요"
                />
              </div>
            </InputRow>
          </Section>

          {/* STEP 3: 영업시간 */}
          <Section>
            <Label>영업시간</Label>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <DropdownWrapper>
                <Selected onClick={() => setIsOpen(isOpen === "start" ? null : "start")}>
                  {startTime || "시작 시간 "}
                </Selected>
                {isOpen === "start" && (
                  <Options>
                    {times.map((time, idx) => (
                      <Option
                        key={idx}
                        onClick={() => {
                          setStartTime(time);
                          setIsOpen(null);
                        }}
                      >
                        {time}
                      </Option>
                    ))}
                  </Options>
                )}
              </DropdownWrapper>

              <span style={{ fontSize: "18px", fontWeight: "600" }}>~</span>

              <DropdownWrapper>
                <Selected onClick={() => setIsOpen(isOpen === "end" ? null : "end")}>
                  {endTime || "종료 시간 "}
                </Selected>
                {isOpen === "end" && (
                  <Options>
                    {times.map((time, idx) => (
                      <Option
                        key={idx}
                        onClick={() => {
                          setEndTime(time);
                          setIsOpen(null);
                        }}
                      >
                        {time}
                      </Option>
                    ))}
                  </Options>
                )}
              </DropdownWrapper>
            </div>
          </Section>

          {/* STEP 4: 음식 종류 */}
          <Section>
            <Label>음식 종류</Label>
            <OptionGroup>
              {categories.map((cat) => (
                <OptionButton
                  key={cat}
                  $active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </OptionButton>
              ))}
            </OptionGroup>
          </Section>

          {/* STEP 5: 음식 정보 */}
          <Section>
            <Label>음식 정보</Label>
            <MenuSection />
          </Section>

          <Footer>
            등록을 진행하려면, ‘등록하기’ 버튼을 눌러주세요.
            <br />
            버튼을 누르면 자동으로 등록이 됩니다.
            <br />
            <SubmitButton onClick={handleSubmit}><img src={registerIcon} alt="등록 아이콘" />등록하기</SubmitButton>
          </Footer>
        </Container>
      </PageWrapper>
    </>
  );
}
