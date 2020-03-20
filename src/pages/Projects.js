import React from "react";

import Project from "../components/Project";

import dashboard from "../assets/dashboard/038936e423a273ae28020395cc947635.png";
import portfolio from "../assets/portfolio/47ba6e428beb62528235cd4aff988a11.png";
import ahImmobilien from "../assets/ahImmobielen/4acac721e2bf11d973ab37e7f3a0f115.jpg";
import { useState } from "react";

const Projects = props => {
  const [image, setImage] = useState();

  const handleImage = id => {
    // console.log(id);
    setImage(id);
  };
  const handleTest = () => {
    image && setImage("");
  };
  return (
    <div className="bg__Projects" onClick={handleTest}>
      <div className="bgSvg__Projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity=".6"
            d="M0,288L120,266.7C240,245,480,203,720,170.7C960,139,1200,117,1320,106.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="backButton__Projects">
        <svg
          className="backButtonIcon__Projects"
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
          onClick={() => props.history.push("/cv")}
          className="navLink__Projects"
        >
          Lebenslauf
        </p>
      </div>
      <h1 className="h1__Projects">Meine Projekte</h1>
      <div className="projetsContainer__Projects">
        <Project
          id="1"
          title="Dashboard"
          img={dashboard}
          tecs={["React", "MaterialUI"]}
          tecs2={["NodeJS", "MongoDB"]}
          imageState={image}
          handleImage={handleImage}
        ></Project>
        <Project
          id="2"
          title="Portfolio"
          img={portfolio}
          tecs={["React", "SCSS"]}
          imageState={image}
          handleImage={handleImage}
        ></Project>
        <Project
          id="3"
          title="AH-Immobilien"
          img={ahImmobilien}
          noGithub
          history={props.history}
          tecs={["HTML", "CSS", "Bootstrap"]}
          imageState={image}
          handleImage={handleImage}
        ></Project>
      </div>
    </div>
  );
};

export default Projects;
