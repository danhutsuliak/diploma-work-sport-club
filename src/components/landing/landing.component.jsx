import React from "react";

import "./landing.styles.scss";
import { ReactComponent as ArrowDown } from "../../assets/down-arrow.svg";

const Landing = () => (
  <div className="landing">
    <div className="bg-image"></div>

    <div className="title-text">
      <h1>
        Баскетбольний клуб <span>"Tigers"</span>
      </h1>
    </div>

    <ArrowDown />
  </div>
);

export default Landing;
