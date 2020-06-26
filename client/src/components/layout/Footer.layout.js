import React, { Component } from 'react';

const styles = {
  position: 'sticky',
  width: '100%',
  bottom: '0',
};
class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-warning p-4 text-center" style={styles}>
        {/* Footer */}
        hikari.mei.119 @ gmail.com
      </footer>
    );
  }
}

export default Footer;
