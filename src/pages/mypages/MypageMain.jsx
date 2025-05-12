import React, { useState } from "react";
import styled from "styled-components";
import logoSellor from "../../imgs/mypage/logo-sellor.png";

const PageTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
  font-weight: normal;
  font-family: "EHNormalTrial", sans-serif;
`;

const UserInfo = styled.div`
  margin-bottom: 32px;

  h2 {
    font-size: 1.8rem;
    font-weight: normal;
    margin-bottom: 4px;
    font-family: "Pretendard", sans-serif;
  }

  p {
    color: #999;
    font-size: 1.3rem;
    font-family: "EHNormalTrial", sans-serif;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 48px;
`;

const StatCard = styled.div`
  background: ${(props) => (props.dark ? "#333" : "#f5f5f5")};
  color: ${(props) => (props.dark ? "#fff" : "#000")};
  padding: 20px 24px;
  text-align: left;
  border-radius: 8px;
  position: relative;
  min-height: 100px;
  position: relative;
  &:first-child {
    flex: 1.2;
    padding-right: 50px;
  }

  &:not(:first-child) {
    flex: 1;
  }

  h4 {
    font-size: 1.3rem;
    color: ${(props) => (props.dark ? "#ccc" : "#666")};
    margin-bottom: 8px;
    font-family: "Pretendard", sans-serif;
  }
  .grade-icon {
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-20%);
    width: 32px;
    height: 32px;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
  }
`;

const LogoSellor = styled.img`
  width: 32px;
  height: 32px;
  opacity: 1;
  position: absolute;
  right: 20px;
  top: 20%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const StatValue = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  font-family: "Pretendard", sans-serif;
  margin-top: 16px;
`;

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  .grade-text {
    font-size: 1.8rem;
    font-weight: bold;
    font-family: "EHNormalTrial", sans-serif;
  }

  .upgrade-btn {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    color: #fff;
    padding: 6px 16px;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Pretendard", sans-serif;
    border-radius: 4px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: "EHNormalTrial", sans-serif;
`;

const FilterSection = styled.div`
  margin-bottom: 48px;
`;

const FilterLabel = styled.label`
  display: inline-block;
  font-size: 1.3rem;
  color: #666;
  margin-right: 16px;
  font-family: "Pretendard", sans-serif;
`;

const FilterButtons = styled.div`
  display: inline-flex;
  gap: 4px;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border: none;
  background: ${(props) => (props.active ? "#000" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#999")};
  font-size: 1.3rem;
  cursor: pointer;
  font-family: "EHNormalTrial", sans-serif;
  border-radius: 20px;

  &:hover {
    background: ${(props) => (props.active ? "#000" : "#e0e0e0")};
  }
`;

const OrderStatusGrid = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 48px;
  justify-content: center;
`;

const OrderStatusItem = styled.div`
  text-align: center;

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;

    span {
      font-size: 2.8rem;
      font-weight: bold;
      font-family: "EHNormalTrial", sans-serif;
    }
  }

  .label {
    font-size: 1.4rem;
    color: #333;
    font-family: "Pretendard", sans-serif;
  }
`;

const NoOrdersMessage = styled.p`
  text-align: center;
  color: #999;
  font-size: 1.4rem;
  margin: 48px 0;
  font-family: "Pretendard", sans-serif;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 60px;
`;

const ButtonLink = styled.button`
  padding: 12px 48px;
  border: 1px solid #e0e0e0;
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
  background: #fff;
  font-family: "EHNormalTrial", sans-serif;
  cursor: pointer;

  &:hover {
    background: #f8f8f8;
  }
`;

const MypageMain = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today");
  const filterOptions = ["Today", "1 week", "1 month", "3 month"];

  return (
    <>
      {/* My Page 타이틀 - 이 컴포넌트에서만 표시 */}
      <PageTitle>My Page</PageTitle>

      <UserInfo>
        <h2>안녕하세요, 000 님.</h2>
        <p>user-email@naver.com</p>
      </UserInfo>

      <StatsContainer>
        <StatCard dark>
          <h4>나의 등급</h4>
          <div className="grade-icon">
            <LogoSellor src={logoSellor} alt="셀러로고" />
          </div>
          <GradeContainer>
            <div className="grade-text">WELCOME</div>
            <button className="upgrade-btn">등급혜택 보기</button>
          </GradeContainer>
        </StatCard>
        <StatCard>
          <h4>보유 쿠폰</h4>
          <StatValue>4 장</StatValue>
        </StatCard>
        <StatCard>
          <h4>적립금</h4>
          <StatValue>0 원</StatValue>
        </StatCard>
      </StatsContainer>

      <SectionTitle>RECENT ORDERS</SectionTitle>

      <FilterSection>
        <FilterLabel>조회 기간</FilterLabel>
        <FilterButtons>
          {filterOptions.map((filter) => (
            <FilterButton
              key={filter}
              active={selectedFilter === filter}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons>
      </FilterSection>

      <OrderStatusGrid>
        <OrderStatusItem>
          <div className="circle">
            <span>0</span>
          </div>
          <div className="label">입금대기</div>
        </OrderStatusItem>
        <OrderStatusItem>
          <div className="circle">
            <span>0</span>
          </div>
          <div className="label">배송준비중</div>
        </OrderStatusItem>
        <OrderStatusItem>
          <div className="circle">
            <span>0</span>
          </div>
          <div className="label">배송중</div>
        </OrderStatusItem>
        <OrderStatusItem>
          <div className="circle">
            <span>0</span>
          </div>
          <div className="label">배송완료</div>
        </OrderStatusItem>
      </OrderStatusGrid>

      <NoOrdersMessage>최근 주문 내역이 없습니다.</NoOrdersMessage>

      <ActionButtons>
        <ButtonLink>SHOP NEW ITEMS</ButtonLink>
        <ButtonLink>GO TO EVENT PAGE</ButtonLink>
      </ActionButtons>
    </>
  );
};

export default MypageMain;
