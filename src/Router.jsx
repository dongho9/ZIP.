import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Ott from "./pages/Ott";
import FilterCategory from "./pages/FilterCategory";
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
        path: "filtercategory/:categoryName",
        element: <FilterCategory />,
      },
    ],
  },
]);
