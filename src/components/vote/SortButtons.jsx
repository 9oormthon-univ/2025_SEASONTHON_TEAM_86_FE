import React, { useState } from 'react';
import styled from 'styled-components';

export default function SortButtons({ onSort }) {
  const [active, setActive] = useState("desc");

  const handleClick = (order) => {
    setActive(order);
    onSort(order);
  };

  return (
    <Wrapper>
      <Button $active={active === "desc"} onClick={() => handleClick("desc")}>
        표 많은 순
      </Button>
      <Button $active={active === "asc"} onClick={() => handleClick("asc")}>
        표 적은 순
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
  border: none; /* 테두리 제거 */
  cursor: pointer;
  font-weight: 600;

  background: ${(props) => (props.$active ? "#FF5D17" : "#F0E9DE")};
  color: ${(props) => (props.$active ? "#fff" : "#B0AFAB")};

  outline: none; /* 기본 파란 포커스 없애기 */
  &:focus {
    outline: none;
    box-shadow: none; /* 브라우저에 따라 그림자도 뜰 수 있으니 제거 */
  }
`;
