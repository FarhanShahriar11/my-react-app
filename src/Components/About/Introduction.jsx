import React from "react";
import "./Introduction.css";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from "../../Context/theme";
import man from "./../../assets/man.png"


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={man} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Farhan </span> and I am from{" "}
                <span className="different">
                  {" "}
                 Gazipur , Dhaka
                </span>
                . I have completed my BSc in CSE
                from{" "}
                <span className="different">
                   Stamford University Bangladesh.
                </span>
                
                
              </h4>
             
              
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Public Speaking{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Leading{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Book Reading{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;