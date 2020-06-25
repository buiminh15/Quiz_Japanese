import React, { Component } from 'react';
import Login from '../login/Login';
class LandingPage extends Component {
  render() {
    return (
      <div id="landingPage" className="landingPage">
        {/* Landing */}
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <Login></Login>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
