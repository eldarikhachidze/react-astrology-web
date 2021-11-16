import React from "react";
import { services } from "../data/services";
import "./Ourservices.scss";
import ServiceBox from "./ServiceBox";
function Ourservices() {
  return (
    <div className="as_service_wrapper">
      <div className="container">
        <div className="">
          <div className="text-center">
            <h1 className="as_heading as_heading_center">our services</h1>
            <p className="as_font14 ">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididuesdeentiut labore <br />
              etesde dolore magna aliquapspendisse and the gravida.
            </p>
          </div>
          <div className="container-service">
            {services.map((service) => (
              <ServiceBox
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ourservices;
