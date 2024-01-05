import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Go ahead</h3>
          <p className="contact__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore
            aspernatur exercitationem repellat voluptates id praesentium enim
            aliquam eligendi quaerat.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <FaEnvelope className="info__icon" />
              <div>
                {/* <span className="info__title">Mail me</span> */}
                <h4 className="info__desc">djncvetkovski@gmail.com</h4>
              </div>
            </div>
          </div>
          <div className="contact__info">
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                {/* <span className="info__title">Call me</span> */}
                <h4 className="info__desc">+389 78 736 798</h4>
              </div>
            </div>
          </div>
          <div className="contact__social">
            <a href="" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="contact__social-link">
              <FaGithub />
            </a>
          </div>
        </div>
        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                class="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="You Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              class="form__control textarea"
            />
          </div>
          <button className="button">
            Send Message
            <span class="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
