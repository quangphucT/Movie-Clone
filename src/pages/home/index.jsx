/* eslint-disable react/no-unescaped-entities */

import Carousel from "../../components/Carousel";
import Subcarousel from "../../components/Subcarousel";
import "./index.scss";
const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <h2>Trending</h2>
      <Subcarousel category={"trend"} />
      <h2>What's popular</h2>
      <Subcarousel category={"popular"} />
      <h2>Top Rated</h2>
      <Subcarousel category={"rate"} />
    </div>
  );
};

export default Home;
