import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
`;

const VoteItem = styled.div`
  background-color: #D5F08A;
  margin-bottom: 50px;
  padding: 15px;
  border-radius: 10px;
  display: flex; /* 가로 배치 */
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 70%; 
  box-sizing: border-box;
  margin-left: 20px;
`;

const FoodImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1; /* 가운데 영역 넓게 차지 */
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
  justify-content: space-between;
  gap: 10px;
`;

const Votes = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #444;
  margin-right: 10px;
`;

const VoteButton = styled.button`
  background: #FF6B00;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 3px 17px;
  cursor: pointer;
  font-weight: 500;
  font-size: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export default function VoteList({ sortOrder }) {
  const mockData = [
    {
      id: 1,
      title: 'Surfer Pizza 4계절 피자',
      desc: '시원한 바다향 가득한 4계절 피자, 토마토 소스와 치즈의 조화!',
      votes: 231,
      img: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      title: 'Fever Pizza 핫치킨 피자',
      desc: '매콤한 핫치킨이 올라간 화끈한 피자!',
      votes: 158,
      img: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      title: 'Univo Pizza 올리브 피자',
      desc: '신선한 올리브와 치즈가 어우러진 담백한 피자!',
      votes: 102,
      img: 'https://via.placeholder.com/100',
    },
  ];

  // ✅ 정렬 로직 추가
  const sortedData = [...mockData].sort((a, b) => {
    if (sortOrder === 'asc') return a.votes - b.votes;   // 표 적은 순
    return b.votes - a.votes; // 표 많은 순 (기본)
  });

  return (
    <Container>
      {sortedData.map((item) => (
        <VoteItem key={item.id}>
          <FoodImage src={item.img} alt={item.title} />
          <Info>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </Info>
          <Side>
            <Votes>투표 수: {item.votes}</Votes>
            <VoteButton>투표하기</VoteButton>
          </Side>
        </VoteItem>
      ))}
    </Container>
  );
}
