import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 40px;
`;

const PageTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 40px;
  font-weight: normal;
  font-family: "EHNormalTrial", sans-serif;
`;

const SearchSection = styled.div`
  margin-bottom: 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 48px 16px 24px;
  font-size: 1.4rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: "Pretendard", sans-serif;

  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.6rem;
  color: #666;
  cursor: pointer;
`;

const FAQSection = styled.div`
  margin-bottom: 48px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 16px;
`;

const Question = styled.button`
  width: 100%;
  padding: 20px 48px 20px 20px;
  text-align: left;
  background: none;
  border: none;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: #f8f8f8;
  }

  &::after {
    content: "${(props) => (props.isOpen ? "−" : "+")}";
    position: absolute;
    right: 20px;
    font-size: 1.6rem;
    color: #666;
  }
`;

const Answer = styled.div`
  padding: 0 20px 20px 20px;
  font-size: 1.3rem;
  color: #666;
  line-height: 1.6;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  font-family: "Pretendard", sans-serif;
`;

const CategorySection = styled.div`
  margin-bottom: 48px;
`;

const CategoryTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: "EHNormalTrial", sans-serif;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
  background: none;
  font-size: 1.3rem;
  color: #333;
  cursor: pointer;
  font-family: "Pretendard", sans-serif;

  &:hover {
    background: #f8f8f8;
  }
`;

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "주문/배송 조회",
    "취소, 교환, 반품 조회",
    "EVENT 응모 현황",
    "배송지 관리",
    "비밀번호 / 휴대폰 번호 변경 및 관리",
    "회원 탈퇴",
  ];

  const faqItems = [
    {
      id: 1,
      question: "기본 배송지를 바꾸고 싶어요.",
      answer:
        "안전하게 회원님의 정보를 보호하기 위해 비밀번호를 다시 한 번 입력해주세요.",
    },
    {
      id: 2,
      question: "결제수단을 변경할 수 있나요?",
      answer: "결제 완료 후에는 결제수단 변경이 불가능합니다.",
    },
    {
      id: 3,
      question: "부분 결제가 가능한가요?",
      answer: "부분 결제는 지원하지 않습니다.",
    },
    {
      id: 4,
      question: "주문 상품을 배송지를 변경하고 싶어요.",
      answer: "배송 준비 중 상태인 경우 배송지 변경이 가능합니다.",
    },
    {
      id: 5,
      question: "주문 상품(사이즈)을 변경하고 싶어요.",
      answer: "배송 시작 전까지는 주문 취소 후 재주문이 가능합니다.",
    },
    {
      id: 6,
      question: "주문 상품을 휴소(부분 휴소) 하고 싶어요.",
      answer: "부분 취소는 배송 완료 후에만 가능합니다.",
    },
    {
      id: 7,
      question: "주문 내역 어디서 조회할 수 있나요?",
      answer:
        "기본 배송지는 로그인 후 MYPAGE > ACCOUNT > 배송지 관리에서 변경이 가능합니다.",
    },
  ];

  const toggleItem = (itemId) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId);
    } else {
      newOpenItems.add(itemId);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <PageTitle>Frequently Asked Questions</PageTitle>

      <SearchSection>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="궁금한 내용을 검색하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton>🔍</SearchButton>
        </SearchContainer>
      </SearchSection>

      <CategorySection>
        <CategoryTitle>FAQ Categories</CategoryTitle>
        <CategoryList>
          {categories.map((category) => (
            <CategoryButton key={category}>{category}</CategoryButton>
          ))}
        </CategoryList>
      </CategorySection>

      <FAQSection>
        {filteredFAQs.map((item) => (
          <FAQItem key={item.id}>
            <Question
              onClick={() => toggleItem(item.id)}
              isOpen={openItems.has(item.id)}
            >
              {item.question}
            </Question>
            <Answer isOpen={openItems.has(item.id)}>{item.answer}</Answer>
          </FAQItem>
        ))}
      </FAQSection>
    </Container>
  );
};

export default FAQ;
