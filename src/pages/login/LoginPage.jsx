import styled from "styled-components";
import kakaoLogo from "../../assets/kakao.svg";
import logoIcon from "../../assets/logo_orange.svg";

const KAKAO_AUTH_URL = import.meta.env.VITE_KAKAO_AUTH_URL;

export default function LoginPage() {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Wrapper>
      <LoginBox>
        <Greeting>
          안녕하세요. <br />
          <Inline>
            <LogoImg src={logoIcon} alt="Derere logo" />
            <BoldText>입니다!</BoldText>
          </Inline>
        </Greeting>
        <Description>
          카카오톡 계정으로 빠르고 쉽게 로그인할 수 있습니다.
        </Description>
        <Tag>1초 간편 회원가입</Tag>
        <KakaoButton onClick={handleKakaoLogin}>
          <KakaoImg src={kakaoLogo} alt="kakao" />
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
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 40px 45px;
  border-radius: 29px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

const Greeting = styled.h1`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
  text-align: left;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

const Inline = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const LogoImg = styled.img`
  height: 26px;
`;

const Description = styled.p`
  margin: 12px 0 40px;
  font-size: 14px;
  color: #666;
`;

const Tag = styled.div`
  display: inline-block;
  background-color: #064420;
  color: #fff;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 5px;
`;

const KakaoButton = styled.button`
  background-color: #fee500;
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

  &:hover {
    background-color: #fdd835;
  }
`;

const KakaoImg = styled.img`
  width: 18px;
  height: 18px;
`;
