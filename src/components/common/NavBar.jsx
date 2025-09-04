import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import searchGray from '../../assets/search.svg';
import searchOrange from '../../assets/search_orange.svg';

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Bar>
      <Logo><img src={logo} alt="Logo" /></Logo>
      <Menu>
        <StyledLink to="/">홈 home</StyledLink>
        <StyledLink to="/vote">투표 vote</StyledLink>
        <StyledLink to="/results">결과 result</StyledLink>
        <SearchLink to="/search" end>
          {({ isActive }) => (
            <SearchButton $active={isActive}>
              <img src={isActive ? searchOrange : searchGray} alt="search" />
            </SearchButton>
          )}
        </SearchLink>
      </Menu>
      <SearchForm>
        <LoginButton type="submit">login</LoginButton>
      </SearchForm>
    </Bar>
  );
}

const Bar = styled.nav`
  width: 100%;
  height: 56px;
  background: #D5F08A;
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
    height: 40px;
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
  color: #1E4635;
  text-decoration: none;
  height: 56px;
  display: flex;
  align-items: center;
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #1E4635;
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
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #1E4635;
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
  background: #FF6B00;
  color: #D5F08A;
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
