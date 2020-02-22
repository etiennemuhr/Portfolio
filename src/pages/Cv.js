import React from "react";

import Me from "../assets/Bild1.png";

const Cv = props => {
  return (
    <div className="bg__Cv">
      <div className="bgSvg__Projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity=".6"
            d="M0,288L120,266.7C240,245,480,203,720,170.7C960,139,1200,117,1320,106.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="navigation__Cv">
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
            className="navLink__Projects"
            onClick={() => props.history.push("/projects")}
          >
            Projekte
          </p>
        </div>
      </div>

      <div className="girdContainer__Cv">
        <div>
          <div className="imgNameContainer__Cv">
            <img src={Me} alt="foto" />
            <p>Etienne Muhr</p>
          </div>

          <div className="personalData_Cv">
            <h3 className="sectionTitle_Cv">Persönliche Daten</h3>
            <p>Geboren: 09.02.1998</p>
            <p>Familienstand: ledig</p>
            <br />
            <p>Lazarettgasse 17</p>
            <p>1090 Wien</p>
            <br />
            <p>0676 367 32 57</p>
            <p>etiennemuhr@gmail.com</p>
          </div>

          <div className="languages__Cv">
            <h3>Sprachen</h3>
            <br />

            <p>Deutsch: Muttersprache</p>

            <p>Englisch: Niveau C1 </p>
          </div>
        </div>
        <div className="jobEductionContainer__Cv">
          <h3 className="sectionTitle_Cv">Beruflicher Werdegang</h3>
          <div className="girdJobs__Cv">
            <div>
              <p>08/2017 - aktuell</p>
            </div>
            <div>
              <p>
                <span className="mainText__Cv"> Floor Guide </span>
                <br /> Multi Media Marketing GmbH <br /> Schulungen, Coachings
                und Monitoring
              </p>
            </div>

            <div>
              <p>06/2016 - 08/2017</p>
            </div>
            <div>
              <p>
                <span className="mainText__Cv"> Telefonist </span> <br /> Multi
                Media Marketing GmbH <br /> Telefonist für T-Mobile und
                tele.ring
              </p>
            </div>
          </div>

          <div>
            <h3 className="sectionTitle_Cv">Ausbildung</h3>
            <div className="eductionGrid__Cv">
              <p>02/2019 - 02/2020</p>
              <p>
                <span className="mainText__Cv"> Berufsreifeprüfung</span>
                <br /> Deutsch, Englisch, Mathematik und Informationsmanagement
                und Medientechnik
              </p>

              <p>09/2015 - 12/2016</p>
              <p>
                <span className="mainText__Cv">
                  Berghaidengasse Aufbaulergang
                </span>
                <br /> Deutsch, Englisch, Mathematik, Tourismus und Marketing
              </p>

              <p>09/2012 - 06/2015</p>
              <p>
                <span className="mainText__Cv">
                  Berghaidengasse Ausbildung zum Hotelkaufmann
                </span>
                <br /> Deutsch, Englisch, Rechnungswesen, Kochen und Service
              </p>
            </div>
          </div>
        </div>

        <div className="internshipContainer__Cv">
          <h3 className="sectionTitle_Cv">Praktikas</h3>
          <p>
            Praktikum bei der Vizebürgermeisterin der Stadt Wien Maria
            Vassilakou
          </p>
          <p>Praktikum bei der BDC Group</p>
          <p>Praktikum Flughafen Wien</p>
          <p>Praktikum Arcotel Wimberger</p>
          <p>Praktikum Austria Trend Hotel Europa Wien</p>

          <h3 className="sectionTitle_Cv" style={{ marginTop: "25px" }}>
            Kompetenzen
          </h3>
          <h4>Progammieren</h4>
          <p>HTML/CSS</p>
          <p>JavaScript (TypeScript, React, React Native, VueJS, NodeJS)</p>
          <p>Linux</p>
          <h4 style={{ marginTop: "10px" }}>Weiter Kompetenzen:</h4>
          <p>Microsoft Office</p>
          <p>Sehr gute Kommunikation,- und Teamfähigkeiten</p>
        </div>
      </div>
    </div>
  );
};

export default Cv;
