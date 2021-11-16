import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="as_logo"></div>
      <div className="as_header_detail">
        <div className="as_info_detail">
          <ul>
            <li>
              <a href="">
                <div className="as_infobox">
                  <span className="as_infoicon">
                    <img src="" alt="" />
                  </span>
                  <span className="as_orange">Talk to our Astrogers -</span>
                  +1800 326 3264
                </div>
              </a>
            
            </li>
            <li>
              <a href="">
                <div className="as_infobox">
                  <span className="as_infoicon">
                    <img src="" alt="" />
                  </span>
                  <span className="as_orange">Talk to our Astrogers -</span>
                  support@website.com
                </div>
              </a>
            </li>
          </ul>
            <div className="as_right_info">
                <a href="">
                    <div className="as_infobox">
                        <span className="as_infoicon">
                            <img src="" alt="" />
                        </span>
                        <span className="as_logintext">Log in / Register</span>
                    </div>
                </a>
                <div className="as_cart cart_open">
                    <div className="as_cart_wrapper">
                        <span>
                            <img src="" alt="" />
                            <span className="as_cartnumber"></span>
                        </span>
                        $512
                    </div>
                    <div className="as_cart_box">
                        <div className="as_cart_list"></div>
                        <div className="as_cart_box as_cart_total as_cart_box as_cart_btn "></div>
                        <div className="as_cart_box as_cart_btn"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="as_menu_wrapper"></div>
      </div>
    </div>
  );
}

export default Header;
