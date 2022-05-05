import React from "react";
import Landing from "../../components/landing/landing.component";
import NewsPreview from "../../components/news-preview/news-preview.component";

import "./home.styles.scss";

const Home = () => (
  <div className="home">
    <Landing />
    <NewsPreview />
  </div>
);

export default Home;
