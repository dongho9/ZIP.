import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MypageSidebar from "../../components/mypage/MypageSidebar";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: calc(100vh - 200px);
`;

// 메인 콘텐츠와 사이드바 배치를 위한 그리드
const PageContent = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 60px;
  align-items: flex-start; /* 상단 정렬 - 사이드바의 sticky 작동을 위함 */
`;

// 메인 컨텐츠 영역
const MainContent = styled.div`
  flex: 1;
  padding-top: 40px; /* 컨텐츠 영역이 위에서 시작하도록 패딩 추가 */
`;

const Mypage = () => {
  return (
    <Container>
      <PageContent>
        <MypageSidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </PageContent>
    </Container>
  );
};

export default Mypage;
