import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const { amount } = useSelector((store) => store.cart);
  const { testName } = useSelector((store) => store.test);
  console.log(amount);
  console.log(testName);

  return (
    <div className="container mx-auto w-4/5">
      <h2 className="text-2xl text-center py-6 font-bold">
        Hello This is a rect app to test any new technonogies
      </h2>
      <div>
        <span>Cart Store amount : {amount}</span>
        <br />
        <span>Test Store testName : {testName}</span>
      </div>

      <button className="border bg-transparent p-2 m-4 hover:bg-cyan-600 hover:text-white rounded-sm ">
        Click To change ( store )
      </button>

      {/* <Link to="/form">go to from Page</Link> */}
    </div>
  );
};
export default Home;
