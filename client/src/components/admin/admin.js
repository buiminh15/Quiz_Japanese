import React, { Component } from 'react';
import SelectListField from '../../commonModules/SelectListField';
import ButtonField from '../../commonModules/ButtonField';
import ErroModal from '../errors_modal/error_modal';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      adminQuizLevel: '',
      adminQuizSkill: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onProfileConfirmClick = this.onProfileConfirmClick.bind(this);
  }

  onChange(even) {
    this.setState({
      [even.target.name]: even.target.value,
    });
  }
  onProfileConfirmClick(even) {
    even.preventDefault();
    console.log(this.props.history);
    // this.props.history.push('/confirm_user');
  }

  render() {
    const AdQuizLevel = [
      { label: 'N5', value: 'n5' },
      { label: 'N4', value: 'n4' },
      { label: 'N3', value: 'n3' },
      { label: 'N2', value: 'n2' },
      { label: 'N1', value: 'n1' },
    ];
    const AdQuizSkill = [
      { label: '漢字', value: 'kanji' },
      { label: '語彙', value: 'goi' },
      { label: '文法', value: 'bunpou' },
      { label: '読解', value: 'dokkai' },
    ];
    return (
      <div className="container">
        <div className="row">
          <ErroModal ref={(errModal) => (this.errModal = errModal)} />
          <div className="col-8 m-auto">
            <h1 className="display-4 text-center text-warning big-title">Japanese Quiz Register</h1>
            <p className="lead text-center text-warning small-title">Japanese Quiz　ようこそ</p>
            <form className="mt-4">
              <SelectListField name="adminQuizLevel" value={this.state.adminQuizLevel} title="Level Choose : " onChange={this.onChange} option={AdQuizLevel} />
              <SelectListField name="adminQuizSkill" value={this.state.adminQuizSkill} title="Skill Choose : " onChange={this.onChange} option={AdQuizSkill} />
              <ButtonField
                type="button"
                btnColor="btn-success"
                btnCol="col-12"
                btnOther="d-block mx-auto mb-4"
                defaultValue="Profile Confirm"
                onClick={this.onProfileConfirmClick}
                btnStyle={{ height: '2.8em' }}
              />
              <div className="container">
                <div className="row" style={{ justifyContent: 'space-between' }}>
                  <ButtonField
                    type="button"
                    btnColor="btn-primary"
                    btnCol="col-12"
                    btnOther="d-block mx-auto mb-4"
                    defaultValue="Back"
                    onClick={this.onProfileConfirmClick}
                    btnStyle={{ height: '2.8em', width: '10vw' }}
                  />
                  {/* </div>
                <div className="row"> */}
                  <ButtonField
                    type="button"
                    btnColor="btn-danger"
                    btnCol="col-12"
                    btnOther="d-block mx-auto mb-4"
                    defaultValue="Next"
                    onClick={this.onProfileConfirmClick}
                    btnStyle={{ height: '2.8em', width: '10vw' }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
