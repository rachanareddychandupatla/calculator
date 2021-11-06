import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button(props) {
  const [currentButton, setCurrentButton] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 250);
      return () => {
        clearTimeout(timer1);
      };
    },
    [props]
  );

  const handleClick = () => {
    props.clickHandler(props.name);
    setCurrentButton(props.name)
    setShow(false)
  };

  const className = [
    "component-button",
    props && props.orange ? "orange" : "",
    props && props.wide ? "wide" : "",
    props && props.name === currentButton && !show ? "current" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
