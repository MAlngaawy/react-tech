import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container mx-auto w-4/5">
      <h2 className="text-2xl text-center py-6 font-bold">
        Hello This is a rect app to test any new technonogies
      </h2>
      <Link to="/form">go to from Page</Link>
    </div>
  );
};

export default Home;
