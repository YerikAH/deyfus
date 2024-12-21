import { createBrowserRouter, RouteObject } from "react-router-dom";
import { ROUTER } from "./routes";
import {
  Branches,
  CreateProduct,
  Dashboard,
  Login,
  NotFound,
  Products,
  Register,
  Sales,
  Settings,
} from "@/pages";
import { Sidebar } from "@/layout";

const router: RouteObject[] = [
  {
    element: <Login />,
    path: ROUTER.LOGIN,
  },
  {
    element: <Register />,
    path: ROUTER.REGISTER,
  },
  {
    element: <NotFound />,
    path: ROUTER.NOT_FOUND,
  },

  {
    element: <Sidebar />,
    path: ROUTER.HOME,
    children: [
      {
        element: <Dashboard />,
        path: ROUTER.DASHBOARD,
      },
      {
        element: <Branches />,
        path: ROUTER.BRANCHES,
      },
      {
        element: <Products />,
        path: ROUTER.PRODUCTS,
      },
      {
        element: <Sales />,
        path: ROUTER.SALES,
      },
      {
        element: <Settings />,
        path: ROUTER.SETTINGS,
      },
      {
        element: <CreateProduct />,
        path: ROUTER.CREATE_PRODUCT,
      },
    ],
  },
];

const createRouter = createBrowserRouter(router);
export default createRouter;
