import React from 'react';
import styled from 'styled-components';
import surveyIcon from '../../assets/vote.svg'; // 설문 아이콘 
import heart from '../../assets/heart.svg';    // 하트 아이콘

const Card = styled.div`
  background: #F2EDE4;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  max-width: 500px;
`;

const FoodImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const Title = styled.h3`
  font-size: 27px;
  font-weight: bold;
  color: #FF6B00;
  margin: 0;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #444;

  img {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    display: block;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
  margin: 12px 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  font-size: 13px;
  color: #777;
`;

const Buttons = styled.div`
  display: flex;
`;

const ActionButton = styled.button`
  background: ${({ bg }) => bg || '#eee'};
  color: ${({ color }) => color || '#D5F08A'};
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0;

  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;

  &:first-child {
    border-radius: 20px 0 0 20px; /* 왼쪽 버튼만 왼쪽 둥글게 */
  }

  &:last-child {
    border-radius: 20px; /* 오른쪽 버튼만 오른쪽 둥글게 */
    margin-left: -10px;  /* 왼쪽 버튼 위로 살짝 겹치게 */
    z-index: 2;          /* 위로 올라오도록 */
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

export default function FoodCard({
  image,
  title,
  likes,
  description,
  votes,
  onVote,
  onSurvey,
}) {
  return (
    <Card>
      <FoodImage src={image} alt={title} />
      <Header>
        <Title>{title}</Title>
        <Likes>
          <img src={heart} alt="heart" />
          {likes}
        </Likes>
      </Header>
      <Description>{description}</Description>
      <Footer>
        <span>투표를 진행하려면, <br/> ‘설문조사’ 버튼을 눌러주세요.</span>
        <Buttons>
          <ActionButton bg="#D5F08A" color="#FF6B00" onClick={onVote}>
            투표 수 {votes}
          </ActionButton>
          <ActionButton bg="#FF6B00" color="#D5F08A" onClick={onSurvey}>
            <img src={surveyIcon} alt="survey" />
            설문조사
          </ActionButton>
        </Buttons>
      </Footer>
    </Card>
  );
}
