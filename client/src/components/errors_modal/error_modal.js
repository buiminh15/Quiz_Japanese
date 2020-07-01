import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class ErroModal extends Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, errorMsg: '' };
  }

  showErrModal(errorMsg) {
    this.setState({
      showModal: true,
      errorMsg,
    });
  }

  render() {
    return (
      <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Error Messenger</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.state.errorMsg}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.setState({ showModal: false })}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ErroModal;
