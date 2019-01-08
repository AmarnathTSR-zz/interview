import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
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
              <Link
                to="/login"
                id="download-button"
                className="btn-large waves-effect waves-light teal lighten-1"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
