import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 사이드바를 컨텐츠 중간쯤에 위치하도록 수정
const Sidebar = styled.div`
  width: 200px;
  flex-shrink: 0;
  padding-top: 50px; /* 상단 여백 추가 */
  position: sticky;
  top: 100px; /* 스크롤 시 상단에서 떨어진 위치 */
  align-self: flex-start; /* 부모 컨테이너 높이와 상관없이 상단에서 시작 */
`;

const MenuGroup = styled.div`
  margin-bottom: 8px;
`;

const MenuHeader = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #000;
  padding: 16px 0 8px 0;
  margin-bottom: 0;
  font-family: "EHNormalTrial", sans-serif;
`;

const MenuList = styled.ul`
  padding-left: 0;
  margin-bottom: 0;
`;

const MenuItem = styled.li`
  a {
    display: block;
    padding: 6px 0;
    font-size: 1.4rem;
    color: #666;
    transition: all 0.2s ease;
    font-family: "Pretendard", sans-serif;
    white-space: pre-line;

    &:hover {
      color: #000;
    }
  }

  button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 6px 0;
    font-size: 1.4rem;
    color: #ccc;
    border: none;
    background: none;
    cursor: pointer;
    font-family: "Pretendard", sans-serif;
  }
`;

const MypageSidebar = () => {
  const menuItems = [
    { header: "SHOPPING" },
    { path: "/mypage", label: "주문/배송 조회" },
    { path: "/mypage/order-confirmation", label: "취소, 교환, 반품 조회" },
    { header: "ACCOUNT" },
    { path: "/mypage/user-address", label: "배송지 관리" },
    {
      path: "/mypage/change-user-info",
      label: "비밀번호 / 휴대폰 번호\n변경 및 관리",
    },
    { path: "/mypage/delete-account", label: "회원 탈퇴" },
    { header: "CUSTOMER CARE" },
    { path: "/mypage/faq", label: "F&Q" },
  ];

  return (
    <Sidebar>
      {menuItems.map((item, index) =>
        item.header ? (
          <MenuGroup key={index}>
            <MenuHeader>{item.header}</MenuHeader>
          </MenuGroup>
        ) : (
          <MenuGroup key={index}>
            <MenuList>
              <MenuItem>
                {item.label === "회원 탈퇴" ? (
                  <Link to={item.path}>
                    <button>{item.label}</button>
                  </Link>
                ) : (
                  <Link to={item.path || "#"}>{item.label}</Link>
                )}
              </MenuItem>
            </MenuList>
          </MenuGroup>
        )
      )}
    </Sidebar>
  );
};

export default MypageSidebar;
