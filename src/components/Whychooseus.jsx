import React from "react";
import "./Whychooseus.scss";
import { whychooseus } from "../data/whychooseus";
import Whychooseusbox from "./header/whychooseus/index";

function Whychooseus() {
  return (
    <section className="as_whychoose_wrapper">
      <div className="container">
        <div className="as_verticle_center">
          <div className="col-lg-3 col-md-12">
            <h1 className="footer-title">Why Choose Us</h1>
            <p className="as_font14">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut.
            </p>
          </div>

          <div className="whychooseus-container">
            {whychooseus.map((whychooseus) => (
              <Whychooseusbox
                key={whychooseus.id}
                title={whychooseus.title}
                description={whychooseus.description}
                image={whychooseus.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whychooseus;
