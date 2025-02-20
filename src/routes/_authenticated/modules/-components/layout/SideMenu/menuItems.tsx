import MenuItem from "./MenuItem";
import { menuItemsConfig } from "./menuItemsConfig";

const MenuItems = () => {
  return menuItemsConfig.map((item, index) => (
    <MenuItem item={item} key={index} />
  ));
};

export default MenuItems;
