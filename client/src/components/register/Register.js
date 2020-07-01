import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/auth.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInputField from '../../commonModules/TextInputField';
import RadioGroupInputField from '../../commonModules/RadioGroupInputField';
import ButtonField from '../../commonModules/ButtonField';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      role: 'user',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange(even) {
    this.setState({
      [even.target.name]: even.target.value,
    });
  }

  onSubmit(even) {
    const newData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role,
    };
    if (!newData.password2) {
      this.setState({
        errors: {
          password2: 'Password Confirm not empty',
        },
      });
    } else if (newData.password !== newData.password2) {
      this.setState({
        errors: {
          password2: 'Password and confirm password must be the same',
        },
      });
    } else {
      const newUser = {
        email: newData.email,
        username: newData.username,
        password: newData.password,
        role: newData.role,
      };
      even.preventDefault();
      this.props.registerUser(newUser, this.props.history);
    }
  }

  onLoginClick(even) {
    even.preventDefault();
    this.props.history.push('/');
  }
  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Register</h1>
            <p className="lead text-center text-warning small-title">Japanese Quiz　ようこそ</p>
            <form className="mt-4" onSubmit={this.onSubmit}>
              <TextInputField name="email" type="email" placeholder="Email Address" onChange={this.onChange} value={this.state.email} error={errors.email} />
              <TextInputField name="username" type="text" placeholder="Username" onChange={this.onChange} value={this.state.username} error={errors.username} />
              <TextInputField
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
              />
              <TextInputField
                name="password2"
                type="password"
                placeholder="Password confirm"
                onChange={this.onChange}
                value={this.state.password2}
                error={errors.password2}
              />
              <RadioGroupInputField name="role" id="role1" defaultValue="user" onChange={this.onChange} defaultChecked label="User" />
              <RadioGroupInputField name="role" id="role2" defaultValue="admin" onChange={this.onChange} label="Admin" />

              <ButtonField
                type="button"
                btnColor="btn-success"
                btnCol="col-12"
                btnOther="d-block mx-auto mt-4"
                defaultValue="Sign in"
                onClick={this.onSubmit}
                btnStyle={{ height: '2.8em' }}
              />
              <ButtonField
                type="button"
                btnColor="btn-success"
                btnCol="col-12"
                btnOther="d-block mx-auto mt-4"
                defaultValue="Login"
                onClick={this.onLoginClick}
                btnStyle={{ height: '2.8em' }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
