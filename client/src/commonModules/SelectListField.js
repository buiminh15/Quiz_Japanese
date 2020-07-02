import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const validFeedback = {
  display: 'block',
  color: 'red',
  fontSize: '100%',
  marginTop: '0.1rem',
};

const SelectListField = ({ name, value, title, error, onChange, option }) => {
  const selectOptions = option.map((op) => (
    <option key={op.value} value={op.value}>
      {op.label}
    </option>
  ));
  return (
    <div className="form-group mb-4">
      <div className="row text-left">
        <label>{title}</label>
      </div>
      <div className="row">
        <select
          className={classnames('form-control form-control-lg', {
            'is-invalid': error,
          })}
          name={name}
          value={value}
          onChange={onChange}
        >
          {selectOptions}
        </select>
        {error && (
          <div className="valid-feedback" style={validFeedback}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

SelectListField.propTypes = {
  name: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  error: Proptypes.string,
  onChange: Proptypes.func.isRequired,
  option: Proptypes.array.isRequired,
};

export default SelectListField;
