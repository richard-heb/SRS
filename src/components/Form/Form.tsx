import * as React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

export enum ErrorTypes {
  Required = 'Required',
}

export type BasicErrorCollection = {
  email?: string;
};

export const BasicForm: React.FC = () => (
  <div>
    <Formik
      initialValues={{ upc: '' }}
      validate={values => {
        const errors: BasicErrorCollection = {};

        if (!values.upc) {
          errors.email = ErrorTypes.Required;
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
