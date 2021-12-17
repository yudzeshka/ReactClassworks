import React, { Component } from 'react';

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formValues: {
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
        gender: 'female',
        termsAndConditions: false,
      },
      errors: {},
    };
  }

  validateValues = () => {
    const { formValues } = this.state;

    const errors = {};

    if (formValues.username.trim() === '') {
      errors.username = 'Name is required';
    }

    if (formValues.username.trim().length > 20) {
      errors.username = 'Name should be less than 20 characters';
    }

    if (formValues.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (!emailRegex.test(formValues.email.trim())) {
      errors.email = 'Email should be in correct format';
    }

    if (!passwordRegex.test(formValues.password.trim())) {
      errors.password =
        'Password should be more than 8 characters and contain at least one number and one letter';
    }

    if (formValues.password !== formValues.repeatPassword) {
      errors.repeatPassword = 'Passwords should match';
    }

    if (!formValues.termsAndConditions) {
      errors.termsAndConditions = 'You should accept our terms and conditions';
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { formValues } = this.state;

    const errors = this.validateValues();

    if (Object.keys(errors).length) {
      this.setState({
        errors,
      });

      return;
    }

    alert(JSON.stringify(formValues));
  };

  handleInputChange = (e) => {
    const { formValues } = this.state;
    const { name, value } = e.target;

    this.setState({
      formValues: {
        ...formValues,
        [name]: value,
      },
    });
  };

  handleCheckboxChange = (e) => {
    const { formValues } = this.state;
    const { name, checked } = e.target;

    this.setState({
      formValues: {
        ...formValues,
        [name]: checked,
      },
    });
  };

  render() {
    const { formValues, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={this.handleInputChange}
          />

          {errors.username ? <p>{errors.username}</p> : null}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={this.handleInputChange}
          />
          {errors.email ? <p>{errors.email}</p> : null}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={this.handleInputChange}
          />

          {errors.password ? <p>{errors.password}</p> : null}
        </div>

        <div>
          <label>Repeat password</label>
          <input
            type="password"
            name="repeatPassword"
            value={formValues.repeatPassword}
            onChange={this.handleInputChange}
          />

          {errors.repeatPassword ? <p>{errors.repeatPassword}</p> : null}
        </div>

        <fieldset>
          <legend>Gender</legend>

          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              checked={formValues.gender === 'female'}
              onChange={this.handleInputChange}
            />
            <label for="female">Female</label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              checked={formValues.gender === 'male'}
              onChange={this.handleInputChange}
            />
            <label for="male">Male</label>
          </div>
        </fieldset>

        <div>
          <input
            type="checkbox"
            name="termsAndConditions"
            id="termsAndConditions"
            checked={formValues.termsAndConditions}
            onChange={this.handleCheckboxChange}
          />
          <label for="termsAndConditions">
            I Agree with Terms and Conditions
          </label>

          {errors.termsAndConditions ? <p>{errors.termsAndConditions}</p> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
