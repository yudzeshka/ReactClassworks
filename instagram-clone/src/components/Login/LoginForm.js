import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase';

export default class LoginForm extends Component {
  handleSubmit = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{ email: '', password: '' }}
      >
        <Form>
          <Field name="email" className="border border-black" />
          <Field name="password" className="border border-black" />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    );
  }
}
