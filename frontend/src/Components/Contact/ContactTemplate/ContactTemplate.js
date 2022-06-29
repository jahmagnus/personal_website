import React from "react";

import Field from "../FormComponents/Field"
import Messagebox from "../FormComponents/Messagebox"
import Footer from '../../Footer/Footer'
import "./contactTemplate.css";

const ContactTemplate = () => {
  return (
    <div
      className="ui inverted vertical masthead center aligned segment" id="bkg-contact">
      <div className="ui grid ui-grid">
        <div className="column twelve wide grid-column">
        <div className="row">
        <div className="ui items">
      
        <form class="ui form ui-form">
          <h1>Get in touch...</h1>
          <Field label="Name" type="text"/>
          <Field label="Email" type="text"/>
          <Field label="Phone Number" type="text"/>
          <Messagebox/>

          <button class="ui primary button">Send it!</button>
          </form>

</div>
</div>
</div>
</div>
      <Footer/>
    </div>
  );
};

export default ContactTemplate;