import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { loginSchema } from "../../Schemas/registrationSchema";

const Login = () => {
  const [values, setValues] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
    // register(values);
  };
  return (
    <section className="account-form-inner">
      <Formik
        initialValues={values || initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ values, errors, touched, isSubmitting }) => (
          <Form className="add-new-task-form-wrap">
            <div className="add-single-task-wrap account-page">
              <div>
                <label htmlFor="email-address">Email address</label>
                <Field
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required=""
                  placeholder="Email address"
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </span>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required=""
                  placeholder="Password"
                />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </span>
              </div>

              <button
                type="submit"
                disabled={
                  values?.password === values?.confirmPassword &&
                  values?.password !== ""
                    ? false
                    : true
                }
                className=""
              >
                Create Account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Login;
