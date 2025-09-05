// src/components/register/MenuCard.jsx
import React from "react";
import styled from "styled-components";

export default function MenuCard({ menu }) {
  return (
    <Card>
      <img src={menu.image} alt={menu.name} />
      <MenuContent>
        <SmallRow>
          <Column>
            <Label>메뉴 이름</Label>
            <Input type="text" value={menu.name} disabled />
          </Column>
          <Column>
            <Label>메뉴 가격</Label>
            <Input type="text" value={menu.price} disabled />
          </Column>
        </SmallRow>
        <Column>
          <Label>메뉴 소개</Label>
          <Textarea value={menu.desc} disabled />
        </Column>
      </MenuContent>
    </Card>
  );
}

const Card = styled.div`
  background: #E7DCCB;
  border-radius: 12px;
  padding: 15px;
  display: grid;
  grid-template-columns: 130px 1fr; /* 왼쪽: 이미지, 오른쪽: 내용 */
  gap: 8px;
  margin-bottom: 20px;
  margin-top: 20px;

  img {
    width: 130px;
    height: 200px;
    border-radius: 8px 0 0 8px;
    object-fit: cover;
  }
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 12px;
`;

const SmallRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  gap: 1px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 90%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  color: #555;
  background: #F2EDE4;
`;

const Textarea = styled.textarea`
  width: 96%;
  min-height: 70px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 16px;
  color: #555;
  resize: none;
  background: #F2EDE4;
`;
