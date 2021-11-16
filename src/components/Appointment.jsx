import React from "react";
import "./appointment.scss";
import Btn from "./header/btn";

function Appointment() {
  return (
    <section class="as_appointment_wrapper">
      <div class="container">
        <div class="Appointment-width">
          <div class="">
            <h2 class="as_heading as_heading_center text-center">
              Make Your Appointment To Discuss Any Problem.
            </h2>
            <p class="as_font14 as_padderBottom10 text-center">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </p>
            <p class="as_font14 as_padderBottom20 text-center">
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>

            <div class="as_journal_box_wrapper">
              <form>
                <h3 class="text-center Appointment-title">Appointment Form</h3>
                <div class="Appointment-row">
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>name</label>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>email</label>
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>mobile number</label>

                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>gender</label>
                    <div class="form-group as_select_box">
                      <select
                        class="form-control select2-hidden-accessible"
                        data-placeholder="Gender"
                        data-select2-id="select2-data-1-jbii"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option
                          value="male"
                          data-select2-id="select2-data-3-epor"
                        >
                          Male
                        </option>
                        <option value="female">Female</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-2-b46m"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            aria-disabled="false"
                            aria-labelledby="select2-dobp-container"
                          >
                            <button
                              type="button"
                              class="select2-selection__clear"
                              tabindex="-1"
                              title="Remove all items"
                              aria-label="Remove all items"
                              aria-describedby="select2-dobp-container"
                              data-select2-id="select2-data-4-y87e"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <span
                              class="select2-selection__rendered"
                              id="select2-dobp-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Male"
                            >
                              Male
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>time of day</label>
                    <div
                      class="form-group as_select_box"
                      data-placeholder="Time of day"
                    >
                      <select
                        class="form-control select2-hidden-accessible"
                        data-select2-id="select2-data-5-678d"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="1" data-select2-id="select2-data-7-njfz">
                          {" "}
                          Morning{" "}
                        </option>
                        <option value="2">Afternoon</option>
                        <option value="3">Evening </option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-6-xmd2"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-ndzi-container"
                          >
                            <button
                              type="button"
                              class="select2-selection__clear"
                              tabindex="-1"
                              title="Remove all items"
                              aria-label="Remove all items"
                              aria-describedby="select2-ndzi-container"
                              data-select2-id="select2-data-8-pe4a"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <span
                              class="select2-selection__rendered"
                              id="select2-ndzi-container"
                              role="textbox"
                              aria-readonly="true"
                              title=" Morning "
                            >
                              {" "}
                              Morning{" "}
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>way to reach</label>
                    <div
                      class="form-group as_select_box"
                      data-placeholder="Way to reach"
                    >
                      <select
                        class="form-control select2-hidden-accessible"
                        data-select2-id="select2-data-9-to5n"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option
                          value="1"
                          data-select2-id="select2-data-11-rwus"
                        >
                          Phone{" "}
                        </option>
                        <option value="2">Email</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="select2-data-10-qzd6"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-tmob-container"
                          >
                            <button
                              type="button"
                              class="select2-selection__clear"
                              tabindex="-1"
                              title="Remove all items"
                              aria-label="Remove all items"
                              aria-describedby="select2-tmob-container"
                              data-select2-id="select2-data-12-fs6y"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                            <span
                              class="select2-selection__rendered"
                              id="select2-tmob-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Phone "
                            >
                              Phone{" "}
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>Preferred Date</label>
                    <div class="Appointment-row">
                      <div className="date-time-row ">
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Month"
                            />
                          </div>
                        </div>
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Year"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>Preferred Time</label>
                    <div class="Appointment-row">
                      <div className="date-time-row ">
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Hrs"
                            />
                          </div>
                        </div>
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Mins"
                            />
                          </div>
                        </div>
                        <div class="width30">
                          <div class="form-group">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Sec"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>address</label>
                    <div class="form-group">
                      <textarea
                        placeholder="Address"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <label>Reason for appointment</label>
                    <div class="form-group">
                      <textarea
                        placeholder="Message"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="appointment-btn">
                    <Btn title="make an appointment" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;
