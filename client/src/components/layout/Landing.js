import React, { Component } from "react";
class Landing extends Component {
  render() {
    return (
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">
              Interview Task
            </h1>
            <div className="row center">
              <h2 className="header col s12 light">
                Am using React, Redux, Nodejs, ExpressJS, MongoDB
              </h2>
            </div>
            <div className="row center">
              <a
                href="/login"
                id="download-button"
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
