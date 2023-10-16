import React from "react";
import "./Projects.css";
import Image1 from "./../../assets/project/Screenshot (94).png"
import Image2 from "./../../assets/project/Screenshot (93).png"
import Image3 from "./../../assets/project/Screenshot (92).png"
import Image4 from "./../../assets/project/Screenshot (97).png"

import { FaReact } from "react-icons/fa";
import {

  SiExpress,

  SiTailwindcss,
  SiReactrouter,

  SiMongodb,
  SiNodedotjs,
  SiFirebase,
  SiReact,
  SiReacttable,
} from "react-icons/si";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Image1}
                    alt="Toy Universe"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Toy Universe</h2>
                <p style={{ textAlign: 'left' }}>
                  <li>A seller can create and login to an account to sell toys online.</li>
                  <li>A seller can add new toys, they can view, update, delete their toys.</li>
                  <li>Users can register or log in using Google or email/password to access and view details, also manage their profile.</li>
                </p>
                <div>
                  <SiTailwindcss />

                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://my-toys-1fce3.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/FarhanShahriar11/toy-market-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Image2}
                    alt="My Restaurant"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>My Restaurant</h2>
                <p style={{ textAlign: 'left' }}>
                  <li>My Restaurant features individual chef portfolios showcasing their expertise and includes special re recipes curated by each chef.</li>
                  <li>Customers can login/signup using Google, GitHub, or Email and password.</li>
                  <li>Any logged customers can add favorite chefs, perform operations, and manage profiles.</li>
                </p>
                <div>
                  <SiTailwindcss />
                  <FaReact />
                  <SiFirebase />
                  <SiExpress />
                </div>
                <div>
                  <a
                    href="https://my-restaurant-1a384.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/FarhanShahriar11/my-restaurant-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={Image3} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Car Doctor</h2>
                <p style={{ textAlign: 'left' }}>
                  <li>Car Doctor features individual chef portfolios showcasing their expertise and includes special re recipes curated by each chef.</li>
                  <li>Customers can login/signup using  Email and password.</li>
                  <li>Any logged customers can add their services that's they needed.</li>
                </p>
                <div>
                  <SiTailwindcss />
                  <SiReacttable />
                  <SiReactrouter />
                  <SiReact />
                </div>
                <div>
                  <a
                    href=" https://cars-doctor-2e241.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/FarhanShahriar11/car-doctor-client"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={Image4}
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Summer Camp</h2>
                <p style={{ textAlign: 'left' }}>
                  <li>Website has Admin Dashboard, admin can make student to instructor or admin, admin
                    can approve or deny classes of all instructors, add or delete users.</li>
                  <li>Instructor has Instructor Dashboard, also add new classes mange own classes and delete.</li>
                  <li>Student has Student Dashboard, Select and enrolled any class also delete selected calss.</li>
                </p>
                <div>

                  <SiReact />
                  <SiFirebase />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://summer-campr.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/FarhanShahriar11/summer-camp-school"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


export default Projects;