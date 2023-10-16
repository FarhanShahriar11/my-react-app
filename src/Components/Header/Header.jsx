import React from "react";
import "./Header.css";
import { ThemeContext } from "../../Context/theme";
import { Navbar } from "../Navbar/Navbar";
import Image from "./../../assets/Image.png"
const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
            <img src={Image} alt="logo" />
            </span>
            farhan
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};

export default Header; // Export the Header component as default

// You can also export other components or values here if needed
