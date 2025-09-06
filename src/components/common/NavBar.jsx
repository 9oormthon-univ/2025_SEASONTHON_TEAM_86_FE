import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/derere.svg";
import searchGray from "../../assets/search.svg";
import searchOrange from "../../assets/search_orange.svg";

export default function NavBar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMerchant, setIsMerchant] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const role = localStorage.getItem("userRole"); // 👈 저장된 역할 확인
    const name = localStorage.getItem("userName"); // 👈 저장된 이름 확인

    if (!token) {
      setIsLoggedIn(false);
      setIsMerchant(false);
      return;
    }

    setIsLoggedIn(true);
    setIsMerchant(role === "사장님"); // 👈 사장님이면 isMerchant true
    setUserName(name || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    setIsMerchant(false);
    navigate("/");
  };

  return (
    <Bar>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Menu>
        {isMerchant ? (
          <StyledLink to="/ownerhomepage">홈 home</StyledLink>
        ) : (
          <StyledLink to="/">홈 home</StyledLink>
        )}
        {isMerchant ? (
          <StyledLink to="/register">등록 register</StyledLink>
        ) : (
          <StyledLink to="/vote">투표 vote</StyledLink>
        )}
        {isMerchant ? (
          <StyledLink to="/resultsowner">결과 result</StyledLink>
        ) : (
          <StyledLink to="/results">결과 result</StyledLink>
        )}
        {!isMerchant && (
          <SearchLink to="/search">
            {({ isActive }) => (
              <SearchButton $active={isActive}>
                <img src={isActive ? searchOrange : searchGray} alt="search" />
              </SearchButton>
            )}
          </SearchLink>
        )}
      </Menu>
      <SearchForm>
        {isLoggedIn ? (
          <>
            {userName && <span>{userName}님</span>} {/* 👈 사용자 이름 표시 */}
            <LogoutButton type="button" onClick={handleLogout}>
              logout
            </LogoutButton>
          </>
        ) : (
          <LoginButton type="button" onClick={() => navigate("/login")}>
            login
          </LoginButton>
        )}
      </SearchForm>
    </Bar>
  );
}


const Bar = styled.nav`
  width: 100%;
  height: 56px;
  background: #d5f08a;
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  img {
    height: 36px;
    width: auto;
    display: block;
  }
  margin-left: 80px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  color: #1e4635;
  text-decoration: none;
  height: 56px;
  display: flex;
  align-items: center;
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #1e4635;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const SearchLink = styled(NavLink)`
  height: 56px;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;

  &.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #1e4635;
  }
`;

const SearchButton = styled.div`
  background: #f5f5f5;
  border-radius: 30px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 12px;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #eee;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 90px;
`;

const LoginButton = styled.button`
  background: #ff6b00;
  color: #d5f08a;
  border: none;
  border-radius: 20px;
  padding: 7px 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;

const LogoutButton = styled.button`
  background: #d5f08a;
  color: #ff6b00;
  border: 2px solid #ff6b00;
  border-radius: 20px;
  padding: 7px 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    opacity: 0.9;
  }
`;
