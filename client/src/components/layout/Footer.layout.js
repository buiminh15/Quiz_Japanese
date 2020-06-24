import React, { Component } from "react";

const styles = {
    position: "fixed",
    width: "100%",
    bottom: "0"
}
class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-warning mt-5 p-4 text-center" style={styles}>
        {/* Footer */}
        hikari.mei.119 @ gmail.com
      </footer>
    );
  }
}

export default Footer;