import { Link } from "react-router-dom";
import { appRoutes } from "../../config";
import classnames from "classnames";
import { FC } from "react";
import { useAppSelector } from "../../hooks";
import { selectAllPermissions } from "../../store/apiSlice/permissionSlice";
import { checkRoutePermission } from "../../common";
import { RouteType } from "../../type/route.types";

interface SideBarProps {
  hide: boolean;
}

const SideBar: FC<SideBarProps> = ({ hide }) => {
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

  const layout_sidebar_class = classnames(
    "_layout_sidebar",
    hide && "_layout_sidebar_hide"
  );

  return (
    <div id="_layout_sidebar" className={layout_sidebar_class}>
      <nav>
        <ul style={{ height: "50em" }}>
          {permittedRoutes.map((appRoute) => (
            <Link to={appRoute.path} key={appRoute.id}>
              <li>{appRoute.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
