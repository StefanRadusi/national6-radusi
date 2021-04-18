import menuSvg from "./menu.svg";

import "./MenuButton.css";

export const MenuButton = () => {
  return (
    <div className="app-menu-button">
      <img src={menuSvg} />
    </div>
  );
};
