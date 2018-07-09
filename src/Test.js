import React, { Component } from "react";

import { connect } from "react-redux";

class Test extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Test);
