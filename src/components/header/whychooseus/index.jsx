import React from "react";
import PropTypes from "prop-types";
import "./Whychooseusbox.scss";
const index = (props) => {
  return (
    <div class="as_whychoose_box text-center">
      <span class="as_number">
        <span>
          <span>
            512
          </span>
          +
        </span>
        <img src={props.image} alt={props.image} />
      </span>
      <h4>{props.title}</h4>
    </div>
  );
};

index.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};


export default index;
