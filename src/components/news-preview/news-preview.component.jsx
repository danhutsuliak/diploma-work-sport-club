import React from "react";

import "./news-preview.styles.scss";
import newsBlockImage from "../../assets/news-block-image.jpg";
import { Link } from "react-router-dom";

const NewsPreview = () => (
  <div className="news-preview">
    <h2>
      <Link to="/news">Новини</Link>
    </h2>

    <div className="news-block">
      <img className="news-image" src={newsBlockImage} alt="Basketball Game" />
      <div className="news-content">
        <h3>Lorem Ipsum</h3>
        <div className="news-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore
            corrupti laboriosam odio voluptates debitis consectetur sint. Fugit,
            dolorem dolorum.
          </p>
        </div>
        <div className="news-data">3h</div>
      </div>
    </div>
    <div className="news-block">
      <img className="news-image" src={newsBlockImage} alt="Basketball Game" />
      <div className="news-content">
        <h3>Lorem Ipsum</h3>
        <div className="news-text">
          <p>
            Lorem ipsum dolor sit amet corrupti laboriosam odio voluptates
            debitis consectetur sint.
          </p>
        </div>
        <div className="news-data">3h</div>
      </div>
    </div>
  </div>
);

export default NewsPreview;
