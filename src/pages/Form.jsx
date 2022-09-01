import React from "react";
import { Link } from "react-router-dom";
const submitForm = (e) => {
  e.preventDefault();
  console.log("Submited", e, e.target);
};

const Form = () => {
  return (
    <div className="container mx-auto w-4/5">
      <Link to="/"> Home </Link>
      <h2 className="text-2xl text-center py-6 font-bold">This is From Page</h2>
      <div>
        <form action="submit" onSubmit={submitForm}>
          <input
            className="  m-6 block p-2 border rounded-2"
            type="text"
            placeholder="name"
          />
          <input
            className="  m-6 block p-2 border rounded-2"
            type="number"
            placeholder="number"
          />
          <RadioInput name="testOne" id={1} />
          <input
            className="  m-6 block p-2 border rounded-2"
            type="submit"
            name="Submit"
            id="1"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;

const RadioInput = ({ name, id }) => {
  return (
    <div className="flex items-center">
      <input className="w-fit" id={id} type="radio" name={name} />
      <label htmlFor={id} className="inline w-fit">
        Test it
      </label>
    </div>
  );
};
