import { ComponentType, LazyExoticComponent, ReactNode } from "react";

export interface RouteType {
  id: string;
  title: string;
  type: string;
  icon?: ReactNode;
  path: string;
  Component: LazyExoticComponent<ComponentType<any>>;
}
