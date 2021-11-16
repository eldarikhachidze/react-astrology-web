import React from "react";
import PropTypes from "prop-types";
import "./servicebox.scss";

const index = (props) => {
  return (
    <div className="as_service_box text-center">
      <span className="as_icon">
        <img src={props.image} alt={props.title} />
      </span>

      <h4 className="as_subheading">{props.title}</h4>
      <p>{props.description}</p>
      <a href="/" className="as_link">
        read more
      </a>
    </div>
  );
};

index.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default index;
