import React from "react";
import "./Inputblok.scss"
import Btn from "../components/header/btn/index"

function Inpootblok() {
  return (
    <section className="as_know_sign_wrapper as_padder">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="as_heading as_heading_center">Know Your Zodiac Sign</h1>
            <p className="as_font14">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
            <div className="as_sign_form text-left">
              <ul>
                <li className="as_form_box">
                  <h3 className="input_title ">Date Of Birth</h3>
                  <div className="as_input_feild">
                    <input
                      type="text"
                      name=""
                      className="form-control as_datepicker"
                      placeholder="DD/MM/YYYY"
                      id=""
                    />
                    <span>
                      <img src="assets/images/svg/date.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="as_form_box">
                  <h3 className="input_title ">Time Of Birth</h3>
                  <div className="as_input_feild">
                    <input
                      type="text"
                      name=""
                      className="form-control as_timepicker"
                      placeholder="08:00"
                      id=""
                    />
                    <span>
                      <img src="assets/images/svg/time.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="as_form_box">
                  <h3 className="input_title ">Place Of Birth</h3>
                  <div className="as_input_feild">
                    <input
                      type="text"
                      name=""
                      className="form-control"
                      placeholder="Enter City Name...."
                      id=""
                    />
                    <span>
                      <img src="assets/images/svg/map1.svg" alt="" />
                    </span>
                  </div>
                </li>
                <li className="as_form_box">
                <Btn title="FIND ZODIAC"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inpootblok;
