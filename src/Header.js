import React from "react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./header.css";

function Header() {
  const { data, setResult, setLoading, query, setQuery } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchResult = data.filter((show) =>
      show.name.toLowerCase().includes(query)
    );

    setResult(searchResult);
  };

  return (
    <div className="header">
      <div className="header_logo">
        <h1>TV MAZE</h1>
      </div>
      <div className="header_search">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <a
          href="/search"
          className="search_icon"
          type="submit"
          onClick={handleSubmit}
        >
          <GoSearch />
        </a>
      </div>
    </div>
  );
}

export default Header;
