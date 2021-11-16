import React from "react";
import "./IconBox.scss"
import Icons from "../../../icons"
const index = ({icon}) => {
  return (
    <>
      <span className="infoicon">
        <img src={Icons[icon]} alt="" />
      </span>
    </>
  );
};

export default index;
