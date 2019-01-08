import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { contactForm } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject
    };
    console.log(formData);

    this.props.contactForm(formData, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="Contact">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Contact Us</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                  icon="fas fa-address-card"
                />
                <TextFieldGroup
                  placeholder="email"
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  icon="fas fa-user"
                />

                <TextFieldGroup
                  placeholder="subject"
                  name="subject"
                  type="text"
                  value={this.state.subject}
                  onChange={this.onChange}
                  error={errors.subject}
                  icon="fas fa-key"
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  contactForm: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapSetStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapSetStateToProps,
  { contactForm }
)(withRouter(Contact));
