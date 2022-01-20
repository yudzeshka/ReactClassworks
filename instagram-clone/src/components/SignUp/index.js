import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
  render() {
    const { currentUser } = this.props;
    return currentUser ? <Navigate to="/" /> : <SignUpForm />;
  }
}
