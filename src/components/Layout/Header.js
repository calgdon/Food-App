import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Callum's Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
}

export default Header;
