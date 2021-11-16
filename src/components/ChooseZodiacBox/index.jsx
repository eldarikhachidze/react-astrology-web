import React from "react";
import PropTypes from "prop-types";
import "./choosezodiacbox.scss";

const index = (props) => {
  return (
      <div className="as_sign_box">
        <a href="/">
          <span className="as_sign">
            <img src={props.image} alt={props.image} />
          </span>
          <div>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
          </div>
        </a>
      </div>
  );
};

index.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

export default index;
