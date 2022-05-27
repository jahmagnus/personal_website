import React from "react";
import "./ProjectTemplate/ProjectTemplate.css";

const ProjectContainer = ({ header, description, imgsrc, technologies }) => {
  return (


    <div className="item">
      <div className="ui small image">
        <img src={imgsrc} alt={imgsrc} />
      </div>
      <div className="middle aligned content">
        <div className="header" header={header}>{header}</div>
        <div className="description">
          <p description={description} technologies={technologies}>{description}</p>
        </div>
        <div className="extra">
          <div className="ui center floated primary button">
            <i className="fa-brands fa-github"></i> Code
          </div>
          <a href ="http://west-hampstead-departures.herokuapp.com/homepage.html"><div className="ui center floated secondary black button">
            <i className="fa-solid fa-laptop-code"></i> Live
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
