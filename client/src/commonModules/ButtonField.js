import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const ButtonField = ({ type, btnColor, btnCol, btnOther, defaultValue, onClick, btnStyle }) => {
  return (
    // <input className="btn btn-primary col-7 d-block mx-auto mb-4" type="button" defaultValue="Login" onClick={this.onLoginClick} style={{ height: '2.8em' }} />
    <div className="form-group">
      <input type={type} className={classnames('btn', btnColor, btnCol, btnOther)} defaultValue={defaultValue} onClick={onClick} style={btnStyle} />
    </div>
  );
};

ButtonField.defaultValue = {
  type: 'button',
  btnColor: 'btn-primary',
};

ButtonField.propTypes = {
  type: PropTypes.string.isRequired,
  btnColor: PropTypes.string.isRequired,
  btnCol: PropTypes.string,
  btnOther: PropTypes.string,
  defaultValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnStyle: PropTypes.object,
};

export default ButtonField;
