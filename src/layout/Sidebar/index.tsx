import { appRoutes } from "../../config";
import classnames from "classnames";
import { FC, useState } from "react";
import { useAppSelector } from "../../hooks";
import { selectAllPermissions } from "../../store/apiSlice/permissionSlice";
import { checkRoutePermission } from "../../common";
import { RouteType } from "../../type/route.types";
import { List, Box } from "@mui/material";
import SidebarItem from "./SidebarItem.comp";
import CircleIcon from "@mui/icons-material/Circle";
import AdjustIcon from "@mui/icons-material/Adjust";

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

  const layout_sidebar_class = classnames(
    "_layout_sidebar",
    hide && "_layout_sidebar_hide"
  );

  return (
    <List className={layout_sidebar_class}>
      <Box>
        {hide ? (
          <Box className="_layout_sidebar_toggle_icon_hollow">
            <AdjustIcon onClick={handleToggleHide} />
          </Box>
        ) : (
          <Box className="_layout_sidebar_toggle_icon_filled">
            <CircleIcon onClick={handleToggleHide} />
          </Box>
        )}
        {permittedRoutes.map(({ id, ...props }) => (
          <SidebarItem key={id} {...props} />
        ))}
      </Box>
    </List>
  );
};

export default SideBar;
