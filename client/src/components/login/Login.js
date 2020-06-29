import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TextInputField from '../../commonModules/TextInputField';
import ButtonField from '../../commonModules/ButtonField';
import { LoginUser } from '../../actions/login.actions';

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
    // console.log('sfewfew', e);
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
              <TextInputField name="password" type="password" placeholder="Password" onChange={this.handleChange('password')} value={this.state.password} />

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

export default Login;
