import React from "react";
import PropTypes from "prop-types";
import "./slickBox.scss";
import Btn from "../header/btn";

const index = (props) => {
  return (
    <div className="as_banner_detail slick-slide slick-cloned banner-box">
      <h5 className="as_orange">{props.question}</h5>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Btn title="READ MORE"/>
    </div>
  );
};

index.propTypes = {
  question: PropTypes.string, 
  title: PropTypes.string,
  description: PropTypes.string,
};
export default index;
