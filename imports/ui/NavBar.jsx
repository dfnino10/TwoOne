import React from "react";
import AccountsUIWrapper from "./AccountsUIWrapper";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="nav-link" href=""><img src={"https://github.com/acbeltrans/Proyecto3/blob/master/imports/images/icon.png?raw=true"} width="50" height="50" title="Brand image" alt="Navegation link with the image of our app"/></a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav mr-auto mt-2 mt-lg-0">
          </div>
          <AccountsUIWrapper></AccountsUIWrapper>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;