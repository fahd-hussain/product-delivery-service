import { FC } from "react";
import {
  IndexRouteProps,
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";

import "./_style.scss";

type LayoutProps = PathRouteProps & LayoutRouteProps & IndexRouteProps;

const Layout: FC<LayoutProps> = () => {
  return (
    <div className="_layout_container">
      <Header/>
      <SideBar/>
      <div className="_layout_content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
