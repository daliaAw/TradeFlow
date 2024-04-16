import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../utilities/users-service";
import {
  getBusinessUser,
  businessSignUp,
} from "../../utilities/businessUser-api";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    isBusiness: false,
    businessName: "",
    businessPhone: "",
    businessAddress: "",
    error: "",
  };


  handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {
        name,
        email,
        password,
        isBusiness,
        businessName,
        businessPhone,
        businessAddress,
      } = this.state;
      const formData = {
        name,
        email,
        password,
        isBusiness,
        businessName,
        businessPhone,
        businessAddress,
      };
      const user = this.state.isBusiness
        ? await businessSignUp(formData)
        : await signUp(formData);
      this.props.setUser(user);
      if (user && isBusiness) {
        const businessUser = await getBusinessUser(user.id);
        this.props.setBusinessUser(businessUser);
      }
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  const navigate = useNavigate()
  navigate("/", {state: this.state})
  };

  renderBusinessFields = () => {
    const { isBusiness } = this.state;
    if (isBusiness) {
      return (
        <>
          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            value={this.state.businessName}
            onChange={this.handleChange}
            required
          />
          <label>Business Phone</label>
          <input
            type="tel"
            name="businessPhone"
            value={this.state.businessPhone}
            onChange={this.handleChange}
            required
          />
          <label>Business Address</label>
          <input
            type="text"
            name="businessAddress"
            value={this.state.businessAddress}
            onChange={this.handleChange}
            required
          />
        </>
      );
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    const buttonText = this.state.isBusiness
      ? "Create Business Account"
      : "SIGN UP";

    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <br />
            <div>
              <input
                type="checkbox"
                name="isBusiness"
                checked={this.state.isBusiness}
                onChange={this.handleChange}
              />
              <label>Sign up as a business?</label>
            </div>
            {this.renderBusinessFields()}
            <button type="submit" disabled={disable}>
              {buttonText}
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
