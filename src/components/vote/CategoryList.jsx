import { useState } from "react";
import styled, { css } from "styled-components";
import hansikImg from "../../assets/hansik.png";
import ilsikImg from "../../assets/ilsik.png";
import jungsikImg from "../../assets/jungsik.png";
import bunsikImg from "../../assets/bunsik.png";
import yangsikImg from "../../assets/yangsik.png";
import fastfoodImg from "../../assets/fastfood.png";
import cafeImg from "../../assets/cafe.png";
import etcImg from "../../assets/etc.png";

const categories = [
  { id: 1, name: "한식", img: hansikImg },
  { id: 2, name: "일식", img: ilsikImg },
  { id: 3, name: "중식", img: jungsikImg },
  { id: 4, name: "양식", img: yangsikImg },
  { id: 5, name: "분식", img: bunsikImg },
  { id: 6, name: "패스트푸드", img: fastfoodImg },
  { id: 7, name: "카페_디저트", img: cafeImg },
  { id: 8, name: "기타", img: etcImg },
];

// CategoryList.jsx
export default function CategoryList({ selected, onSelect }) {
  return (
    <CategoryWrapper>
      <Wrapper>
        {categories.map((cat) => (
          <CategoryItem
            key={cat.id}
            $active={Number(selected) === cat.id}
            onClick={() => onSelect(cat.id)}
          >
            <ImageWrapper $active={Number(selected) === cat.id}>
              <img src={cat.img} alt={cat.name} />
            </ImageWrapper>
            <Label $active={Number(selected) === cat.id}>{cat.name}</Label>
          </CategoryItem>
        ))}
      </Wrapper>
    </CategoryWrapper>
  );
}

const CategoryWrapper = styled.div`
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  justify-content: center; /* 가운데 정렬 */
`;

const Wrapper = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: space-around; /* 간격 일정하게 */
  gap: 20px;
`;

const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 142px;
  height: 142px;
  border-radius: 50%;
  overflow: hidden;

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
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => (props.$active ? "#000" : "#888")};
  position: relative;
  padding-bottom: 5px; /* 텍스트와 밑줄 간격 */

  ${(props) =>
    props.$active &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 130px;
        height: 4px;
        background: #ff5d17;
        transform: translateX(-50%);
      }
    `}
`;
