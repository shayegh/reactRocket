import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import "./styles/Helper.css";
import { Row, Col, Button } from "antd";
import MyHeader from './sections/MyHeader';

function UserForm({ values, errors, touched }) {
  return (
    <Row type="flex" justify="center">
      <Col span={23}>
      <MyHeader selectedMenu="morepage:registerform" />
      <Row type="flex" justify="center">
      <Col span={12}>
        <Form className="App">
          <div>
            {touched.email && errors.email && (
              <p styleName="Error">{errors.email}</p>
            )}
            <Field type="email" name="email" placeholder="Email" />
          </div>

          <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
          </div>

          <label>
            <Field
              type="checkbox"
              name="newsletter"
              checked={values.newsletter}
            />
            Join our newsletter
          </label>
          <br />
          <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </Field>
          <br />
          <button>click</button>
        </Form>
        </Col>
        </Row>
      </Col>
    </Row>
  );
}

export const FormikApp = withFormik({
  mapPropsToValues({ email, password, newsletter, plan }) {
    return {
      email: email || "",
      password: password || "",
      newsletter: newsletter || true,
      plan: plan || "free"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(3)
  }),
  handleSubmit(values, { setErrors, resetForm, setSubmitting }) {
    setTimeout(() => {
      if (values.email === "ali@abc.com") {
        setErrors({ email: "Email is already taken" });
      } else {
        resetForm();
      }
    }, 2000);
    console.log(values);
  }
})(UserForm);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<FormikApp />, rootElement);
