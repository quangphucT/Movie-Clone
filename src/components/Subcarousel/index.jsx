/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Subcarousel({ category }) {
  const [dataSource, setDataSource] = useState([]);
  const fetchMovieData = async () => {
    const response = await axios.get(
      "https://662f3bdb43b6a7dce30ec40b.mockapi.io/Movie"
    );
    setDataSource(response.data);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  const navigate = useNavigate();
  const handleNavigateDetails = (id) => {
    navigate(`details-page/${id}`);
  };
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={5}
        pagination={true}
        modules={[Pagination]}
        className="subcarousel"
      >
        {dataSource
          .filter((item) => item.category === category)
          .map((item) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <span>{item.category}</span>
                  <img
                    onClick={() => handleNavigateDetails(item.id)}
                    src={item.poster_path}
                    alt="img"
                  ></img>
                  <div className="box__content">
                    <p className="p_name">{item.name}</p>
                    <p className="p_text">Jun 23, 2024</p>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </>
  );
}
