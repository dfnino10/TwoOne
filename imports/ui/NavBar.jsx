import React from "react";
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import icon from "../images/icon.png";
import "./NavBar.css";

const NavBar = props => {
  if (props.currentUser) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/">
            <img
              className="icon"
              src={icon}
              width="55"
              height="55"
              title="Brand image"
              alt="Navegation link with the icon of our app"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="Profile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Calendar">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Tasks">
                  Tasks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Shopping-List">
                  Shopping List
                </a>
              </li>
            </ul>
            <div className="mr-5 pr-5">
              <AccountsUIWrapper></AccountsUIWrapper>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/">
            <img
              className="icon"
              src={icon}
              width="55"
              height="55"
              title="Brand image"
              alt="Navegation link with the icon of our app"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0"></div>
            <div className="mr-5 pr-5">
              <AccountsUIWrapper></AccountsUIWrapper>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(NavBar);
