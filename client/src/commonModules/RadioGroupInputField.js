import React from 'react';
import PropTypes from 'prop-types';

const RadioGroupInputField = ({ name, id, defaultValue, onChange, defaultChecked, label }) => {
  return (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="radio" name={name} id={id} defaultValue={defaultValue} onChange={onChange} defaultChecked={defaultChecked} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};
RadioGroupInputField.prototype = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default RadioGroupInputField;
