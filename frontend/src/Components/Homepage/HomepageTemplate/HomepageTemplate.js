import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import "../../PageTemplate/Template.css";
import Navbar from "../../Nav/Navbar";
import Header from "../Header/Header";
import Blurb from "../Blurb/Blurb";
import HomeContact from "../CTA/HomeContact";
import Avatar from '../../Avatar/Avatar'

const HomepageTemplate = () => {
  const [appearHome, setAppearHome] = useState(true);

  return (
    <div
      className="ui inverted vertical masthead center aligned segment"
      id="bkg"
    >
      <Navbar />
    
      <div className="ui grid" id="ui-grid">
          
        <div className="ten wide column" id="column-one">
          <div className="row" id="row-one">
            <CSSTransition
              in={appearHome}
              appear={true}
              timeout={3000}
              classNames="fade"
            >
              <Header />
            </CSSTransition>
          </div>
          <div className="row" id="row-two">
            <CSSTransition
              in={appearHome}
              appear={true}
              timeout={3000}
              classNames="fade"
            >
              <Blurb />
            </CSSTransition>

            <CSSTransition
              in={appearHome}
              appear={true}
              timeout={3000}
              classNames="fade"
            >
              <HomeContact />
            </CSSTransition>
          </div>
        </div>

        <div className="column four wide">
        <div className="row" id="row-one-col-two">
        <CSSTransition
              in={appearHome}
              appear={true}
              timeout={3000}
              classNames="fade"
            >
            <Avatar/>
            </CSSTransition>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomepageTemplate;
