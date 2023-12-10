import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Searchbar from "./Searchbar";
import Logo from "../assets/logo.png";

export default function NavBar({ onSearch, userData }) {
  return (
    <>
      <nav>
        <div className="nav-items">
          <NavLink to={"/products"}>
            <div className="logo-container">
              <img className="logo" alt="logo" src={Logo} />
            </div>
          </NavLink>
          <ul className="nav-links">
            {userData?.firstname ? (
              <NavLink to={"/products"}>
                <i className="bi bi-box-arrow-left"></i> Log Out ({userData.firstname} {userData.lastname})
              </NavLink>
            ) : (
              <NavLink to={"/login"}>
                <i className="bi bi-box-arrow-in-right"></i> Sign In
              </NavLink>
            )}
            <NavLink to={"/account/profile-settings"}>
              <i className="bi bi-person-circle"></i> Profile
            </NavLink>
          </ul>
        </div>
        <Searchbar className="searchbar" products={onSearch} />
      </nav>
      <Outlet />
    </>
  );
}
