import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Settings
      </Link>

      <Link className="menu-item" to="/bucket-list">
        Bucket List
      </Link>

      <Link className="menu-item" to="/categories">
        Categories
      </Link>

      <Link className="menu-item" to="/login">
        Logout
      </Link>
    </Menu>
  );
};
