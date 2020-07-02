import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const validFeedback = {
  display: 'block',
  color: 'red',
  fontSize: '100%',
  marginTop: '0.1rem',
};

const TextInputField = ({ name, placeholder, value, error, info, type, onChange, disabled, readonly }) => {
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
        readOnly={readonly}
      />
      {error && (
        <div className="valid-feedback" style={validFeedback}>
          {error}
        </div>
      )}
    </div>
  );
};
TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.string,
  placeholder: PropTypes.string,
};
TextInputField.defaultProps = {
  type: 'text',
};

export default TextInputField;
