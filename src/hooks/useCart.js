import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CART_ITEMS_KEY } from "../constants/queryKeys";

// 로컬 스토리지 헬퍼 함수
const getCartFromStorage = () => {
  try {
    const cart = localStorage.getItem(CART_ITEMS_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Error getting cart from storage:", error);
    return [];
  }
};

const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Error saving cart to storage:", error);
  }
};

// 장바구니 아이템 총 개수 구하기 함수 추가
export const getCartItemCount = () => {
  try {
    const cartItems = getCartFromStorage();
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  } catch (error) {
    console.error("Error calculating cart count:", error);
    return 0;
  }
};

export const useCart = () => {
  const queryClient = useQueryClient();

  // 장바구니 데이터 가져오기
  const { data: cartItems = [] } = useQuery({
    queryKey: [CART_ITEMS_KEY],
    queryFn: getCartFromStorage,
    initialData: [],
  });

  // 장바구니에 상품 추가하기
  const addToCart = useMutation({
    mutationFn: (newItem) => {
      const currentCart = getCartFromStorage();

      // 동일한 상품이 있는지 확인 (id와 detail을 함께 사용해 더 정확하게 체크)
      const existingItemIndex = currentCart.findIndex(
        (item) => item.id === newItem.id && item.detail === newItem.detail
      );

      let updatedCart;

      if (existingItemIndex >= 0) {
        // 이미 존재하는 상품이면 수량만 증가
        updatedCart = currentCart.map((item, index) => {
          if (index === existingItemIndex) {
            return { ...item, quantity: item.quantity + newItem.quantity };
          }
          return item;
        });
      } else {
        // 새 상품이면 추가
        updatedCart = [...currentCart, { ...newItem, selected: true }];
      }

      saveCartToStorage(updatedCart);
      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_ITEMS_KEY], updatedCart);
      // 장바구니 아이템 개수 업데이트를 위한 이벤트
      window.dispatchEvent(new CustomEvent("cart-updated"));
    },
  });

  // 장바구니 상품 제거
  const removeFromCart = useMutation({
    mutationFn: (itemId) => {
      const currentCart = getCartFromStorage();
      const updatedCart = currentCart.filter((item) => item.id !== itemId);
      saveCartToStorage(updatedCart);
      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_ITEMS_KEY], updatedCart);
      // 장바구니 아이템 개수 업데이트를 위한 이벤트
      window.dispatchEvent(new CustomEvent("cart-updated"));
    },
  });

  // 장바구니 상품 수량 변경
  const updateQuantity = useMutation({
    mutationFn: ({ itemId, quantity }) => {
      const currentCart = getCartFromStorage();
      const updatedCart = currentCart.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      });
      saveCartToStorage(updatedCart);
      return updatedCart;
    },
    onSuccess: (updatedCart) => {
      queryClient.setQueryData([CART_ITEMS_KEY], updatedCart);
      // 장바구니 아이템 개수 업데이트를 위한 이벤트
      window.dispatchEvent(new CustomEvent("cart-updated"));
    },
  });

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};
