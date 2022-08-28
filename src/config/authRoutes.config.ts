import { lazy } from "react";
import { RouteType } from "../type/route.types";

const authRoutes: Array<RouteType> = [
  {
    id: "login",
    title: "Login",
    type: "item",
    path: "/login",
    Component: lazy(() => import("../page/Authentication/LoginPage").then()),
    Icon: lazy(() => import("@mui/icons-material/Login").then()),
  },
  {
    id: "register",
    title: "Register",
    type: "item",
    path: "/register",
    Component: lazy(() => import("../page/Authentication/RegisterPage").then()),
    Icon: lazy(() => import("@mui/icons-material/PersonAdd").then()),
  },
];

export default authRoutes;
