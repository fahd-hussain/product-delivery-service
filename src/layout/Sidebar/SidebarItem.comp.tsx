import { ComponentType, FC, LazyExoticComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem, ListItemButton, Typography } from "@mui/material";
import { ListItemDecorator } from "@mui/joy";
import classNames from "classnames";

const SidebarItem: FC<SidebarItemProps> = ({ path, title, Icon }) => {
  const location = useLocation();
  const _sidebar_item = classNames(
    "_sidebar_item",
    location.pathname === path && "_sidebar_item_is_selected"
  );

  return (
    <Link to={path}>
      <ListItem>
        <ListItemButton className={_sidebar_item}>
          <ListItemDecorator>
            <Icon />
            <Typography>{title}</Typography>
          </ListItemDecorator>
        </ListItemButton>
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
