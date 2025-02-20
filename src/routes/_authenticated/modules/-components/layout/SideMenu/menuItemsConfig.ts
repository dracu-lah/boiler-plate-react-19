import { CircleUser, Home, LucideIcon } from "lucide-react";
import { RoutePath } from "./types";
interface SubMenuItemType {
  label: string;
  route: RoutePath;
  icon?: LucideIcon;
  subMenu?: SubMenuItemType[];
}
interface MenuItemType {
  icon: LucideIcon;
  label: string;
  route?: RoutePath;
  subMenu?: SubMenuItemType[];
}
export const menuItemsConfig: MenuItemType[] = [
  {
    icon: Home,
    label: "General Ledger",
    route: "/modules/accounting/general-ledger",
  },
  {
    icon: CircleUser,
    label: "Users",
    subMenu: [
      {
        label: "Manage Roles",
        route: "/modules/users/roles/",
      },

      {
        label: "Manage Users",
        route: "/modules/users/users/",
      },
    ],
  },
];
