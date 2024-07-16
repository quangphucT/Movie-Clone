// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Pagination } from "swiper/modules";

export default function Carousel() {
  return (
    <div className="wrapper__carousel">
      <div className="overlay__carousel">
        <div className="container">
          <h1>Welcome.</h1>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="box__search">
            <input
              placeholder="Search for a movie or tv show...."
              type="text"
            ></input>
            <span>Search</span>
          </div>
        </div>
      </div>

      <Swiper pagination={true} modules={[Pagination]} className="carousel">
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/original/cqf3o3UrL7icGN0cTd1w7Fx0C38.jpg"
            alt="img"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
