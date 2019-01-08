import React, { Component } from "react";

import { Link } from "react-router-dom";
class Success extends Component {
  render() {
    return (
      <div id="index-banners" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">
              E-Mail Received Success
            </h1>
            <div className="row center">
              <h5 className="header col s12 light">
                I will get back to you as early as possible It might take 24 to
                48 hours or even more to reply you back depending upon my work
                schedule.
              </h5>
            </div>
            <div className="row center">
              <Link
                to="/"
                id="download-button"
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
