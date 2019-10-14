import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";
import Footer from "./Footer.jsx";
import profile from "../images/profile.png";
import "./Profile.css";

const Profile = props => {
  console.log(props.users);
  return (
    <div className="container">
      <h1 className="profileTitle">My profile</h1>
      <div className="row">
        <div className="col-xs-6">
          <img
            className="profileImage"
            src={profile}
            width="200"
            height="200"
            alt="profile image"
          />
        </div>
        <div className="col-xs-6 profile">
          {props.users.map(u => (
            <div key={u._id}>
              <div class="row">
                <h6 className="profileText">Username: </h6>
                <h6 className="profileText">{u.username}</h6>
              </div>
              <div className="row">
                <h6 className="profileText">Name: </h6>
                <h6 className="profileText">{u.profile.name}</h6>
              </div>
              <div className="row">
                <h6 className="profileText">Surname: </h6>
                <h6 className="profileText">{u.profile.surname}</h6>
              </div>
              <div className="row">
                <h6 className="profileText">Gender: </h6>
                <h6 className="profileText">{u.profile.gender}</h6>
              </div>
              <div className="row">
                <h6 className="profileText">Country: </h6>
                <h6 className="profileText">{u.profile.country}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

Profile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const ProfileWrapper = withTracker(() => {
  return {
    users: Meteor.users.find({}).fetch()
  };
})(Profile);

export default ProfileWrapper;
