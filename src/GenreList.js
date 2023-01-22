import React from "react";
import "./genrelist.css";
import { Link } from "react-router-dom";

function GenreList({ shows, genre }) {
  let actionShows = shows.filter((show) =>
    show.genres.join("").includes(genre)
  );

  return (
    <div className="genre_list">
      <h2 className="genre">{genre}</h2>

      <div className="list">
        {actionShows.map((show) => (
          <Link to={`/${show.id}`} className="show" key={show.id}>
            <img src={show.image.medium} alt="img" />

            <h3>{show.name}</h3>
            <p>Rating: {show.rating.average} / 10</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GenreList;
