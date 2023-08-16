import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <hr
        style={{
          height: "3rem",
          backgroundColor: "black",
          margin: "0",
          borderRadius: "0 0 80% 80%",
        }}
      />

      <section id="contact-info">
        <h2 class="contact-heading">For more informaton...</h2>
        <h4>Contact us</h4>
        <p class="contact-line">
          101, Building C1, Soham Plaza, Manpada Service Road, Manpada, Thane
          West, Maharashtra 400607, India
        </p>
        <p>petactive007@gmail.com</p>
        <p>098192 81559</p>
        <form action="">
          <div className="info">
            <input name="name" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
          </div>
          <input name="subject" type="text" placeholder="Subject" />
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            placeholder="Type your message here..."
          ></textarea>
          <input
            type="submit"
            class="btn"
            style={{ backgroundColor: "#C38154", color: "white" }}
            value="Contact us"
          />
        </form>
      </section>
    </div>
  );
};

export default Contact;
