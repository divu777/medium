import React, { useState } from "react";
import Appbar from "../components/Appbar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { CreateBlogInput } from "@divakar777balle/blog-common";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<CreateBlogInput>({
    title: "",
    content: "",
  });

  const handlePublish = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, data, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing blog:", error);
    }
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <Appbar />
      <div className="w-full h-full flex flex-col justify-center p-20">
        <div className="grid grid-cols-12 w-full justify-center h-full p-20">
          <div className="col-span-2 flex justify-end items-start border-r border-gray-400 h-full">
            <button className="mt-2" onClick={handlePublish}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.2}
                stroke="currentColor"
                className="size-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="col-span-10 flex flex-col px-5 h-full">
            <div>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
                className="h-24 border-none placeholder:text-gray-400 focus:outline-none placeholder:text-4xl text-4xl"
              />
            </div>
            <div>
              <textarea
                name="content"
                placeholder="Write your content here..."
                onChange={(e) => {
                  setData({ ...data, content: e.target.value });
                }}
                className="w-full h-60 border-none focus:outline-none text-2xl resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;
