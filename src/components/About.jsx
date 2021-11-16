import React from "react";
import "./About.scss";
import InfoIcon from "../components/header/InfoIcon";
import Btn from "../components/header/btn";

function About() {
  return (
    <section className="as_about_wrapper">
      <div className="container">
        <div className="about-container">
          <div className="about-left">
            <div className="as_about_slider slick-initialized slick-slider slick-dotted">
              <div className="slick-list draggable">
                <div className="slick-track slick-cloned">
                  <div className="as_aboutimg text-right">
                    <InfoIcon icon="about1" />
                  </div>
                </div>
              </div>
            </div>

            <ul className="slick-dots" role="tablist">
              <li className="slick-active" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control30"
                  aria-controls="slick-slide30"
                  aria-label="1 of 4"
                  tabindex="0"
                  aria-selected="true"
                >
                  1
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control31"
                  aria-controls="slick-slide31"
                  aria-label="2 of 4"
                  tabindex="-1"
                >
                  2
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control32"
                  aria-controls="slick-slide32"
                  aria-label="3 of 4"
                  tabindex="-1"
                >
                  3
                </button>
              </li>
              <li role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control33"
                  aria-controls="slick-slide33"
                  aria-label="4 of 4"
                  tabindex="-1"
                >
                  4
                </button>
              </li>
            </ul>
          </div>
          <div className="about-right">
            <h1 className="footer-title">know about Astrology</h1>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it esdehas a more-or less
              normal distribution of letters,
            </p>
            <p>
              As opposed to using 'Content here, content here', making it look
              likesdesdee readable English.Many desktop publishing packages and
              web page editors sdesnow use Lorem Ipsum as their default model
              text, and a search for 'lorem ipsum' will usdencover many web
              sites still in their web page editors sdesnow infancy.
            </p>
            <Btn title="READ MORE" />

            <div class="as_contact_expert">
              <span class="as_icon">
                <InfoIcon icon="headphone" />
              </span>
              <div>
                <h5 class="as_white">Contact Our Expert Astrologers</h5>
                <h1 class="as_orange">+ (91) 1800-124-105</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
