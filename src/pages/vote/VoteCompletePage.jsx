import React, {useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";

export default function VoteCompletePage() {
  const navigate = useNavigate();

    // 페이지 들어올 때 스크롤 막고, 나갈 때 원래대로
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
        <Title>
          <span>투표가 완료</span> 되었어요!
        </Title>
        <Subtitle>결과가 발표된 후 확인해 주세요.</Subtitle>
        <BackButton onClick={() => navigate(-1)}>←</BackButton>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;   /* ← 100vw 대신 */
  margin: 0;
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
    background: 
    linear-gradient(to top left, #D5F08A, transparent 60%),
    linear-gradient(to top right, #FF5D17, transparent 60%),
    #fff9ef; /* 기본 배경색 */
  background-size: cover;
  background-repeat: no-repeat;
`;



const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;

  span {
    color: #ff5d17;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 40px;
`;

const BackButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #ff5d17;
  }
`;
