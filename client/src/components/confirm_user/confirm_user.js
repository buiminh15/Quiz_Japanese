import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextInputField from '../../commonModules/TextInputField';
import ButtonField from '../../commonModules/ButtonField';
// import { ConfirmUserUser } from '../../actions/auth.actions';
import ErroModal from '../errors_modal/error_modal';

class ConfirmUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.errModal = React.createRef();
  }

  onChange = () => {}

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="column">
          {/* ----------------------------------------------- */}
          <ErroModal ref={(errModal) => (this.errModal = errModal)} />
          {/* ----------------------------------------------- */}
          <div className="card col-10 mx-auto mt-4 bg-white text-dark">
            <div className="card-body d-flex px-0">
              <div className="col-8 text-left">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="material-icons align-middle">email</span>
                    <span className="ml-2">a1@mail.com</span>
                  </li>
                  <li className="list-group-item">
                    <span className="material-icons align-middle">person</span>
                    <span className="ml-2">user1</span>
                  </li>
                  <li className="list-group-item">
                    <span className="material-icons align-middle">trending_flat</span>
                    <span className="ml-2">Admin</span>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ButtonField
                  type="button"
                  btnColor="btn-danger"
                  btnCol="col-12"
                  btnOther="d-block mx-auto mb-4"
                  defaultValue="Confirm"
                  onClick={this.onChange}
                  btnStyle={{ height: '2.8em' }}
                />
                <ButtonField
                  type="button"
                  btnColor="btn-danger"
                  btnCol="col-12"
                  btnOther="d-block mx-auto mb-4"
                  defaultValue="Reject"
                  onClick={this.onChange}
                  btnStyle={{ height: '2.8em' }}
                />
              </div>
            </div>
          </div>
          <div className="card col-10 mx-auto mt-4 bg-white text-dark">
            <div className="card-body d-flex px-0">
            <div className="col-8 text-left">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="material-icons align-middle">email</span>
                    <span className="ml-2">a1@mail.com</span>
                  </li>
                  <li className="list-group-item">
                    <span className="material-icons align-middle">person</span>
                    <span className="ml-2">user1</span>
                  </li>
                  <li className="list-group-item">
                    <span className="material-icons align-middle">trending_flat</span>
                    <span className="ml-2">Admin</span>
                  </li>
                </ul>
              </div>
              <div className="col-4">
                <ButtonField
                  type="button"
                  btnColor="btn-danger"
                  btnCol="col-12"
                  btnOther="d-block mx-auto mb-4"
                  defaultValue="Confirm"
                  onClick={this.onChange}
                  btnStyle={{ height: '2.8em' }}
                />
                <ButtonField
                  type="button"
                  btnColor="btn-danger"
                  btnCol="col-12"
                  btnOther="d-block mx-auto mb-4"
                  defaultValue="Reject"
                  onClick={this.onChange}
                  btnStyle={{ height: '2.8em' }}
                />
              </div>
            </div>
          </div>
          
          <div className="col-10 mx-auto px-0 mt-4 text-left">
            <ButtonField
              type="button"
              btnColor="btn-primary"
              btnCol="col-3"
              btnOther="d-block mx-auto mb-4"
              defaultValue="Back"
              onClick={this.onChange}
              btnStyle={{ height: '2.8em' }}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default ConfirmUser
