import Mail from "./Mail";
import Loader from "./Loader";
import { useState } from "react";
import { HiOutlineInboxIn } from "react-icons/hi";
import { RiDraftLine } from "react-icons/ri";
import { BiLoaderCircle, BiSend, BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiTwotoneEdit,
  AiOutlineClose,
} from "react-icons/ai";

import { useFetch } from "../hooks/useFetch";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [destination, setDestination] = useState();
  const [titke, setTitle] = useState();
  const [content, setContent] = useState();
  const [body, setBody] = useState({
    destination: "",
    title: "",
    content: "",
    sent: true,
    sendername: "akilimalijoelle@gmail.com",
  });
  const [loading2, setLoading2] = useState(false);

  const senMail = async () => {
    if (!body.destination || !body.title || !body.content) {
      alert("all information are required before sending mail");
    }
    await axios
      .post("http://localhost:8000/api/emails", body)
      .then((res) => {
        setLoading2(false);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  };

  const { data, loading, error } = useFetch("/emails/inbox");

  const [visible, setVisble] = useState(false);
  const handleClick = () => {
    setVisble(!visible);
  };

  return (
    <div className=" flex  ">
      <div className="flex   flex-col w-[15%] bg-gray-100  h-screen sticky  ">
        <div className="bg-gray-50  mx-2 gap-1 flex  w-[15p0x] mt-5 py-3 px-1 rounded-lg items-center">
          <AiTwotoneEdit size={25} />
          <button onClick={handleClick}>New Message</button>
        </div>
        <div className="flex text-black mt-5 pl-3">
          <ul>
            <div className="flex items-center gap-2 py-2 bg-blue-300 rounded-lg w-[150px]">
              <HiOutlineInboxIn size={20} />
              <Link to="/mails">
                <li className="cursor-pointer "> Inbox </li>
              </Link>
            </div>
            <div className="flex items-center gap-2 py-2">
              <BiSend size={20} />
              <Link to="/mails/sent">
                <li className="cursor-pointer"> Sent</li>
              </Link>
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
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-col bg-white mt-5 rounded-lg border-none">
              {data.map((item, key = item._id) => (
                <Link to={`/mails/${item._id}`}>
                  <Mail
                    content={
                      item.content.length > 90
                        ? item.content.substring(0, 80) + "..."
                        : item?.description
                    }
                    sendername={item?.sendername}
                    date={item?.createdAt}
                  />
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
      {visible && (
        <div className="bg-white h-[100px] flex  flex-col absolute w-[400px] h-[400px] mx-[100px] mt-[18%] ">
          <div className="flex justify-end mb-2 mr-3">
            <AiOutlineClose size={20} onClick={handleClick} />
          </div>
          <div className="flex px-2 mt-1">
            <h5>To :</h5>
            <input
              type="text"
              placeholder=""
              className="w-[80%] outline-none px-3"
              onChange={(e) => {
                setBody({ ...body, destination: e.target.value });
              }}
            />
          </div>
          <hr />
          <div className="flex px-2 ">
            <h5>subject :</h5>
            <input
              type="text"
              placeholder=" "
              className="w-[80%] outline-none px-3"
              onChange={(e) => {
                setBody({ ...body, title: e.target.value });
              }}
            />
          </div>
          <hr />
          <div>
            <textarea
              type="text"
              placeholder=" your text message "
              className="w-[80%] h-[200px] p-2 mt-0  outline-none"
              onChange={(e) => {
                setBody({ ...body, content: e.target.value });
              }}
            />
          </div>
          <button
            className="bg-blue-900 w-20 rounded-lg  ml-3  text-white"
            onClick={() => {
              setVisble(!visible);
              senMail();
            }}
          >
            send
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
