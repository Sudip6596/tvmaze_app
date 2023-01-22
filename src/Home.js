import React from "react";
import "./Home.css";
import Header from "./Header";
import GenreList from "./GenreList";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

function Home() {
  const { data, loading, result } = useGlobalContext();

  return (
    <div className="app">
      <Header />

      <div className="body">
        <GenreList shows={data} genre="Action" />
        <GenreList shows={data} genre="Comedy" />
        <GenreList shows={data} genre="Science-Fiction" />
        <GenreList shows={data} genre="Drama" />
      </div>
    </div>
  );
}

export default Home;
