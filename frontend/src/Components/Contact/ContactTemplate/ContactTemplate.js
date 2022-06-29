import React from "react";

import Field from "../FormComponents/Field"
import Footer from '../../Footer/Footer'
import "./contactTemplate.css";

const ContactTemplate = () => {
  return (
    <div
      className="ui inverted vertical masthead center aligned segment" id="bkg-contact">
      <div className="ui grid ui-grid">
        <div className="column ten wide grid-column">
        <div className="row">
        <div className="ui items">
      
        <form class="ui form ui-form">
          <Field label="Name" type="text"/>
          <Field label="Email" type="text"/>
          <Field label="Phone Number" type="text"/>
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