  
import React from "react";
import ContactCard from "./../components/ContactCard";

export default () => (
  <div>
    <ContactCard
      link="https://www.github.com/nbkim89"
      icon="github"
      label="Github"
    />

    <ContactCard
      link="https://www.linkedin.com/in/nicholas-kim-3782aa132/"
      icon="linkedin"
      label="LinkedIn"
    />

    <ContactCard
      link="mailto:nicholaskim1989@gmail.com"
      icon="mail"
      label="Email"
    />
  </div>
);
