import React from "react";
import "./Home.css"

const Home = () => {
  return (
    <div className="content">
      <form className="row g-3" action="">
        <div className="col-auto">
          <label for="inputSearch" className="visually-hidden">
            Search here
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSearch"
            placeholder="Search here"
          />
        </div>
        
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
