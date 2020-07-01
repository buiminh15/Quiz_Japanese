import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInputField from '../../commonModules/TextInputField';
import ButtonField from '../../commonModules/ButtonField';
import { loginUser } from '../../actions/auth.actions';
import ErroModal from '../errors_modal/error_modal';
import { Button, Modal } from 'react-bootstrap';

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
    this.errModal = React.createRef();
  }

  componentDidMount() {
    // console.log('componentDidMount--', this.props);
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
      if (nextProps.errors.verify) {
        this.errModal.showErrModal(nextProps.errors.verify);
      }
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
    // this.props.history.push('/register');
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          {/* ----------------------------------------------- */}
          <ErroModal ref={(errModal) => (this.errModal = errModal)} />
          {/* ----------------------------------------------- */}
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

              {/* {showErr} */}
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    errors: state.errors,
  };
};
export default connect(mapStateToProps, { loginUser })(Login);
