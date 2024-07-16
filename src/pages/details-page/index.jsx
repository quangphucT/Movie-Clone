import { useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import { Col, Image, Row } from "antd";
const DetailsPage = () => {
  const { id } = useParams();
  const [value, setValue] = useState({});
  useEffect(() => {
    axios
      .get(`https://662f3bdb43b6a7dce30ec40b.mockapi.io/Movie/${id}`)
      .then((res) => {
        setValue({
          ...value,
          id: id,
          name: res.data.name,
          description: res.data.description,
          poster_path: res.data.poster_path,
          trailer: res.data.trailer,
          category: res.data.category,
        });
      });
  }, []);
  console.log(id);
  return (
    <div className="details-page">
      <div className="container">
        <div className="details__content">
          <Row>
            <Col span={12}>
              <Image
                src={value.poster_path}
                width={350}
                height={525}
                alt="image"
              />
            </Col>
            <Col span={12}>
              <div className="content__wrapper">
                {" "}
                <h1 className="name">{value.name}</h1>
                <p className="category">{value.category}</p>
                <h1 className="overview">Overview</h1>
                <p className="description">
                  Forty years after his unforgettable first case in Beverly
                  Hills, Detroit cop Axel Foley returns to do what he does best:
                  solve crimes and cause chaos.
                </p>
                <div className="status">
                  <p>
                    Status: <span className="opacity">Released</span>
                  </p>
                  <p>
                    Release Date: <span className="opacity">Jun 20, 2024</span>
                  </p>
                  <p>
                    Runtime: <span className="opacity">1h 58m</span>
                  </p>
                </div>
                <p className="director">
                  Director: <span className="opacity">Mark Molloy</span>
                </p>
                <p className="writter">
                  Writer:{" "}
                  <span className="opacity">
                    Will Beall, Will Beall, Tom Gormican, Kevin Etten
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
