import React from "react";
import "./Contact.css";

import { CgMail } from "react-icons/cg";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";


export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <form>
              <input type="text" placeholder="Your name..." />
              <input type="email" placeholder="Your email..." />
              <textarea name="" id="" placeholder="Message" cols="30" rows="5"></textarea>
              <input className="btnResume" type="submit" value="Send Message" />
            </form>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>farhanshahriar@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+88 01748879321</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;