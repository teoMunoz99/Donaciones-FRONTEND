import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Search from "../views/Searchs/Search";

const Home = () => {
  return (
    <div className="body-home">
      <Search></Search>
    </div>
  );
};

export default Home;
