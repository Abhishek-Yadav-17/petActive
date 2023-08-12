import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <hr
          style={{
            height: "3rem",
            backgroundColor: "black",
            margin: "0",
            borderRadius: "0 0 80% 80%",
          }}
        />
        <div className="footer-elem">
          <a
            class="footer-link"
            href="https://www.linkedin.com/in/abhishek-yadav-120273214/"
          >
            <i class="fa-brands fa-linkedin fa-2x"></i>
          </a>
          <a class="footer-link" href="https://twitter.com/Abhishek_Yd_17">
            <i class="fa-brands fa-twitter fa-2x"></i>
          </a>
          <a class="footer-link" href="mailto:abhi1232yadav@gmail.com">
            <i class="fa-solid fa-envelope fa-2x"></i>
          </a>

          <p class="copyright-line">© Copyright 2022 PetActive</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
