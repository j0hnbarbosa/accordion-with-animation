import React from 'react';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import { Input } from './styles';

const FieldInput = (props) => {
  const [, meta] = useField(props);
  const { touched, error } = meta;
  return (
    <Field
      as={Input}
      {...props}
      error={(touched && error) ? 'true' : ''}
    />
  );
};

FieldInput.propTypes = {
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FieldInput;
