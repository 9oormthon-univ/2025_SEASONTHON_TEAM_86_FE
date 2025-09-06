import React from 'react';
import styled from 'styled-components';
import kakaoLogo from '../../assets/kakao.svg'; // 카카오 로고 이미지 
import logoIcon from '../../assets/logo_orange.svg'

export default function LoginPage() {
  return (
    <Wrapper>
      <LoginBox>
        <Greeting>
          안녕하세요. <br />
          <Inline>
            <LogoImg src={logoIcon} alt="Derere logo" />
            <span className="bold">입니다!</span>
          </Inline>
        </Greeting>
        <Description>
          카카오톡 계정으로 빠르고 쉽게 로그인할 수 있습니다.
        </Description>
        <Tag>1초 간편 회원가입</Tag>
        <KakaoButton>
          <img src={kakaoLogo} alt="kakao" />
          카카오톡 간편 로그인
        </KakaoButton>
      </LoginBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f5f5f5;
  position: relative;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 30px 40px;
  margin: 30px;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
  z-index: 2;
`;

const Greeting = styled.h1`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  text-align: left;

  .bold {
    font-weight: 700;
  }
`;

const LogoImg = styled.img`
  height: 26px;   /* 텍스트 높이에 맞춤 */
`;

const Inline = styled.span`
  display: inline-flex;
  align-items: center; /* 세로 중앙 정렬 */
  gap: 6px;           /* 로고와 텍스트 간격 */
`;



const Description = styled.p`
  margin: 12px 0 40px;
  font-size: 14px;
  color: #666;
`;

const Tag = styled.div`
  display: inline-block;
  background: #064420;
  color: #fff;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 5px;
`;

const KakaoButton = styled.button`
  background: #fee500;
  border: none;
  border-radius: 12px;
  width: 100%;
  padding: 12px 0;
  font-size: 15px;
  font-weight: 600;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #fdd835;
  }
`;
