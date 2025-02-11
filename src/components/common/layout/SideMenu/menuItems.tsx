import { CircleUser, Home } from "lucide-react";
import type { MenuItem as MenuItemType } from "./types";
import MenuItem from "./MenuItem";

const MenuItems = () => {
  return menuItems.map((item, index) => <MenuItem item={item} key={index} />);
};

export const menuItems: MenuItemType[] = [
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

export default MenuItems;
