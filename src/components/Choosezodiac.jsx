import React from "react";
import { choosezodiac } from "../data/choosezodiac";
import InfoIcon from "./header/InfoIcon";
import "./Choosezodiac.scss";
import ChooseZodiacBox from "./ChooseZodiacBox";
function Choosezodiac() {
  const choosezodiacright = () => {
    return choosezodiac.slice(choosezodiac.length / 2 - 1, -1);
  };
  const choosezodiacleft = () => {
    return choosezodiac.slice(0, choosezodiac.length / 2);
  };
  return (
      <section class="as_zodiac_sign_wrapper as_padderTop80 as_padderBottom80">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 class="as_heading as_heading_center">choose zodiac sign</h1>
              <p class="as_font14">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>

              <div class="as_zodiac_inner text-left">
                <div className="as_verticle_center choose_blok">
                  <div className="choose_blok_left">
                    <ul className="as_sign_ul">
                      {choosezodiacright().map((choosezodiacright) => (
                        <li>
                          <ChooseZodiacBox
                            key={choosezodiacright.id}
                            title={choosezodiacright.title}
                            description={choosezodiacright.description}
                            image={choosezodiacright.image}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="choose_img_spin">
                    <div className="as_banner_img text-center">
                      <InfoIcon icon="banner_image" />
                    </div>
                  </div>
                  <div className="choose_blok_right ">
                    <ul className="as_sign_ul as_sign_ul_right">
                      {choosezodiacleft().map((choosezodiacleft) => (
                        <li>
                          <ChooseZodiacBox
                            key={choosezodiacleft.id}
                            title={choosezodiacleft.title}
                            description={choosezodiacleft.description}
                            image={choosezodiacleft.image}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Choosezodiac;
