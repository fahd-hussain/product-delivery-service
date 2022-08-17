import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { PermissionState } from "../../../type";
import { RootState } from "../../../type/store.types";
import {
  injectAddItem,
  injectDeleteItem,
  injectGetItem,
  injectGetItems,
  injectUpdateItem,
} from "..";

const tag = "Permission";
const route = "/permission";

const permissionsAdapter = createEntityAdapter<PermissionState>();

const initialState = permissionsAdapter.getInitialState();

export const { useGetPermissionsQuery, endpoints } =
  injectGetItems<PermissionState>(tag, route, permissionsAdapter);

export const { useGetPermissionQuery } = injectGetItem<PermissionState>(
  tag,
  route,
  permissionsAdapter
);

export const { useAddPermissionMutation } = injectAddItem<PermissionState>(
  tag,
  route
);

export const { useUpdatePermissionMutation } =
  injectUpdateItem<PermissionState>(tag, route);

export const { useDeletePermissionMutation } =
  injectDeleteItem<PermissionState>(tag, route);

// returns the query result object
export const getPermissions = endpoints.getPermissions;
export const selectPermissionsResult = getPermissions.select();

const selectPermissionsData = createSelector(
  selectPermissionsResult,
  (permissionsResult) => permissionsResult.data
  // normalized state object with ids & entities
);

export const {
  selectTotal: selectTotalPermission,
  selectAll: selectAllPermissions,
  selectById: selectPermissionById,
  selectIds: selectPermissionIds,
  // Pass in a selector that returns the permission slice of state
} = permissionsAdapter.getSelectors<RootState>(
  (state) => selectPermissionsData(state) ?? initialState
);
