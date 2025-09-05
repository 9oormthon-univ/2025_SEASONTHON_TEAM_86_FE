import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import voteIcon from '../../assets/vote.svg';
import voteOrangeIcon from '../../assets/vote_orange.svg';
import heartIcon from '../../assets/heart.svg';

const Container = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
`;

const VoteItem = styled.div`
  background-color: #D5F08A;
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 18px;
  display: flex;
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
  width: 100px;
  height: 100px;
  border-radius: 8px;
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
  font-size: 20px;
  font-weight: bold;
  color: #FF6B00;
`;

const Description = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
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
  font-size: 15px;
  font-weight: 600;
  color: #444;
`;

const VoteButton = styled.button`
  background: #D5F08A;
  color: #FF5D17;
  border: 2px solid #FF5D17;
  border-radius: 17px;
  padding: 5px 18px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;

  display: flex;
  align-items: center;
  gap: 6px;

  position: relative;

  &:hover {
    opacity: 0.9;
    background: #FF5D17;
    color: #D5F08A;
  }

  img {
    width: 18px;
    height: 18px;
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

const LikeInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 15px;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }
`;

export default function VoteList({ sortOrder, sortField = "votes", onItemClick, category }) {
  const mockData = [
    {
      id: 1,
      title: 'Surfer Pizza 4계절 피자',
      desc: '시원한 바다향 가득한 4계절 피자!',
      votes: 231,
      likes: 500,
      img: 'https://via.placeholder.com/100',
      categoryId: 4,
    },
    {
      id: 2,
      title: 'Fever Pizza 핫치킨 피자',
      desc: '매콤한 핫치킨 피자!',
      votes: 158,
      likes: 320,
      img: 'https://via.placeholder.com/100',
      categoryId: 4,
    },
    {
      id: 3,
      title: 'Univo Sushi 모듬 초밥',
      desc: '신선한 초밥 세트!',
      votes: 102,
      likes: 210,
      img: 'https://via.placeholder.com/100',
      categoryId: 2,
    },
  ];

  // 카테고리 필터
  const filteredData = mockData.filter((item) => item.categoryId === category);

  // 정렬
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === 'asc') return a[sortField] - b[sortField];
    return b[sortField] - a[sortField];
  });

  return (
    <Container>
      {sortedData.map((item) => (
        <VoteItem key={item.id} onClick={() => onItemClick?.(item.id)}>
          <FoodImage src={item.img} alt={item.title} />
          <Info>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </Info>
          <Side>
            {sortField === "votes" ? (
                <Votes>투표 수: {item.votes}</Votes>
            ) : (
                <LikeInfo>
                <img src={heartIcon} alt="heart" />
                {item.likes}
                </LikeInfo>
            )}
            <VoteButton>
                <img src={voteOrangeIcon} alt="vote icon" className="default-icon" />
                <img src={voteIcon} alt="vote icon hover" className="hover-icon" />
                투표하기
            </VoteButton>
          </Side>
        </VoteItem>
      ))}
    </Container>
  );
}
