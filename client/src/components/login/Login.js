import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextInputField from '../../commonModules/TextInputField';
import ButtonField from '../../commonModules/ButtonField';
import { loginUser } from '../../actions/auth.actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount--', this.props);
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      switch (nextProps.auth.user.role) {
        case 'admin':
          this.props.history.push('/admin');
          break;
        case 'user':
          this.props.history.push('/user');
          break;
        default:
          break;
      }
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(even) {
    this.setState({
      [even.target.name]: even.target.value,
    });
  }

  onLoginClick(even) {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    even.preventDefault();
    this.props.loginUser(userData);
  }

  onRegisterClick(even) {
    even.preventDefault();
    this.props.history.push('/register');
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Login</h1>
            <p className="lead text-center text-warning small-title">Japanese Quiz　ようこそ</p>
            <form className="mt-4">
              <TextInputField name="email" type="email" placeholder="Email Address" onChange={this.onChange} value={this.state.email} error={errors.email} />
              <TextInputField
                name="password"
                type="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
              />

              <ButtonField
                type="button"
                btnColor="btn-primary"
                btnCol="col-7"
                btnOther="d-block mx-auto mb-4"
                defaultValue="Login"
                onClick={this.onLoginClick}
                btnStyle={{ height: '2.8em' }}
              />
              <ButtonField
                type="button"
                btnColor="btn-primary"
                btnCol="col-7"
                btnOther="d-block mx-auto mb-4"
                defaultValue="Sign in"
                onClick={this.onRegisterClick}
                btnStyle={{ height: '2.8em' }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors,
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
