import React from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import Header from "./Header";
import "./SingleShow.css";

function SingleShow() {
  const { data } = useGlobalContext();

  const { id } = useParams();
  const showDetails = data.filter((show) => show.id == id)[0];

  return (
    <div className="app">
      <Header />
      <div className="show_details">
        <div className="details_image_container">
          <img src={showDetails.image.medium} alt="image" />
        </div>
        <div className="details">
          <div className="details_title">
            <h3>{showDetails.name}</h3>
            <p>
              Rating : <span>{showDetails.rating.average}</span>
            </p>
          </div>
          <div className="details_title_undeline"></div>
          <p className="summary">
            {showDetails.summary.replace(/(<([^>]+)>)/gi, "")}
          </p>
          <h4>Premired On: {showDetails.premiered}</h4>
          <p className="status">Status : {showDetails.status}</p>
        </div>
      </div>
      <Link to="/" className="btn">
        <p>Back to Shows</p>
      </Link>
    </div>
  );
}

export default SingleShow;
