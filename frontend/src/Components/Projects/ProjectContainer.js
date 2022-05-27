import React from "react";
import "./ProjectTemplate/ProjectTemplate.css";

const ProjectContainer = ({header, description, imgsrc, technologies}) => {
  return (
    <div className="item">
    <div className="ui small image">
      <img src="https://www.fillmurray.com/200/300"/>
    </div>
    <div className="middle aligned content">
      <div className="header">
        Content A
      </div>
      <div className="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ultricies augue. In efficitur, est non pulvinar rutrum, erat leo consequat diam, sed blandit magna tortor vel felis. 
          Praesent vitae orci felis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
      </div>
      <div className="extra">
        <div className="ui center floated primary button">
        <i className="fa-brands fa-github"></i> Code
        </div>
        <div className="ui center floated secondary black button">
        <i className="fa-solid fa-laptop-code"></i> Live
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectContainer;
