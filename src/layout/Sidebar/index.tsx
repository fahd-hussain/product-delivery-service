import { appRoutes } from "../../config";
import classnames from "classnames";
import { FC, lazy, useState } from "react";
import { useAppSelector } from "../../hooks";
import { selectAllPermissions } from "../../store/apiSlice/permissionSlice";
import { checkRoutePermission } from "../../common";
import { RouteType } from "../../type/route.types";
import { List, Box, ListItem } from "@mui/material";
import SidebarItemButton from "./SidebarItemButton";
import CircleIcon from "@mui/icons-material/Circle";
import AdjustIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import SidebarItem from "./SidebarItem.";

const LogoutIcon = lazy(() =>
  import("@mui/icons-material/LogoutTwoTone").then()
);

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const [hide, toggleHide] = useState<boolean>(false);

  const permissions = useAppSelector(selectAllPermissions);

  const handleToggleHide = () => {
    toggleHide((prevState) => !prevState);
  };

  const permittedRoutes: Array<RouteType> = appRoutes.filter((route) => {
    const permittedRoute: boolean = checkRoutePermission(
      permissions,
      route.path
    );

    if (permittedRoute) {
      return route;
    } else {
      return null;
    }
  });

  const _layout_sidebar_class = classnames(
    "_layout_sidebar",
    hide && "_layout_sidebar_hide"
  );

  const _layout_sidebar_toggle_icon_class = classnames(
    hide
      ? "_layout_sidebar_toggle_icon_hollow"
      : "_layout_sidebar_toggle_icon_filled"
  );

  return (
    <Box className={_layout_sidebar_class}>
      <List>
        <Box className={_layout_sidebar_toggle_icon_class}>
          {hide ? (
            <AdjustIcon onClick={handleToggleHide} />
          ) : (
            <CircleIcon onClick={handleToggleHide} />
          )}
        </Box>
        <Box>
          {permittedRoutes.map(({ id, ...props }) => (
            <SidebarItem key={id} {...props} />
          ))}
        </Box>
        <ListItem className="_sidebar_item_logout">
          <SidebarItemButton
            Icon={LogoutIcon}
            title="Logout"
            onClick={() => console.log("Hello")}
            className="_sidebar_item"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
