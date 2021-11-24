import React from "react";
import { slide as Menu } from "react-burger-menu";
import MyLink from "../../shared/MyLink";
import "./Sidebar.css"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <MyLink to="/" >Meal</MyLink>

      <a className="menu-item" href="/burgers">
        Burgers
      </a>

      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>

      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};