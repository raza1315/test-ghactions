import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Footer({ contactRef, EventRef, AboutRef, BlogRef }) {
  return (
    <div className="footer-div">
      {/* --------------- FOOTER --------------- */}
      <footer className="footer_div">
        <div className="top-footer">
          {/* <img src={Logo} alt="" className="logo" /> */}
          <h2 style={{ color: "white" }}>FOLLOW US </h2>
          <div className="footer-social-icons">
            <div className="icon">
              <a
                href="https://www.instagram.com/tezosclub.jh?igsh=MXF5b3h2bDUweTlk"
                className="btn-icon"
              >
                <FaInstagram
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://github.com/TezosJamiaHamdard"
                className="btn-icon"
              >
                <FaGithub style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/company/tezos-club-jamia-hamdard/"
                className="btn-icon"
              >
                <FaLinkedinIn
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a href="/" className="btn-icon">
                <FaWhatsapp style={{ color: "#fff" }} size={30} />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://youtube.com/@tezosjh?si=NZ40ocBmoLjIoTN6"
                className="btn-icon"
              >
                <FaYoutube
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
            <div className="icon">
              <a
                href="https://x.com/Tezosclubjh?t=g_CSWx9n_vny9Id24Oizrw&s=09"
                className="btn-icon"
              >
                <FaXTwitter
                  style={{ color: "#fff", paddingTop: "4px" }}
                  size={25}
                />
              </a>
            </div>
          </div>
          {/* <div className="whatsapp"> */}
          <h3>
            To Join Tezos Unofficial Whatsapp group Click Here:
            <a
              href="https://chat.whatsapp.com/H9aWrPegFYNEzesrkfMksM"
              className="btn-icon"
            >
              <FaWhatsapp className="whatsapp" />
            </a>
          </h3>
          {/* </div> */}
          <h3>
            Want to host Tech Events? Get in touch with us at tezosjh@gmail.com
          </h3>
          <h3>
            For Feedback, Comments and Media Inquiries please contact us on:
            tezosjh.secondary@gmail.com
          </h3>
        </div>
        <div className="mid-bottom">
          <div className="middle-footer">
            <div className="general">
              <h2>General</h2>
              <Link to="/#contact">
                <span
                  onClick={() => (
                    setTimeout(() => contactRef.current.scrollIntoView()), 1000
                  )}
                >
                  Contact
                </span>
              </Link>
              <a href="/">Career</a>
              <Link to="/blogs">
                <span
                  onClick={() => (
                    setTimeout(() => BlogRef.current.scrollIntoView()), 1000
                  )}
                >
                  Blog
                </span>
              </Link>
            </div>
          </div>

          <div className="bottom-footer">
            <div className="miscellaneous">
              <h2>Miscellaneous</h2>
              <a href="/">Merchandise</a>
              <Link to="/#events">
                <span
                  onClick={() => (
                    setTimeout(() => EventRef.current.scrollIntoView()), 1000
                  )}
                >
                  Events
                </span>
              </Link>
              <Link to="/about">
                <span
                  onClick={() => (
                    setTimeout(() => AboutRef.current.scrollIntoView()), 1000
                  )}
                >
                  About
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <h3 className="h3">Privacy Notice</h3>
    </div>
  );
}

export default Footer;
