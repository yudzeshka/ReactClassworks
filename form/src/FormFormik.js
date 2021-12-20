import React, { Component } from "react";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

import FormInput from "./FormInput";
import FormCheckbox from "./FormCheckbox";

const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "russian", label: "Russian" },
  { value: "belorussian", label: "Belorussian" },
  { value: "polish", label: "Polish" },
];

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export default class FormFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
          gender: "female",
          languages: ["russian"],
          termsAndConditions: false,
          country: [],
        }}
        onSubmit={(formValues) => alert(JSON.stringify(formValues))}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .required("Name is required")
            .max(20, "Name should be less than 20 characters"),
          email: Yup.string()
            .email("Email should be in correct format")
            .required("Email is required"),
          password: Yup.string()
            .matches(
              passwordRegex,
              "Password should be more than 8 characters and contain at least one number and one letter"
            )
            .required("Password is required"),
          repeatPassword: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords should match"
          ),
          termsAndConditions: Yup.boolean().isTrue(
            "You should accept our terms and conditions"
          ),
        })}
      >
        {({ isValid }) => (
          <Form>
            <Field name="username" component={FormInput} label="Name" />

            <Field name="email" component={FormInput} label="Email" />

            <Field
              name="password"
              component={FormInput}
              label="Password"
              type="password"
            />

            <Field
              name="repeatPassword"
              component={FormInput}
              label="Repeat password"
              type="password"
            />

            <fieldset>
              <legend>Gender</legend>

              <div>
                <Field type="radio" name="gender" value="female" id="female" />
                <label for="female">Female</label>
              </div>

              <div>
                <Field type="radio" name="gender" value="male" id="male" />
                <label for="male">Male</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Languages</legend>

              <Field
                name="languages"
                options={LANGUAGES}
                component={FormCheckbox}
              />
            </fieldset>

            <div>
              <Field as="select" name="country" multiple={true}>
                <option value="belarus">Belarus</option>
                <option value="russia">Russia</option>
                <option value="poland">Poland</option>
              </Field>
            </div>

            <Field
              name="termsAndConditions"
              component={FormCheckbox}
              label="I Agree with Terms and Conditions"
            />

            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
