import React, { Component } from 'react';
import SelectListField from '../../commonModules/SelectListField';
import ErroModal from '../errors_modal/error_modal';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      adminQuizLevel: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const AdQuizLevel = [
      { label: 'N5', value: 'N5' },
      { label: 'N4', value: 'N4' },
      { label: 'N3', value: 'N3' },
      { label: 'N2', value: 'N2' },
      { label: 'N1', value: 'N1' },
    ];
    return (
      <div className="container">
        <div className="row">
          <ErroModal ref={(errModal) => (this.errModal = errModal)} />
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Register</h1>
            <p className="lead text-center text-warning small-title">Japanese QuizÅ@ÇÊÇ§Ç±Çª</p>
            <form className="mt-4">
              <SelectListField name="AdminQuizLevel" value={this.state.adminQuizLevel} title="Level Choose : " onChange={this.onChange} option={AdQuizLevel} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
