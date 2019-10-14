import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import HomeCalendar from "./Home-Calendar.jsx";
import HomeItems from "./Home-Items.jsx";
import front from "../public/mainFront.png";
import calendar from "../public/calendar.png";
import list from "../public/list.png";
import shopping from "../public/shopping-cart.png";
import time from "../public/time.png";
import diagram from "../public/diagram.png";
import family from "../public/family.png";
import "./Home.css";

const Home = props => {
  if (props.currentUser) {
    return (
      <div className="container">
        <h1>Welcome {props.currentUser.username}</h1>
        <HomeCalendar userName={props.currentUser.username}></HomeCalendar>
        <div className="float-left ml-3">
          <h3>Don't forgget what is in your shopping list</h3>
          <HomeItems></HomeItems>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <img
          className="imgMainFront"
          src={front}
          alt="Image with green leaves"
        />
        <h1 className="title">
          Time spent with <span className="some">family</span> is worth
        </h1>
        <br />
        <h1 className="title1">every second</h1>
        <br />
        <h2 className="subtitle">Spent more time living...</h2>
        <h2 className="othertitle">... And less time organizing</h2>
        <div className="row">
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={calendar}
              width="80"
              height="80"
              alt="image of a calendar in black and white"
            />
          </div>
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={list}
              width="80"
              height="80"
              alt="image of a list in black and white"
            />
          </div>
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={shopping}
              width="80"
              height="80"
              alt="image of a shopping cart in black and white"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Don't miss out on <br />
              an <span className="other">event</span> again
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Share responsibilities <br />
              with your <span className="other">family</span>
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Be more <span className="other">efficient</span>
              <br />
              when shopping
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={time}
              width="80"
              height="80"
              alt="image of a clock in black and white"
            />
          </div>
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={diagram}
              width="80"
              height="80"
              title="Brand image"
              alt="image of a diagram in black and white"
            />
          </div>
          <div className="col-lg-4 col-x1-4 public">
            <img
              src={family}
              width="80"
              height="80"
              title="Brand image"
              alt="image of a family in black and white"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Save <span className="other">time</span>
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              Stay <span className="other">organize</span>
            </p>
          </div>
          <div className="col-lg-4 col-x1-4 divText">
            <p className="minortext">
              <span className="other">Be one</span> with your <br />
              family
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(Home);
