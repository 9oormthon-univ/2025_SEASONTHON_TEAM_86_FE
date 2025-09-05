import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";

export default function RegisterCompletePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <Content>
        {/* 상단 텍스트 */}
          <Title>
            <span className="orange">등록</span>
            <span className="black">이</span>
            <span className="orange"> 완료</span>
            <span className="black"> 되었어요!</span>
          </Title>
          <Subtitle>앞으로의 여정에 행운이 함께하길 바랍니다.</Subtitle>

        {/* 버튼 그룹 */}
        <ButtonGroup>
          <ActionButton onClick={() => navigate("/register/check")}>
            확인하기
          </ActionButton>
          <ActionButtonOrange onClick={() => navigate("/register/complete")}>
            완료
          </ActionButtonOrange>
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 20px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: 
    linear-gradient(to top left, #D5F08A, transparent 60%),
    linear-gradient(to top right, #FF5D17, transparent 60%),
    #fff9ef;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* 위쪽은 텍스트, 아래쪽은 버튼 */
  text-align: center;
  transform: translateY(-10%);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 5px;

  .orange {
    color: #ff5d17;
  }

  .black {
    color: #000;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #333;
  margin-bottom: 80px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;       /* 부모가 일정한 폭을 가지도록 */
  max-width: 300px;  /* 버튼 전체 최대 길이 제한 */
`;

const ActionButton = styled.button`
  flex: 1;           /* 버튼들이 공간을 똑같이 차지 */
  font-size: 18px;
  background: #fff;
  color: #C5C5C5;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 10px 28px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const ActionButtonOrange = styled(ActionButton)`
  background: #ff5d17;
  color: #D5F08A;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;
