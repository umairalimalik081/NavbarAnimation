import React from "react";
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} />

            // <li className="menu-items" key={index}>
            //   <a href={"menu.url"}>{menu.title}</a>
            // </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
