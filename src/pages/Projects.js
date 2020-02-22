import React from "react";

import Project from "../components/Project";

import dashboard from "../assets/dashboard/038936e423a273ae28020395cc947635.png";
import portfolio from "../assets/portfolio/47ba6e428beb62528235cd4aff988a11.png";
import ahImmobilien from "../assets/ahImmobielen/4acac721e2bf11d973ab37e7f3a0f115.jpg";

const Projects = props => {
  return (
    <div className="bg__Projects">
      <div className="backButton__Projects">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 48 48"
          onClick={() => props.history.goBack()}
        >
          <path d="M0 0h48v48H0z" fill="none" />
          <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
        </svg>
        <p
          className="navLink__Projects"
          onClick={() => props.history.push("/cv")}
        >
          Lebenslauf
        </p>
      </div>
      <h1 className="h1__Projects">Meine Projekte</h1>
      <div className="projetsContainer__Projects">
        <Project
          title="Dashboard"
          img={dashboard}
          tecs={["React", "MaterialUI"]}
          tecs2={["NodeJS", "MongoDB"]}
        ></Project>
        <Project
          title="Portfolio"
          img={portfolio}
          tecs={["React", "SCSS"]}
        ></Project>
        <Project
          title="AH-Immobilien"
          img={ahImmobilien}
          noGithub
          history={props.history}
          tecs={["HTML", "CSS", "Bootstrap"]}
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
