import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/common/NavBar';
import searchIcon from '../../assets/search_gray.svg';
import searchOrangeIcon from '../../assets/search_orange.svg';

export default function SearchPage() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      e.preventDefault();
      navigate(`/search/${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <Wrapper>
      <NavBar />
      <Content>
        <DotWrapper>
          <Dot>•</Dot>
          <Dot>•</Dot>
        </DotWrapper>
        <MainText>
          <Bold>음식점을 찾고 </Bold>계신가요? <br />
          찾고 싶은 <Bold>맛집</Bold>, <Highlight>키워드 하나면 충분합니다!</Highlight>
        </MainText>

        <SubText>
          지금 생각나는 음식을 검색해 보세요! 키워드에 맞춰 관련된 음식점들을 보여드립니다.
        </SubText>

        <SearchBox $focused={focused}>
          <SearchIcon
            src={focused ? searchOrangeIcon : searchIcon}
            alt="검색"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="옛날식 왕 돈까스"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
          />
        </SearchBox>
      </Content>
    </Wrapper>
  );
}

  
const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 120px; /* NavBar 아래쪽 여백 */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const DotWrapper = styled.div`
  display: flex;
  justify-content: center;  /* 가운데 정렬 */
  gap: 10px;
  margin-bottom: -15px;     /* 텍스트랑 간격 조정 */
  margin-right: 16px;
`;

const Dot = styled.span`
  font-size: 43px;
  color: #FF5D17;
  line-height: 1;
`;


const MainText = styled.h2`
  font-size: 32px;
  font-weight: 560;
  line-height: 1.5;
  color: #222;
  margin: 0 0 6px 0;
`;

const Bold = styled.span`
  font-weight: 730;
`;

const Highlight = styled.span`
  color: #FF5D17;
  font-weight: 730;
`;

const SubText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 50px;
`;


const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  padding: 15px 20px;
  width: 50%;
  max-width: 450px;
  background: ${({ $focused }) => ($focused ? '#FFF' : '#E8E8E8')};
  transition: background 0.3s ease;
`;

const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 18px;
  outline: none;
`;

