import React from "react";

import ProjectContainer from "../ProjectContainer";
import './ProjectTemplate.css'


const projects = [{
  projectHeader: 'Departures Web App',
  description: "During my time working on the railway I developed a departure board web application to ensure I had access to information while working in different areas of the stations and the route where departure boards aren't available",
  tech: 'Javascript / React / HTML / CSS / REST / Expressjs',
  img: 'https://placekitten.com/640/360'
}
]


const ProjectTemplate = () => {
  return (
    <div
      className="ui inverted vertical masthead center aligned segment"
      id="bkg-project"
    >
      <div className="ui grid ui-grid">
        <div className="column ten wide grid-column">
        <div className="row">
        <div class="ui items">
          <ProjectContainer/>
          <ProjectContainer/>
          </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default ProjectTemplate;
