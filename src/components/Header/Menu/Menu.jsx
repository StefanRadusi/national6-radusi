import { MenuButton } from "./MenuButton/MenuButton";
import { MenuFlyout } from "./MenuFlyout/MenuFlyout";

import "./Menu.css";

export const Menu = () => {
  return (
    <div className="app-menu">
      <MenuButton />
      <MenuFlyout />
    </div>
  );
};
