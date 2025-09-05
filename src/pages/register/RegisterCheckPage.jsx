import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import MenuCard from "../../components/register/MenuCard";

export default function RegisterCheckPage() {
  const [store, setStore] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 나중에 실제 API 연동
    const fetchData = async () => {
      // const res = await fetch("/api/my-store");
      // const data = await res.json();
      const data = {
        name: "동양 사시미&초밥",
        category: "일식",
        phone: "031-123-4567",
        startTime: "오전 7시 0분",
        endTime: "오후 7시 0분",
        menus: [
          {
            name: "연어 누드 롤",
            price: "13,000원",
            desc: "연어 누드 속 재료가 같으면서 담백한 맛이 특징입니다.",
            image: "/sample/sushi.png"
          }
        ]
      };
      setStore(data);
    };

    fetchData();
  }, []);

  if (!store) return <div>Loading...</div>;

  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Title>
          <p>
            <span className="bold">입력한 내용</span>이 
            <Highlight>
              정확
              <DotWrapper>
                <Dot>•</Dot>
                <Dot>•</Dot>
              </DotWrapper>
            </Highlight> 
            <Highlight>
                하게
            </Highlight>
            <br/>
            <Highlight>등록</Highlight>되었는지 <span className="bold">확인해 보세요.</span>
          </p>
        </Title>

        <InfoBox>
          <SectionTitle>{store.name} <span>가게 정보</span></SectionTitle>

          <Row>
            <Column>
                <Label>가게 이름</Label>
                <Input type="text" value={store.name} disabled />
            </Column>

            <Column>
                <Label>메뉴 카테고리</Label>
                <Input value={store.category} disabled />
            </Column>
            </Row>

            <Row>
            <Column>
                <Label>영업 시간</Label>
                <TimeRow>
                <TimeInput type="text" value={store.startTime} disabled />
                <span>~</span>
                <TimeInput type="text" value={store.endTime} disabled />
                </TimeRow>
            </Column>

            <Column>
                <Label>전화번호</Label>
                <Input type="text" value={store.phone} disabled />
            </Column>
          </Row>

          <Label>메뉴 정보</Label>
            {store.menus.map((menu, idx) => (
            <MenuCard key={idx} menu={menu} />
          ))}

          <Footer>
            <p>
              다시 등록을 진행하려면, ‘다시하기’ 버튼을 눌러주세요. <br />
              정보가 정확히 입력되었다면, ‘완료’ 버튼을 눌러주세요.
            </p>
            <ButtonGroup>
              <RetryButton onClick={() => navigate("/register")}>다시하기</RetryButton>
              <ConfirmButton onClick={() => navigate("/register/complete")}>완료</ConfirmButton>
            </ButtonGroup>
          </Footer>
        </InfoBox>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 39px;
  margin-bottom: 5px;
  text-align: center;
  font-weight: 600;

  .bold{
    font-weight: 700;
  }
`;

const Highlight = styled.span`
  color: #ff5d17;
  font-weight: 700;
  position: relative; 
`;

const DotWrapper = styled.div`
  position: absolute;
  top: -25px;     /* 단어 위쪽 */
  left: 50%;      /* 단어 중앙 */
  transform: translateX(-50%);
  display: flex;
  gap: 12px;      /* 점 사이 간격 */
`;

const Dot = styled.span`
  font-size: 35px;
  color: #FF6B00;
  line-height: 1;
`;


const InfoBox = styled.div`
  background: #f2ede4;
  border-radius: 20px;
  padding: 30px 70px;
  max-width: 600px;
  width: 100%;
  margin: 0 100px 50px 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

`;

const SectionTitle = styled.h3`
  font-size: 28px;
  color: #ff5d17;
  margin-bottom: 20px;
  span{
    color: #000;
  }
`;
{/*
const Row = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px 1fr;
  gap: 10px;
  margin-bottom: 12px;
`;

const Label = styled.div`
  font-weight: 600;
  color: #333;
`;

const Value = styled.div`
  background: #fff;
  padding: 6px 10px;
  border-radius: 8px;
  color: #555;
`;
*/}



const Footer = styled.div`
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 15px;
  color: #646464;

  p{
    margin-bottom: 25px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;   /* 버튼 그룹 자체 중앙 */
  gap: 16px;
  margin: 0 auto;            /* 부모 기준 중앙 */
  margin-top: 12px;
  width: 100%;
  max-width: 230px;          /* 버튼 그룹 크기 제한 */
`;

const RetryButton = styled.button`
  flex:1;
  background: #E7DCCB;
  color: #8A8A8A;
  border: 1px solid #ddd;
  border-radius: 24px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;

const ConfirmButton = styled(RetryButton)`
  background: #ff5d17;
  color: #fff;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 두 칸짜리 */
  gap: 20px;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
  margin-bottom: 6px; /* input과 간격 */
`;

const Input = styled.input`
  width: 85%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  color: #555;
  background: #fff;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TimeInput = styled(Input)`
  max-width: 140px;
`;
