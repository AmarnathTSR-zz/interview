import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/authActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { users, loading } = this.props.auth;
    let profileItems;
    let spinners;
    if (users === null || loading) {
      spinners = <Spinner />;
    } else {
      if (users.length > 0) {
        let a = 0;
        profileItems = users.map(user => (
          <ProfileItem serial={(a = a + 1)} key={user._id} profile={user} />
        ));
      } else {
        profileItems = <h4>No users found...</h4>;
      }
    }

    return (
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">
                List of Registered Users
              </h1>
              {spinners}
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created Date</th>
                  </tr>
                </thead>
                <tbody>{profileItems}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
