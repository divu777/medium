import React from "react";
import { NavLink } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg  w-full  md:w-2/3 md:hover:scale-105 transition-scale duration-500 cursor-pointer">
      <NavLink to={`/blog/${id}`} className="w-full">
        <div className="w-full flex flex-col justify-center">
          <div className="flex justify-start gap-3 mb-4 items-center w-full">
            <Avatar name={authorName} />

            <p className="font-semibold text-gray-800">{authorName}</p>
            <p className="text-gray-500">{publishedDate}</p>
          </div>
          <div className="mt-4 bg-red-100 w-full p-5">
            <h1 className="text-2xl font-bold text-black w-1/3 bg-blue-300">
              {title}
            </h1>
            <p className="text-gray-700 mt-2">
              {content.length <= 250
                ? content
                : `${content.substring(0, 250)}...`}
            </p>
            <p>{`${Math.ceil(content.length / 100)} mins`}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default BlogCard;

interface AvatarProps {
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ name }) => {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name.split(" ")[0][0].toUpperCase()}
      </span>
    </div>
  );
};
