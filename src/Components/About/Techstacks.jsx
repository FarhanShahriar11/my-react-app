import React from "react";
import "./Techstacks.css";

import { AiFillHtml5,AiFillGithub } from "react-icons/ai";
import { BiLogoCss3,BiLogoBootstrap,BiLogoTailwindCss,BiLogoReact,BiLogoNodejs,BiLogoMongodb } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress,SiDaisyui} from "react-icons/si";


export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          
        <div>
            <AiFillHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <BiLogoCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <BiLogoBootstrap />
            <h5>Bootstrap</h5>
          </div>
          
          <div>
            <BiLogoTailwindCss />
            <h5>Tailwind</h5>
          </div>

          
          <div>
            <SiDaisyui />
            <h5>Daisy ui</h5>
          </div>
          
          <div>
            <DiJavascript1 />
            <h5>Javascript</h5>
          </div>
          <div>
            <BiLogoReact />
            <h5>React.JS</h5>
          </div>

          <div>
            <TbBrandNextjs />
            <h5>Next.JS</h5>
          </div>
          <div>
            <BiLogoNodejs />
            <h5>Node.JS</h5>
          </div>
          
          <div>
            <SiExpress />
            <h5>Express.JS</h5>
          </div>
          <div>
            <BiLogoMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <AiFillGithub />
            <h5>Github</h5>
          </div>
        </div>
      </div>
    </>
  );
};


export default Techstacks;