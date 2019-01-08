import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    const { serial } = this.props;

    return (
      <tr>
        <th>{serial}</th>
        <th scope="row">{profile._id}</th>
        <th scope="row">{profile.name}</th>
        <th scope="row">{profile.email}</th>
        <th scope="row">{profile.Date}</th>
      </tr>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
