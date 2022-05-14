import React from "react";

import "./news-preview.styles.scss";
import newsBlockImage from "../../assets/news-block-image.jpg";
import { Link } from "react-router-dom";
import NewsBlock from "../news-block/news-block.component";

const NewsPreview = () => (
  <div className="news-preview" id="news-preview">
    <h2>
      <Link to="/news">Новини</Link>
    </h2>

    <div className="news-wrapper">
      <NewsBlock
        image={newsBlockImage}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore
      corrupti laboriosam odio voluptates debitis consectetur sint. Fugit,
      dolorem dolorum."
        date="3h"
      />
      <NewsBlock
        image={newsBlockImage}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore
      corrupti laboriosam odio voluptates debitis consectetur sint. Fugit,
      dolorem dolorum."
        date="3h"
      />
      <NewsBlock
        image={newsBlockImage}
        title="Lorem Ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore
      corrupti laboriosam odio voluptates debitis consectetur sint. Fugit,
      dolorem dolorum."
        date="3h"
      />
    </div>
  </div>
);

export default NewsPreview;
