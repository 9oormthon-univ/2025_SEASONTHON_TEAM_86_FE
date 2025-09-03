import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const categories = [
  { id: 1, name: '한식', img: 'https://via.placeholder.com/80?text=한식' },
  { id: 2, name: '일식', img: 'https://via.placeholder.com/80?text=일식' },
  { id: 3, name: '중식', img: 'https://via.placeholder.com/80?text=중식' },
  { id: 4, name: '분식', img: 'https://via.placeholder.com/80?text=분식' },
  { id: 5, name: '패스트푸드', img: 'https://via.placeholder.com/80?text=패스트' },
  { id: 6, name: '카페/디저트', img: 'https://via.placeholder.com/80?text=카페' },
  { id: 7, name: '기타', img: 'https://via.placeholder.com/80?text=기타' },
];

export default function CategoryList() {
  const [selected, setSelected] = useState(1);

  return (
    <Wrapper>
      {categories.map((cat) => (
        <CategoryItem
          key={cat.id}
          $active={selected === cat.id}
          onClick={() => setSelected(cat.id)}
        >
          <ImageWrapper $active={selected === cat.id}>
            <img src={cat.img} alt={cat.name} />
          </ImageWrapper>
          <Label $active={selected === cat.id}>{cat.name}</Label>
        </CategoryItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 55px;
  display: flex;
  justify-content: space-around; /* 간격 일정하게 */
  gap: 30px;
  padding: 20px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #D5F08A;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; /* 정중앙 맞추기 */
    transition: all 0.3s;
    ${(props) =>
      !props.$active &&
      css`
        opacity: 0.4;
        filter: grayscale(30%);
      `}
  }
`;

const Label = styled.span`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.$active ? '#000' : '#888')};
  position: relative;

${(props) =>
    props.$active &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 120px;
        height: 4px;
        background: #FF5D17;
        transform: translateX(-50%);
      }
    `}
`;
