import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextInputField from '../../commonModules/TextInputField';
import { LoginDispatch } from '../../actions/login.actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: {
        auto: false,
        path: '',
        search: '',
        state: {},
      },
    };
  }

  handleChange = (name) => (e) => {
    var newState = {};
    var value = e.currentTarget.value;
    newState[name] = value;
    this.setState(newState);
  };

  onLoginClick = (e) => {
    this.props
      .login(this.state.email, this.state.password)
      .catch((err) => console.log(err))
      .then((res) => {
        if (res.status === 200 && res.data.success === true) {
          var path = res.data.user.role === 'admin' ? '/admin' : '/user';
          this.setState({
            redirect: {
              auto: true,
              path: path,
            },
          });
        }
      });
  };

  render() {
    if (this.state.redirect.auto === true) {
      return <Redirect to={this.state.redirect.path} search={this.state.redirect.search} state={this.state.redirect.state}></Redirect>;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Login</h1>
            <p className="lead text-center text-warning small-title">Japanese Quiz　ようこそ</p>
            <form className="mt-4">
              <TextInputField name="email" type="email" placeholder="Email Address" onChange={this.handleChange('email')} value={this.state.email} />
              <TextInputField name="password" type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.pasword} />
              <div className="form-group">
                <input
                  className="btn btn-primary d-block col-7 mx-auto mb-4"
                  type="button"
                  defaultValue="Login"
                  style={{ height: '2.8em' }}
                  onClick={this.onLoginClick}
                />
                <input className="btn btn-primary d-block col-7 mx-auto mb-4" type="button" defaultValue="Sign in" style={{ height: '2.8em' }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, LoginDispatch)(Login);
