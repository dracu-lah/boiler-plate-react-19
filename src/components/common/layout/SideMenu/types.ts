import { RegisteredRouter, RouteIds, RoutePaths } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";
export type RoutePath = RoutePaths<RegisteredRouter["routeTree"]>;
export type RouteId = RouteIds<RegisteredRouter["routeTree"]>;
export interface SubMenuItem {
  label: string;
  route: RoutePath;
  icon?: LucideIcon;
  subMenu?: SubMenuItem[];
}

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  route?: RoutePath;
  subMenu?: SubMenuItem[];
}
