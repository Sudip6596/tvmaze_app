import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Show from "./SingleShow";
import SearchPage from "./SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Show />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
