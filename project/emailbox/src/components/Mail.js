import React from "react";
import { FaUserCircle } from "react-icons/fa";
const Mail = ({ date, sendername, content, handleClick }) => {
  return (
    <div className="bg-white rounded-xl px-2">
      <div className="m-4"></div>
      <div className="flex items-center border-[1px] py-1 px-3 m-2  bg-white border-b-gray-500 gap-2 ">
        <div className="w-[5%]">
          <FaUserCircle size={25} />
        </div>
        <div
          className="flex justify-between w-[95%] py-3 cursor-pointer"
          onClick={handleClick}
        >
          <div className=" flex w-[80%] gap-10">
            <div>
              <h2 className="font-extrabold pl-3">{sendername}</h2>
            </div>
            <div>{content}</div>
          </div>
          <div className="flex flex-col">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
