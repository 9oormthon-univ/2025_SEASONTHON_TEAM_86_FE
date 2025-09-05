import React, { useState } from "react";
import styled from "styled-components";
import MenuForm from "./MenuForm";

const Section = styled.div`
  margin-top: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const Card = styled.div`
  background: ${(props) => (props.$hasData ? "#000" : "#E7DCCB")};
  border-radius: 12px;
  padding: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.$hasData ? "flex-end" : "center")};
  align-items: ${(props) => (props.$hasData ? "flex-start" : "center")};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  min-height: 120px;
`;

const Placeholder = styled.div`
  font-size: 30px;
  color: #aaa;
  text-align: center;
`;

const AddButton = styled.button`
  grid-column: span 1;
  border: 2px dashed #ff6b00;
  max-height: 50px;
  background: #fff5ec;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  color: #ff6b00;
  cursor: pointer;
  &:hover {
    background: #ffe5d2;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  padding: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

// 이름 (맨 위)
const Name = styled.div`
  font-weight: 1000;
  color: #FF5D17;
  font-size: 24px;
`;

// 설명 (가운데)
const Desc = styled.div`
  flex: 1; /* 남는 공간 채움 */
  display: flex;
  align-items: center; /* 수직 중앙 */
  font-size: 15px;
  line-height: 1.4;
`;

// 가격 (맨 아래)
const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-top: 8px;
`;


export default function MenuSection() {
  // 기본 4칸
  const [menus, setMenus] = useState(new Array(4).fill(null));
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = (index) => {
    setEditingIndex(index);
    setShowForm(true);
  };

  const handleSave = (menuData) => {
    const newMenus = [...menus];
    newMenus[editingIndex] = menuData;
    setMenus(newMenus);
    setShowForm(false);
    setEditingIndex(null);
  };

  const handleAddSlot = () => {
    setMenus([...menus, null]); // 빈 슬롯 추가
  };

  return (
    <Section>
      <Grid>
        {menus.map((menu, idx) => (
          <Card
            key={idx}
            $hasData={!!menu}
            style={menu ? { backgroundImage: `url(${menu.image})` } : {}}
            onClick={() => handleAdd(idx)}
          >
            {menu ? (
              <>
              <Content>
                <Name>{menu.name}</Name>
                <Desc>{menu.desc}</Desc>
                <Price>₩{menu.price}</Price>
              </Content>
              </>
            ) : (
              <Placeholder>+</Placeholder>
            )}
          </Card>
        ))}
        {/* 추가하기 버튼 */}
        <AddButton onClick={handleAddSlot}>+ 추가하기</AddButton>
      </Grid>

      {showForm && (
        <MenuForm
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      )}
    </Section>
  );
}
