import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="container mx-auto w-4/5">
      <h2 className="text-2xl text-center py-6 font-bold">This is From Page</h2>
      <Link to="/"> Home </Link>
    </div>
  );
};

export default Form;
