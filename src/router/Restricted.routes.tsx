import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { checkRoutePermission } from "../common";
import { useAppSelector } from "../hooks";
import { selectAllPermissions } from "../store/apiSlice/permissionSlice";

interface RestrictedRouteProps {}

const RestrictedRoute: FC<RestrictedRouteProps> = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const permissions = useAppSelector(selectAllPermissions);

  let location = useLocation();

  const permittedRoute: boolean = checkRoutePermission(
    permissions,
    location.pathname
  );

  if (isAuthenticated)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (!permittedRoute) return <Navigate to="/page-not-found" />;

  return <Outlet />;
};

export default RestrictedRoute;
