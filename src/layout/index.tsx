import { FC, useState } from "react";
import {
  IndexRouteProps,
  LayoutRouteProps,
  Outlet,
  PathRouteProps,
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./Sidebar";

import "./style.css";

type LayoutProps = PathRouteProps & LayoutRouteProps & IndexRouteProps;

const Layout: FC<LayoutProps> = () => {
  const [hide, toggleHide] = useState<boolean>(false);

  return (
    <div className="_layout_container">
      <Header toggleHide={toggleHide} />
      <SideBar hide={hide} />
      <div className="_layout_content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
