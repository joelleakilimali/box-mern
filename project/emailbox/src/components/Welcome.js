import React from "react";
import { BiUser } from "react-icons/bi";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Welcome = () => {
  let navigate = useNavigate();
  const pushtoMail = () => {
    navigate("/mails");
  };
  const { data, loading, error } = useFetch("/emails/countInbox");

  return (
    <div className="flex justify-center h-screen w-screen flex-col items-center bg-black">
      <div className="flex flex-col bg-white h-64 rounded-xl w-[800px] p-3 ">
        <div className="flex justify-between pb-5">
          <span className="border-2 border-black rounded-full p-2 ">
            <BiUser size={30} />
          </span>
          <h1>Joelle Akilimali</h1>
        </div>

        <hr />
        <div className="pt-18">
          <p className="">Welcome back into your Account</p>
          <ul>
            <li> Total Message: {data[0]?.count}</li>
            <li> Unread Message: {data[1]?.unread}</li>
          </ul>
          <button
            className="bg-red-400 w-[200px] mt-6 py-2 rounded-lg"
            onClick={pushtoMail}
          >
            View Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
