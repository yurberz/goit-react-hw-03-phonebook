import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "./ContactFormStyled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: "", number: "" });
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form id="contact" onSubmit={this.handleSubmit}>
        <label className="label">
          Name
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Type to name"
          />
        </label>

        <label className="label">
          Phone number
          <input
            className="input"
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Type to phone(e.g. 111-11-11)"
          />
        </label>

        <button type="submit" className="submitBtn">
          Add contact
        </button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
