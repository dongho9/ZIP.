import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Event from "./pages/eventpages/Event";
import Ott from "./pages/Ott";
import FilterCategory from "./pages/FilterCategory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Payment from "./pages/Payment";
import Mypage from "./pages/mypages/Mypage";
import MypageMain from "./pages/mypages/MypageMain";
import OrderConfirmation from "./pages/mypages/OrderConfirmation";
import FAQ from "./pages/mypages/FAQ";
import DeleteAccount from "./pages/mypages/DeleteAccount";
import ChangeUserInfo from "./pages/mypages/ChangeUserInfo";
import UserAddress from "./pages/mypages/UserAddress";
import Promotion from "./pages/eventpages/Influencer";
import IntroduceTattoo from "./pages/eventpages/IntroduceTattoo";
import Star from "./pages/Star";
import StarDetail from "./pages/StarDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ott",
        element: <Ott />,
      },
      {
        path: "detail/:itemName",
        element: <Detail />,
      },
      {
        path: "event",
        element: <Event />,
        children: [
          {
            index: true,
            element: <IntroduceTattoo />,
          },
          {
            path: "promotion",
            element: <Promotion />,
          },
        ],
      },
      {
        path: "filtercategory/:categoryName",
        element: <FilterCategory />,
      },
      {
        path: "star",
        element: <Star />,
      },
      {
        path: "star/:starName",
        element: <StarDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "search/:name",
        element: <Search />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "mypage",
        element: <Mypage />,
        children: [
          {
            index: true,
            element: <MypageMain />,
          },
          {
            path: "order-confirmation",
            element: <OrderConfirmation />,
          },
          {
            path: "faq",
            element: <FAQ />,
          },
          {
            path: "delete-account",
            element: <DeleteAccount />,
          },
          {
            path: "change-user-info",
            element: <ChangeUserInfo />,
          },
          {
            path: "user-address",
            element: <UserAddress />,
          },
        ],
      },
    ],
  },
]);
