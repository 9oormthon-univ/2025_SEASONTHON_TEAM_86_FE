import { useState } from "react";
import styled from "styled-components";
import voteIcon from "../../assets/vote.svg";
import voteOrangeIcon from "../../assets/vote_orange.svg";

const Container = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
`;

const VoteItem = styled.div`
  background-color: #F2EDE4;
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 18px;
  display: flex; /* 가로 배치 */
  align-items: stretch;
  justify-content: space-between;
  gap: 15px;
  width: 100%; 
  max-width: 900px;
  box-sizing: border-box;
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const FoodImage = styled.img`
  width: 186px;
  height: 142px;
  border-radius: 8px 0 0 8px;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 17px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: #ff6b00;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 17px;
  color: #333;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
`;

const Votes = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  color: #444;
`;

const VoteButton = styled.button`
  background: #F2EDE4;
  color: #ff5d17;
  border: 2px solid #ff5d17;
  border-radius: 17px;
  padding: 6px 19px;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;

  display: flex;
  align-items: center;
  gap: 6px;

  position: relative;

  &:hover {
    opacity: 0.9;
    background: #ff5d17;
    color: #d5f08a;
  }

  img {
    width: 19px;
    height: 19px;
    display: block;
  }

  .default-icon {
    display: block;
  }

  .hover-icon {
    display: none;
  }

  &:hover .default-icon {
    display: none;
  }

  &:hover .hover-icon {
    display: block;
  }
`;

export default function VoteList({ restaurants = [], onItemClick }) {
  if (!restaurants.length) {
    return <p style={{ marginLeft: "20px" }}>결과가 없습니다.</p>;
  }

  return (
    <Container>
      {restaurants.map((item) => (
        <VoteItem key={item.restaurantId} onClick={() => onItemClick?.(item.restaurantId)}>
          <FoodImage src={item.restaurantImageUrl || "https://via.placeholder.com/100"} alt={item.restaurantName} />
          <Info>
            <Title>{item.restaurantName}</Title>
            <Description>{item.restaurantInfo}</Description>
          </Info>
          <Side>
            <Votes>투표 수: {item.restaurantVote}</Votes>
            <VoteButton>
              <img
                src={voteOrangeIcon}
                alt="vote icon"
                className="default-icon"
              />
              <img
                src={voteIcon}
                alt="vote icon hover"
                className="hover-icon"
              />
              투표하기
            </VoteButton>
          </Side>
        </VoteItem>
      ))}
    </Container>
  );
}
