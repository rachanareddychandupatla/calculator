import React from "react";
import PropTypes from "prop-types";
import WithHigherOrderWindowDimensions from './withHigherOrderWindowDimensions.js';

import "./Display.css";

class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className={"component-display " + (this.props.isMobileSized ? 'changeBackground' : '')}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default WithHigherOrderWindowDimensions(Display);
