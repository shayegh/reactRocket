import React from "react";
import { Form, Field } from "formik";
import { AntDatePicker, AntInput, AntSelect, AntTimePicker } from "./AntFields";
import { dateFormat, timeFormat } from "./FieldFormats";
import { validateDate, validateEmail, isRequired } from "./ValidateFields";

export default ({ handleSubmit, values, submitCount }) => (
  <Form className="form-container" onSubmit={handleSubmit}>
    <Field
      component={AntInput}
      name="email"
      type="email"
      label="Email"
      validate={validateEmail}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntDatePicker}
      name="bookingDate"
      label="Booking Date"
      defaultValue={values.bookingDate}
      format={dateFormat}
      validate={validateDate}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntTimePicker}
      name="bookingTime"
      label="Booking Time"
      defaultValue={values.bookingTime}
      format={timeFormat}
      hourStep={1}
      minuteStep={5}
      validate={isRequired}
      submitCount={submitCount}
      hasFeedback
    />
    <Field
      component={AntSelect}
      name="bookingClient"
      label="Client"
      defaultValue={values.bookingClient}
      selectOptions={values.selectOptions}
      validate={isRequired}
      submitCount={submitCount}
      tokenSeparators={[","]}
      style={{ width: 200 }}
      hasFeedback
    />
    <div className="submit-container">
      <button className="ant-btn ant-btn-primary" type="submit">
        Submit
      </button>
    </div>
  </Form>
);
