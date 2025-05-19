// src/utils/orderUtils.js
import { ORDER_HISTORY_KEY } from "../constants/queryKeys";

// 주문 내역 불러오기
export const getOrderHistory = () => {
  try {
    const history = localStorage.getItem(ORDER_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error("Error getting order history:", error);
    return [];
  }
};

// 주문 내역 저장하기
export const saveOrderHistory = (orders) => {
  try {
    localStorage.setItem(ORDER_HISTORY_KEY, JSON.stringify(orders));
  } catch (error) {
    console.error("Error saving order history:", error);
  }
};

// 주문 ID 생성 함수
export const generateOrderId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");

  return `ORD-${year}${month}${day}-${random}`;
};
