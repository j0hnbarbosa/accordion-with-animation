import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import moment from 'moment';


import SemanticDatepicker from 'react-semantic-ui-datepickers';

const FieldDatapicker = ({ setFieldValue, ...props }) => {
  const [, meta] = useField(props);
  const { touched, error } = meta;
  return (
    <SemanticDatepicker
      {...props}
      error={touched && error}
      onChange={(e, data) => {
        const { value } = data;
        // eslint-disable-next-line no-console
        console.log(value);

        setFieldValue(props.name, value ? moment(value).format('YYYY-MM-DD') : '', true);
      }}
    />
  );
};

FieldDatapicker.propTypes = {
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

export default FieldDatapicker;
