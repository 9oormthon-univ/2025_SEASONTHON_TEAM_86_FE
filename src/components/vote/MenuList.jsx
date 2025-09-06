import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-left: 40px;
`;

const MenuCard = styled.div`
  display: flex;
  gap: 20px;
  background: #F2EDE4;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  width: 90%;
  box-sizing: border-box;
`;

const MenuImage = styled.img`
  width: 120px;
  height: 100px;
  border-radius: 7px 0 0 7px;
  object-fit: cover;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #FF6B00;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const Description = styled.p`
  font-size: 15px;
  color: #555;
  margin: 0;
  line-height: 1.4;
`;

export default function MenuList({ menus }) {
  return (
    <ListWrapper>
      {menus.map((menu) => (
        <MenuCard key={menu.id}>
          <MenuImage src={menu.img} alt={menu.title} />
          <Info>
            <Header>
              <Title>{menu.title}</Title>
              <Price>{menu.price}</Price>
            </Header>
            <Description>{menu.desc}</Description>
          </Info>
        </MenuCard>
      ))}
    </ListWrapper>
  );
}
