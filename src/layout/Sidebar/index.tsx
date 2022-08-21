import { FC, lazy, useState } from "react";
import classnames from "classnames";
import { List, Box, ListItem } from "@mui/material";
import { appRoutes } from "../../config";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectAllPermissions } from "../../store/apiSlice/permissionSlice";
import { logout } from "../../store/authSlice";
import { checkRoutePermission } from "../../common";
import SidebarItemButton from "./SidebarItemButton";
import SidebarItem from "./SidebarItem.";
import { RouteType } from "../../type/route.types";

const CircleIcon = lazy(() => import("@mui/icons-material/Circle").then());
const AdjustIcon = lazy(() =>
  import("@mui/icons-material/FiberManualRecordTwoTone").then()
);
const LogoutIcon = lazy(() =>
  import("@mui/icons-material/LogoutTwoTone").then()
);

const SideBar: FC<SideBarProps> = () => {
  const dispatch = useAppDispatch();
  const [hide, toggleHide] = useState<boolean>(false);

  const permissions = useAppSelector(selectAllPermissions);

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

  const handleToggleHide = () => {
    toggleHide((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout());
  };
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
            onClick={handleLogout}
            className="_sidebar_item"
          />
        </ListItem>
      </List>
    </Box>
  );
};

interface SideBarProps {}

export default SideBar;
