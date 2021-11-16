import React from "react";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import InfoIcon from "./InfoIcon";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="as_header_wrapper">
      <div className="as_logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="as_header_detail">
        <div className="as_info_detail">
          <ul>
            <li>
              <a href="/">
                <div className="as_infobox">
                  <div className="as_infoicon">
                    <InfoIcon icon="headphone" />
                  </div>
                  <span className="as_orange">Talk to our Astrogers -</span>
                  +1800 326 3264
                </div>
              </a>
            </li>
            <li>
              <a href="/">
                <div className="as_infobox">
                  <div className="as_infoicon">
                    <InfoIcon icon="mail" />
                  </div>
                  <span className="as_orange">Talk to our Astrogers -</span>
                  support@website.com
                </div>
              </a>
            </li>
          </ul>
          <div className="as_right_info">
            <a href="/">
              <div className="as_infobox">
                <div className="as_infoicon">
                  <InfoIcon icon="login" />
                </div>
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
        <div className="as_menu_wrapper">
          <span class="as_toggle bg_overlay">
            <img src="assets/images/svg/menu.svg" alt="" />
          </span>
          <div class="as_menu">
            <ul>
              <li>
                <a href="/" class="active">
                  home
                </a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/services">Services</Link>
              </li>
              <li>
              <Link to="/blog">Blog</Link>
              </li>
              <li>
              <Link to="/Appointment">Appointment</Link>
              </li>
              <li>
                <a href="/">shop</a>
                <ul class="as_submenu">
                  <li>
                    <a href="/">Shop</a>
                  </li>
                  <li>
                    <a href="/">Shop Single</a>
                  </li>
                  <li>
                    <a href="/">Cart</a>
                  </li>
                  <li>
                    <a href="/">Checkout</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">pages</a>
                <ul class="as_submenu">
                  <li>
                    <a href="/">Astrologer</a>
                  </li>
                  <li>
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/">404</a>
                  </li>
                  <li>
                    <a href="/">faq</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">contact</a>
              </li>
            </ul>
          </div>
          <div class="as_search_wrapper">
            <InfoIcon icon="search" />
            <div class="as_search_boxpopup">
              <a href="/" class="as_cancel">
                x
              </a>
              <div class="as_search_inner">
                <div class="as_search_widget">
                  <input
                    type="text"
                    name=""
                    class="form-control"
                    id=""
                    placeholder="Search..."
                  />
                  <a href="/">
                    <img src="/" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
