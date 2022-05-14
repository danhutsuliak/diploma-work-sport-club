import React, { useEffect } from "react";
import NewsBlock from "../../components/news-block/news-block.component";
import newsBlockImage from "../../assets/news-block-image.jpg";

import "./news.styles.scss";

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="news">
      <h1>Новини </h1>

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
};

export default News;
