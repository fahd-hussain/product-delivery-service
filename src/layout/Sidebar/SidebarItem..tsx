import { ComponentType, FC, LazyExoticComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem } from "@mui/material";
import classNames from "classnames";
import SidebarItemButton from "./SidebarItemButton";

const SidebarItem: FC<SidebarItemProps> = ({ path, title, Icon }) => {
  const location = useLocation();
  const _sidebar_item = classNames(
    "_sidebar_item",
    location.pathname === path && "_sidebar_item_is_selected"
  );

  return (
    <Link to={path}>
      <ListItem>
        <SidebarItemButton
          Icon={Icon}
          title={title}
          className={_sidebar_item}
        />
      </ListItem>
    </Link>
  );
};

interface SidebarItemProps {
  path: string;
  title: string;
  Icon: LazyExoticComponent<ComponentType<any>>;
}

export default SidebarItem;
