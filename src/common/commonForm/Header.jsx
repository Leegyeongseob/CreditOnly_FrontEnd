import styled from "styled-components";
import Logo from "../../img/background/CreditOnlyLogo.png";
import logosearch from "../../img/loginImg/findglass.png";
import exProfile from "../../img/commonImg/프로필예시.jpeg";
import { Link, useLocation } from "react-router-dom";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import {
  IoNotificationsOutline,
  IoChevronDown,
  IoChevronUp,
  IoSettingsOutline,
  IoReaderOutline,
  IoAtOutline,
  IoLogOutOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { useState } from "react";

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vh;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease,
    border-bottom 0.5s ease;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LeftBox = styled.div`
  width: 15%;
  min-width: 117px;
  height: 100%;
  background-color: ${({ theme }) => theme.sideBar};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease,
    border-right 0.5s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    position: ${({ isHeader }) => (isHeader ? "fixed" : "static")};
    width: ${({ isHeader }) => (isHeader ? "200px" : "15%")};
    height: ${({ isHeader }) => (isHeader ? "6vh" : "100%")};
    background-color: ${({ isHeader, theme }) =>
      isHeader ? theme.sideBar : theme.sideBar};
    top: ${({ isHeader }) => (isHeader ? "0" : "auto")};
    left: ${({ isHeader }) => (isHeader ? "0" : "auto")};
    /* : 1px solid ${({ theme }) => theme.border}; */
    border-right: ${({ isHeader, theme }) =>
      isHeader ? theme.borderR : "none"};
    z-index: ${({ isHeader }) => (isHeader ? "100" : "1")};
  }
`;

const SideBarToggle = styled.div`
  width: 10%;
  min-width: 50px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (min-width: 1201px) {
    display: none;
  }
`;

const RightBox = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LogoBox = styled(Link)`
  width: 20%;
  height: 90%;
  display: flex;
  justify-content: end;
  align-items: center;
  &:hover {
    transform: scale(1.04);
  }
  @media screen and (max-width: 1200px) {
    display: ${({ isHeader }) => (isHeader ? "flex" : "none")};
  }
`;

const SymLogo = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LogoTitle = styled(Link)`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #5a67ba;
  font-family: "Poppins-Bold", Helvetica;
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  &:hover {
    font-size: 16px;
  }
`;

const SearchBox = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  display: flex;
  width: 85%;
  height: 50%;
  padding: 2%;
  background-color: ${({ theme }) => theme.commponent};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.5s ease, color 0.5s ease;
  font-size: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid darkgray;
  }
`;

const Searchlogo = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: absolute;
  margin-left: 80%;
  &:hover {
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 40px;
`;

const ToggleIcon = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.8)")};
`;

const Toggle = styled.div`
  width: 60px;
  height: 32px;
  background-color: ${({ theme }) => theme.toggle};
  border-radius: 104px;
  box-shadow: 2px 2px 6px #90909040;
  /* border: 1px solid #c0c0c0; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const ToggleBox = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserProfile = styled.div`
  width: 10%;
  min-width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const UserName = styled.div`
  width: 25%;
  height: 100%;
  padding-left: 1%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-family: "Roboto-Regular", Helvetica;
  white-space: nowrap;
`;

const TopToggle = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 65px;
  right: 8.5%;
  width: 220px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  transition: background-color 0.5s ease, border 0.5s ease;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const DropdownItem = styled(Link)`
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  font-family: "Roboto-Regular", Helvetica;
  color: ${({ theme }) => theme.color};
  transition: color 0.5s ease;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.sideBar};
  }
`;

const AlarmSet = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const Header = ({ toggleSideBar, isHeader, toggleDarkMode, isDarkMode }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const location = useLocation(); // 현재 경로를 가져옴

  const handleToggleClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  // LeftBox 배경색을 결정하는 함수
  const getLeftBoxBackgroundColor = () => {
    if (location.pathname === "/chat") {
      return isDarkMode ? "#242424" : "#fff";
    } else {
      return "theme.sideBar";
    }
  };

  return (
    <HeaderContainer>
      <LeftBox
        isHeader={isHeader}
        style={{
          backgroundColor: getLeftBoxBackgroundColor(), // 배경색 적용
        }}
      >
        <SideBarToggle onClick={toggleSideBar}>
          <IoMenuOutline size={30} color="#8290ee" />
        </SideBarToggle>
        <LogoBox to="/mainpage" isHeader={isHeader}>
          <SymLogo />
        </LogoBox>
        <LogoTitle to="/mainpage">신용만</LogoTitle>
      </LeftBox>
      <RightBox>
        <SearchBox>
          <SearchInput
            placeholder="검색어를 입력해주세요."
            //   value={searchTerm}
            //   onChange={(e) => setSearchTerm(e.target.value)}
            //   onKeyPress={handleKeyPress}
          />
          <Searchlogo
            src={logosearch}
            //   onClick={() => {
            //     handleSearch();
            //   }}
          />
        </SearchBox>
        <ToggleBox>
          <Toggle onClick={toggleDarkMode}>
            <IconWrapper>
              <ToggleIcon isVisible={isDarkMode}>
                <BsMoonStars size={19} color="#c0c0c0" />
              </ToggleIcon>
              <ToggleIcon isVisible={!isDarkMode}>
                <BsSunFill size={23} color="#ffd400" />
              </ToggleIcon>
            </IconWrapper>
          </Toggle>
        </ToggleBox>
        <UserBox>
          <UserProfile>
            <UserImg imageurl={exProfile} />
          </UserProfile>
          <UserName>강해린</UserName>
          <TopToggle onClick={handleToggleClick}>
            {isDropdownVisible ? (
              <IoChevronUp size={18} color="#717694" />
            ) : (
              <IoChevronDown size={18} color="#717694" />
            )}
          </TopToggle>
          {isDropdownVisible && (
            <DropdownMenu>
              <DropdownItem to="/evaluation" onClick={handleToggleClick}>
                <IoReaderOutline size={20} color="gray" />
                나의 신용
              </DropdownItem>
              <DropdownItem>
                <IoAtOutline size={20} color="gray" />
                00bsj@naver.com
              </DropdownItem>
              <DropdownItem to="/setting" onClick={handleToggleClick}>
                <IoSettingsOutline size={20} color="gray" />
                설정
              </DropdownItem>
              <DropdownItem>
                <IoLogOutOutline size={20} color="gray" />
                로그아웃
              </DropdownItem>
            </DropdownMenu>
          )}
          <AlarmSet>
            <IoNotificationsOutline size={25} color="#717694" />
          </AlarmSet>
        </UserBox>
      </RightBox>
    </HeaderContainer>
  );
};
export default Header;
