// Root.jsx에 추가
import { useEffect } from "react";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { Outlet, useLocation } from "react-router-dom"; // useLocation 추가
import { useQueryClient } from "@tanstack/react-query"; // 추가
import { CART_ITEMS_KEY } from "./constants/queryKeys"; // 추가
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Lenis from "@studio-freight/lenis";
import ScrollToTop from "./components/common/ScrollToTop";
import { scheduleOrderStatusUpdate } from "./utils/orderUtils"; // 추가

const Root = () => {
  const queryClient = useQueryClient(); // 추가
  const location = useLocation(); // 추가

  // 경로 변경 감지 및 카트 데이터 새로고침
  useEffect(() => {
    // 로컬 스토리지에서 직접 카트 데이터 가져와 캐시 업데이트
    try {
      const cartData = localStorage.getItem(CART_ITEMS_KEY);
      if (cartData) {
        queryClient.setQueryData([CART_ITEMS_KEY], JSON.parse(cartData));
      }
    } catch (error) {
      console.error("경로 변경 시 카트 데이터 새로고침 실패:", error);
    }
  }, [location.pathname, queryClient]);

  useEffect(() => {
    // lenis 라이브러리
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // 주문 상태 타이머 복원 로직
  useEffect(() => {
    // 저장된 타이머 정보 가져오기
    const timers = JSON.parse(
      localStorage.getItem("orderStatusTimers") || "{}"
    );
    const now = new Date().getTime();

    // 각 타이머 검사 및 필요 시 재설정
    Object.entries(timers).forEach(([orderId, timerInfo]) => {
      const expiresAt = new Date(timerInfo.expiresAt).getTime();

      // 만료되지 않은 타이머만 재설정
      if (expiresAt > now) {
        // 남은 시간 계산 (밀리초 -> 분)
        const remainingMinutes = (expiresAt - now) / (60 * 1000);
        // 타이머 재설정
        scheduleOrderStatusUpdate(orderId, "배송중", remainingMinutes);
      }
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
