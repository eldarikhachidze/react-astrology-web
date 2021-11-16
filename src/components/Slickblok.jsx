import React from "react";
import "./Slickblok.scss";
import { slickbox } from "../data/slickbox";
import Btn from "../components/header/btn/index";
import InfoIcon from "../components/header/InfoIcon/index";
import Slickbox from "./slickBox";
function Slickblok() {
  return (
    <section className="as_banner_wrapper">
      <div className="container-fluid">
        <div className="row as_verticle_center">
          <div className="as_banner_slider slick-initialized slick-slider slick-dotted">
            <Btn title="prev" className="slick-prev slick-arrow " />

            <div className="slick-list draggable">
              <div className="slick-track slick-track-style">
                {slickbox.map((slickbox) => (
                  <Slickbox
                    key={slickbox.id}
                    question={slickbox.question}
                    title={slickbox.title}
                    description={slickbox.description}
                  />
                ))}
              </div>
            </div>

            <Btn title="next" className="slick-next slick-arrow" />

            <ul className="slick-dots" role="tablist">
              <li className="" role="presentation">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control00"
                  aria-controls="slick-slide00"
                  aria-label="1 of 3"
                  tabindex="-1"
                >
                  1
                </button>
              </li>
              <li role="presentation" className="slick-active">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control01"
                  aria-controls="slick-slide01"
                  aria-label="2 of 3"
                  tabindex="0"
                  aria-selected="true"
                >
                  2
                </button>
              </li>
              <li role="presentation" className="">
                <button
                  type="button"
                  role="tab"
                  id="slick-slide-control02"
                  aria-controls="slick-slide02"
                  aria-label="3 of 3"
                  tabindex="-1"
                >
                  3
                </button>
              </li>
            </ul>
          </div>

          <div className="as_banner_img text-center">
            <InfoIcon icon="banner_image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slickblok;
