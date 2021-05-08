import { Component } from "react";
import { FormField } from "../FormField/FormField";
import { FormMessage } from "../FormMessage/FormMessage";
import { SendButton } from "../SendButton/SendButton";

import "./Form.css";

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    showMessage: false,
    checkValues: false,
  };

  setFieldValue = (fieldName, fieldValue) => {
    this.setState({ [fieldName]: fieldValue });
  };

  handleOnSend = () => {
    this.setState({ checkValues: true });

    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.message
    ) {
      this.setState({ showMessage: true });
    }
  };

  handleCloseMessage = () => {
    this.setState({ showMessage: false });
  };

  isFieldInvalid = (value) => {
    if (this.state.checkValues && !value) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className="form">
        <FormField
          label="FIRST NAME"
          isInvalid={this.isFieldInvalid(this.state.firstName)}
          onChange={(value) => this.setFieldValue("firstName", value)}
        />
        <FormField
          label="LAST NAME"
          isInvalid={this.isFieldInvalid(this.state.lastName)}
          onChange={(value) => this.setFieldValue("lastName", value)}
        />
        <FormField
          label="EMAIL"
          isInvalid={this.isFieldInvalid(this.state.email)}
          onChange={(value) => this.setFieldValue("email", value)}
        />
        <FormField
          label="MESSAGE"
          isTextarea
          isInvalid={this.isFieldInvalid(this.state.message)}
          onChange={(value) => this.setFieldValue("message", value)}
        />
        <SendButton onClick={this.handleOnSend} />
        {this.state.showMessage ? (
          <FormMessage onClose={this.handleCloseMessage} />
        ) : null}
      </div>
    );
  }
}
