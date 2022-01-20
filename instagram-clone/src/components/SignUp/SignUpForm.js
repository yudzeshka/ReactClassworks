import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { doc, setDoc } from "firebase/firestore"; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { auth, db } from '../../firebase';

export default class SignUpForm extends Component {
  handleSubmit = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).then(
      async () => {
        await updateProfile(auth.currentUser, { displayName: values.username });
        // add document to collection with specified id
        setDoc(doc(db, 'users', values.username), {
          username: values.username,
          profileSrc: '',
          fullName: '',
          postCount: 0,
          followersCount: 0,
          followingCount: 0,
        });
      }
    );
  };

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{ email: '', password: '', username: '' }}
      >
        <Form>
          <Field
            name="email"
            className="border border-black"
            placeholder="Email"
          />
          <Field
            name="username"
            className="border border-black"
            placeholder="Username"
          />
          <Field
            name="password"
            className="border border-black"
            placeholder="Password"
            type="password"
          />

          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
    );
  }
}
