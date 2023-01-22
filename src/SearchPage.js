import React from "react";
import "./Home.css";
import Header from "./Header";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

function SearchPage() {
  const { data, loading, result } = useGlobalContext();
  return (
    <div className="app">
      <Header />

      <div className="search_result">
        <p className="search_title">Search results</p>
        <div className="search_result_show">
          {result.length ? (
            result.map((show) => (
              <Link to={`/${show.id}`} className="show" key={show.id}>
                <img src={show.image.medium} alt="img" />

                <h3>{show.name}</h3>
                <p>Rating: {show.rating.average} / 10</p>
              </Link>
            ))
          ) : (
            <>
              <Link to="/" className="btn_not_found">
                <p>No Shows Found, Back To Home</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
