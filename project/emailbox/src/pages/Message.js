import { useState } from "react";
import { HiOutlineInboxIn } from "react-icons/hi";
import { RiDraftLine, RiErrorWarningLine } from "react-icons/ri";
import { BiLoaderCircle, BiSend, BiUser, BiTrash } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiTwotoneEdit,
  AiOutlineArrowLeft,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { useFetch } from "../hooks/useFetch";
import { Navigate, useParams } from "react-router-dom";

const Message = () => {
  const id = useParams();
  console.log(id.mailId);

  const { data, loading, error } = useFetch(`/emails/${id.mailId}`);
  console.log("----> single email :", data);
  const [visible, setVisble] = useState(false);
  const handleClick = () => {
    setVisble(!visible);
  };
  return (
    <div className=" flex ">
      <div className="flex   flex-col w-[15%] bg-gray-100  h-screen sticky  ">
        <div className="bg-gray-50  mx-2 gap-1 flex  w-[15p0x] mt-5 py-3 px-1 rounded-lg items-center">
          <AiTwotoneEdit size={25} />
          <button onClick={handleClick}>New Message</button>
        </div>
        <div className="flex text-black mt-5 pl-3">
          <ul>
            <div className="flex items-center gap-2 py-2">
              <HiOutlineInboxIn size={20} />
              <li className="cursor-pointer"> Inbox 100</li>
            </div>
            <div className="flex items-center gap-2 py-2">
              <BiSend size={20} />
              <li className="cursor-pointer"> Sent</li>
            </div>
            <div className="flex items-center gap-2 py-2">
              <RiDraftLine size={20} />
              <li className="cursor-pointer"> Draft</li>
            </div>
            <div className="flex items-center gap-2 py-2">
              <BiLoaderCircle size={20} />
              <li className="cursor-pointer"> Pending</li>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
      <div className="bg-black-200 w-[85%]  bg-gray-100  flex flex-col relative ">
        <div className="flex items-center justify-between mt-5">
          <div className=" flex bg--white  bg-white  w-[900px] h-[60px] items-center rounded-xl gap-6  ml-5 px-3 ">
            <BsSearch size={25} />
            <input
              placeholder="Search for a message.."
              type="text"
              className="border-none w-[800px] h-[50px] outline-none "
            />
          </div>
          <span className="flex gap-3 items-center pr-5">
            <AiOutlineInfoCircle size={27} />
            <AiOutlineSetting size={25} />
            <BiUser size={25} className="border-2 border-black rounded-full " />
          </span>
        </div>
        <div className="flex flex-col bg-white mt-5 h-[500px] mr-5 rounded-lg border-none">
          <div className="flex gap-5 p-3">
            <AiOutlineArrowLeft size={20} />
            <RiErrorWarningLine size={20} />
            <AiOutlineMail size={20} />
            <AiOutlineClockCircle size={20} />
            <BiTrash size={20} />
          </div>
          <div>
            <span className="flex items-start p-5 text-2xl">{data?.title}</span>
            <span className="flex items-start p-5 ">{data?.sendername}</span>
            <hr />
            <span className="flex items-start p-5 w-[70%]">
              <p>{data?.content}</p>
            </span>
            <div className=" flex gap-10 items-center justify-start mt-20">
              <div className="flex items-end gap-1 border-2 rounded-xl p-1 w-32 px-4 border-gray-700 ">
                <BsArrow90DegLeft />
                <button className="">Answer</button>
              </div>
              <div className="flex items-end gap-1 border-2 rounded-xl p-1 w-32 px-4 border-gray-700 ">
                <button>foward</button>
                <BsArrow90DegRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className="bg-white  flex  flex-col absolute w-[400px] h-[400px] mx-[100px] mt-[18%] ">
          <div className="flex justify-end mb-2 mr-3">
            <AiOutlineClose size={20} onClick={handleClick} />
          </div>
          <div className="flex px-2 mt-1">
            <h5>To :</h5>
            <input
              type="text"
              placeholder=""
              className="w-[80%] outline-none px-3"
            />
          </div>
          <hr />
          <div className="flex px-2 ">
            <h5>subject :</h5>
            <input
              type="text"
              placeholder=" "
              className="w-[80%] outline-none px-3"
            />
          </div>
          <hr />
          <div>
            <input
              type="text"
              placeholder=" your text message "
              className="w-[80%] h-[300px] outline-none "
            />
          </div>
          <button
            className="bg-blue-900 w-20 rounded-lg  ml-3"
            onClick={() => {
              setVisble(!visible);
            }}
          >
            send
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
