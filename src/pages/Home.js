import React from "react";

const Home = props => {
  return (
    <div className="backgroundImage__Home">
      <h1 className="h1__Home">Etienne Muhr</h1>
      <h2 className="h2__Home">Self taught Full Stack Developer</h2>
      <div className="buttonContainer__Home">
        <button
          className="button__Home"
          onClick={() => props.history.push("/cv")}
        >
          Lebenslauf
        </button>
        <button
          className="button__Home"
          onClick={() => props.history.push("/projects")}
        >
          Projekte
        </button>
      </div>
    </div>
  );
};

export default Home;
