import React from "react";
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import './NavBar.css';

const NavBar = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src={"https://github.com/acbeltrans/Proyecto3/blob/master/imports/images/icon.png?raw=true"} width="50" height="50" title="Brand image" alt="Navegation link with the image of our app"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="Members">Members</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Calendar">Calendar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Tasks">Tasks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Shopping-List">Shopping List</a>
              </li>
            </ul>
            <AccountsUIWrapper></AccountsUIWrapper>
          </div>
        </nav>
      </div>
    );
  }
  else {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="nav-link" href=""><img src={"https://github.com/acbeltrans/Proyecto3/blob/master/imports/images/icon.png?raw=true"} width="50" height="50" title="Brand image" alt="Navegation link with the image of our app"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
            </div>
            <AccountsUIWrapper></AccountsUIWrapper>
          </div>
        </nav>
      </div>
    );
  }
};

export default withTracker(() => {

  return {
    currentUser: Meteor.user(),
  };
})(NavBar);