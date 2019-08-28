import React from "react";
import { reveal as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./SettingsMenu.css";

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu width={"25%"}>
        <Link id="home" className="menu-item" to="/settings">
          Settings
        </Link>
        <Link id="about" className="menu-item" to="/bucket-list">
          Bucket List
        </Link>
        <Link id="contact" className="menu-item" to="/categoriesCard">
          Categories
        </Link>
        <Link onClick={this.showSettings} className="menu-item--small" to="">
          Logout
        </Link>
      </Menu>
    );
  }
}

export default BurgerMenu;
