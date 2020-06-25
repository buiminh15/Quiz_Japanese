import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextInputField = ({ name, placeholder, value, error, info, type, onChange, disabled }) => {
  return (
    <div className="form-group mb-4">
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error,
        })}
        style={{ height: '2.8em' }}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-danger mt-2">{info}</small>}
      {error && <div className="valid-feedback">{error}</div>}
    </div>
  );
};
// TextInputField.PropTypes = {
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func,
//   value: PropTypes.string,
//   info: PropTypes.string,
//   error: PropTypes.string,
//   disabled: PropTypes.string,
//   placeholder: PropTypes.string,
// };
TextInputField.defaultProps = {
  type: 'text',
};

export default TextInputField;
