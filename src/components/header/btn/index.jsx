import React from "react";
import PropTypes from "prop-types";
import "./Btn.scss";

const Btn = (props) => {
  return (
    <>
      <button type="button" className={"as_btn " + props.className} >
        {props.title}
        <span></span>
      </button>
    </>
  );
};

Btn.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
};

export default Btn;
