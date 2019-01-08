import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    // Redirect to login
    window.location.href = "/login";
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  render() {
    const { user } = this.props.auth;

    let dashboardContent;

    if (user === null) {
      dashboardContent = <h1>dasdas</h1>;
    } else {
      // User is logged in but has no user
      dashboardContent = (
        <div>
          <h2>Welcome {user.name}</h2>
          <p>Welcome to your Dashboard</p>

          <Link
            to="/login"
            className="btn btn-lg btn-info"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </Link>
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{dashboardContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
