import React, { useState } from 'react';
import styled from 'styled-components';

export default function SortButtonsForSearch({ onSort }) {
  const [active, setActive] = useState("votes"); // 기본값: 투표 수

  const handleClick = (field) => {
    setActive(field);
    onSort(field); // 부모(SearchResultPage)로 "likes" or "votes" 전달
  };

  return (
    <Wrapper>
      <Button
        $active={active === "likes"}
        onClick={() => handleClick("likes")}
      >
        좋아요 수
      </Button>
      <Button
        $active={active === "votes"}
        onClick={() => handleClick("votes")}
      >
        투표 수
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0 20px 20px;
`;

const Button = styled.button`
  padding: 7px 17px;
  border-radius: 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;

  background: ${(props) => (props.$active ? "#FF5D17" : "#F0E9DE")};
  color: ${(props) => (props.$active ? "#fff" : "#B0AFAB")};

  outline: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
