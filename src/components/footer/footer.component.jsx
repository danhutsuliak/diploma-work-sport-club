import React from "react";
import { Link } from "react-router-dom";

import "./footer.styles.scss";

const Footer = () => (
  <footer>
    <div class="wrapper">
      <small>
        &copy;2022 <strong>Danyil Hutsuliak</strong>, All Rights Reserved
      </small>
      <nav class="footer-nav">
        <Link to="/">Back to Top</Link>
        <Link to="/">Terms of Use</Link>
        <Link to="/">@danhutsuliak</Link>
      </nav>
    </div>
  </footer>
);

export default Footer;
