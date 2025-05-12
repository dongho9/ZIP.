import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import Ott from "./pages/Ott";
import FilterCategory from "./pages/FilterCategory";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
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
        path: "detail",
        element: <Detail />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "filtercategory/:categoryName",
        element: <FilterCategory />,
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
    ],
  },
]);
