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
        // else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
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
        <Form className='form-inline' >
          <button type="submit" disabled={isSubmitting} >
            UPC
          </button>
          <Field type="upc" name="upc" className='form-control' style={{borderRadius:'1px', width: 'fill'}} />
          <ErrorMessage name="upc" component="div" />
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;