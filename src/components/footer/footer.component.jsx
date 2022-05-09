import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <footer>
    <div class="wrapper">
      <small>
        &copy;2022 <strong>БК "Tigers"</strong>
      </small>
      <nav class="footer-nav">
        <Link to="/">Головна</Link>
        <Link to="about">Про нас</Link>
        <a href="https://github.com/danhutsuliak">@danhutsuliak на Github</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
