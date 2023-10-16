import React from 'react';

import "./About.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Introduction from "./Introduction";
import Timeline from "./Timeline";
import Techstacks from "./Techstacks";
import { Type } from "./Type";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Farhan</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        Experienced MERN Stack Developer proficient in MongoDB, Express.js, React.js, and Node.js. Committed to delivering high-quality code and seamless user experiences to drive innovation.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/FarhanShahriar11"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:farhanshahriar014@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <MailIcon />
          </a>
          <a
            href="tel:+8801748879321"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="d"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <a
          className="btnResume"
          href="/resume.pdf"
          download="resume.pdf"
          style={{display:'flex', alignItems:'center'}}
        >
          Resume
        </a>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
export default About;
