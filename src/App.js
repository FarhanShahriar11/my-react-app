import React from "react";

import './App.css'
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./Context/theme";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";


export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
       <Header></Header>
      </section>
      <main>
        <About></About>
        <section id="#projects">
         <Projects></Projects>
        </section>
        <section id="#contact">
          <Contact></Contact>
        </section>
        
      </main>
     
    </div>
  );
}
