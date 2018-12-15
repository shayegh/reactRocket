import './styles/Helper.css';
import { MoreResources, DisplayFormikState } from './utils/Helper';

import { Row, Col, Button } from 'antd';

import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MyHeader from './sections/MyHeader';

export const UserForm = () => (
  <Row type="flex" justify="center" >
    <Col span={23}>
      <MyHeader selectedMenu="morepage:userform" />
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: 'block' }}>
                Email
            </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email ? 'text-input error' : 'text-input'
                }
              />
              {errors.email &&
                touched.email && <div className="input-feedback">{errors.email}</div>}
              <Button
                type="danger"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </Button>
              <Button type="primary" onClick={handleSubmit} disabled={isSubmitting}>
                  Submit
              </Button>
              <DisplayFormikState {...props} />
            </form>
          );
        }}
      </Formik>
    </Col>
  </Row>
);