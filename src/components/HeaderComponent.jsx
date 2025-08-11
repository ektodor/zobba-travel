import { NavLink } from "react-router";

export function HeaderComponent() {
  return (
    <header>
      <div className="flex flex-wrap gap-2">
        <NavLink to="/index">Index</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cart">cart</NavLink>
        <NavLink to="/location-search">LocationSearch</NavLink>
        <NavLink to="/product">ProductionIntro</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/user-info">UserInfo</NavLink>
      </div>
    </header>
  );
}
