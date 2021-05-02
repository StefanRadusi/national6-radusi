import { AppLogo } from "../AppLogo/AppLogo";
import { Link } from "react-router-dom";

import "./Header.css";

// Link component, if in Router context will trigger the routing mechanism by changing the url

export function Header() {
  return (
    <div className="app-header">
      <AppLogo />
      <p className="app-header__title">To Do Apppp</p>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
