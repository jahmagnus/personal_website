import React from "react";

import ProjectContainer from "../ProjectContainer";
import departureImage from "../../../img/departureboard.png"
import './ProjectTemplate.css'


const projects = [{
  projectHeader: 'Departures Web App',
  description: "During my time working on the railway I developed a departure board web application to ensure I had access to up to date information for my home station while I am concentrating on studying before going to work - I would keep this web app open on a spare monitor to keep track of delays and cancelations",
  tech: 'Javascript / React / HTML / CSS / REST / Expressjs',
  img: {departureImage}
}, 

{
  projectHeader: 'Coming Soon',
  description: "New Portfolio project currently under development",
  tech: 'Javascript / React / HTML / CSS / REST / Expressjs',
  img: "https://www.fillmurray.com/200/300"
}
]




const ProjectTemplate = () => {

  let renderedList = []

  renderedList = projects.map((project) => {
    return <ProjectContainer key={project.projectHeader} header={project.projectHeader} description={project.description} imgsrc={project.img}/>
  })


  const listStyle = {
    marginTop: "7rem"
  }
  return (
    <div
      className="ui inverted vertical masthead center aligned segment"
      id="bkg-project"
    >
      <div className="ui grid ui-grid">
        <div className="column ten wide grid-column">
        <div className="row" style={listStyle}>
        <div className="ui items" >

          {renderedList}
        
          </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default ProjectTemplate;
