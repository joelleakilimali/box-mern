import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="loader flex flex-col">
      <FaSpinner size={50} className="spinner" />
      <p className="mt-5 text-xl">Please wait </p>
    </div>
  );
};

export default Loader;
