import React, { Component } from 'react';
import TextInputField from '../../commonModules/TextInputField';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Login</h1>
            <p className="lead text-center text-warning small-title">Japanese Quiz　ようこそ</p>
            <form className="mt-4">
              <TextInputField name="email" type="email" placeholder="Email Address" />
              <TextInputField name="password" type="password" placeholder="Password" />
              <div className="form-group">
                <input className="btn btn-primary d-block col-7 mx-auto mb-4" type="button" defaultValue="Login" style={{ height: '2.8em' }} />
                <input className="btn btn-primary d-block col-7 mx-auto mb-4" type="button" defaultValue="Sign in" style={{ height: '2.8em' }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
