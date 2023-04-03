import React from "react";
import {
  SearchRounded,
  ShoppingCartRounded,
  MenuTwoTone,
} from "@mui/icons-material";

import avat from "../assets/avat.png";

const Header = () => {
  return (
    <header className="header">
      <h3 style={{ color: "#283848" }}>delivero</h3>
      {/* searchIcon */}
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search..." />
      </div>
      {/* cart icon */}
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>77</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src={avat} alt="avat" className="profilePic" />
        </div>
        <h3 className="userName">Sirojiddin Egamberdiev</h3>
      </div>
      <div className="toggleMenu">
        <MenuTwoTone className="toggleIcon" />
      </div>
    </header>
  );
};

export default Header;
