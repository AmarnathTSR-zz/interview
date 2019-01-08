import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const { serial } = this.props;

    return (
      <tr>
        <td>{serial}</td>
        <td>{profile._id}</td>
        <td>{profile.name}</td>
        <td>{profile.email}</td>
        <td>{profile.Date}</td>
      </tr>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
