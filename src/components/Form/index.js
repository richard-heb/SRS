import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Basic = () => (
  <div>
    <Formik
      initialValues={{ upc: '' }}
      validate={values => {
        let errors = {};
        if (!values.upc) {
          errors.email = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <button
            type="submit"
            disabled={isSubmitting}
            style={{ borderRadius: '2px', border: 'none' }}
          >
            UPC
          </button>

          <Field
            type="upc"
            name="upc"
            className="form-control"
            style={{ borderRadius: '2px', width: 'fill', border: 'none' }}
          />

          <ErrorMessage name="upc" component="div" />
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
