import { PermissionState } from "../type";

const checkRoutePermission = (
  permissions: Array<PermissionState>,
  route: string
): boolean =>
  permissions.findIndex((permission) => permission.route === route) !== -1;

export default checkRoutePermission;
