import React from "react";
import PropTypes from "prop-types";
import "./blogbox.scss";
import Btn from "../../components/header/btn";


const index = (props) => {
  return (
    <div class="as_blog_box">
      <div class="as_blog_img">
        <a href="blog_detail.html">
          <img src={props.image} alt="" class={props.image} />
        </a>
        <Btn title="JULY 29, 2020" />
      </div>
      <ul>
        <li>
          <a href="/">
            <img src={props.imguser} alt={props.image} />
            By - Admin
          </a>
        </li>
        <li>
          <a href="/">
            <img src={props.imgcomment} alt={props.image} />0 comments
          </a>
        </li>
      </ul>
      <h4 class="">
        <a href="/">
        {props.title}
        </a>
      </h4>
      <p class="as_font14">
      {props.description}
      </p>
    </div>
  );
};

index.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default index;
