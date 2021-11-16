import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.svg";
import InfoIcon from "../header/InfoIcon";
import Btn from "../header/btn";

function index() {
  return (
    <section className="as_footer_wrapper">
      <div className="container">
        <div className="as_newsletter_wrapper">
          <div className="footer-firstblok ">
            <div className="footer-firstblok-title">
              <h1 className="footer-title">Our Newsletter</h1>
              <p>
                Get Your Daily Horoscope, Daily Lovescope and Daily
                <br /> Tarot Directly In Your Inbox
              </p>
            </div>
            <div className="footer-firstblok-input">
              <div className="as_newsletter_box">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Enter your Email Here..."
                />
                <Btn title="subscribe now"/>
              </div>
            </div>
          </div>
        </div>

        <div className="as_footer_inner">
          <div className="footer-secondblok">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="as_footer_widget">
                <div className="as_footer_logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <p>
                  Consectetur adipiscing elited doesde eiusmod tempor incididunt
                  ust labore et dolore magna aliqua.
                </p>

                <div className="as_share_box">
                  <p>Follow Us</p>
                  <ul>
                    <li>
                      <a href="/">
                        <InfoIcon icon="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <InfoIcon icon="twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <InfoIcon icon="google" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <InfoIcon icon="youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="as_footer_widget">
                <h3 className="as_footer_heading">Our Services</h3>

                <ul>
                  <li>
                    <a href="/">
                      <span></span> Horoscopes
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Gemstones
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Numerology
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Tarot Cards
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Birth Journal
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="as_footer_widget">
                <h3 className="as_footer_heading">Quick Links</h3>

                <ul>
                  <li>
                    <a href="/">
                      <span></span> About Us
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Blog
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Astrologers
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Appointment
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span></span> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="as_footer_widget">
                <h3 className="as_footer_heading">Contact Us</h3>

                <ul className="as_contact_list">
                  <li>
                  <InfoIcon icon="map" />
                    <p>
                      Gotham Hall, 1356 Brodway squore, NY 10018, California,
                      USA
                    </p>
                  </li>
                  <li>
                  <InfoIcon icon="address" />
                    <p>
                      <a href="/">astrology@example.com</a>
                      <a href="/">astro@example.com</a>
                    </p>
                  </li>
                  <li>
                  <InfoIcon icon="call" />
                    <p>
                      <a href="/">+ (91) 1800-124-105</a>
                      <br />
                      <a href="/">+ (91) 1800-326-324</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
