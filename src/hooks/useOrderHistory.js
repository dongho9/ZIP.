// src/hooks/useOrderHistory.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ORDER_HISTORY_KEY } from "../constants/queryKeys";
import {
  getOrderHistory,
  saveOrderHistory,
  generateOrderId,
} from "../utils/orderUtils";

export const useOrderHistory = () => {
  const queryClient = useQueryClient();

  // 주문 내역 가져오기
  const { data: orderHistory = [] } = useQuery({
    queryKey: [ORDER_HISTORY_KEY],
    queryFn: getOrderHistory,
    initialData: [],
  });

  // 새 주문 추가하기
  const addOrderMutation = useMutation({
    mutationFn: (orderData) => {
      console.log("addOrderMutation - orderData:", orderData);

      const currentHistory = getOrderHistory();
      console.log("addOrderMutation - currentHistory:", currentHistory);

      // 새 주문 생성
      const newOrder = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        items: orderData.orderItems,
        paymentInfo: orderData.paymentInfo,
        status: "결제 완료", // 기본 상태
      };

      console.log("addOrderMutation - newOrder:", newOrder);

      // 주문 내역 업데이트 (맨 앞에 추가)
      const updatedHistory = [newOrder, ...currentHistory];
      saveOrderHistory(updatedHistory);

      console.log("addOrderMutation - updatedHistory:", updatedHistory);

      return newOrder;
    },
    onSuccess: (data) => {
      console.log("주문 성공적으로 추가됨:", data);
      // 주문 내역 쿼리 무효화하여 새로고침
      queryClient.invalidateQueries([ORDER_HISTORY_KEY]);
    },
    onError: (error) => {
      console.error("주문 추가 실패:", error);
    },
  });

  // 주문 상태 업데이트
  const updateOrderStatusMutation = useMutation({
    mutationFn: ({ orderId, newStatus }) => {
      const currentHistory = getOrderHistory();
      const updatedHistory = currentHistory.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      );
      saveOrderHistory(updatedHistory);
      return updatedHistory;
    },
    onSuccess: () => {
      // 주문 내역 쿼리 무효화하여 새로고침
      queryClient.invalidateQueries([ORDER_HISTORY_KEY]);
    },
  });

  return {
    orderHistory,
    addOrder: addOrderMutation.mutate,
    updateOrderStatus: updateOrderStatusMutation.mutate,
  };
};
