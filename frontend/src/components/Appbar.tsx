import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <div className="flex justify-between w-full p-5 border items-center">
      <Link to={"/blogs"}>
        <div>Medium</div>
      </Link>
      <div className="flex gap-10">
        <Link to={"/publish"}>
          <div className="px-4 py-2 bg-green-500 text-white rounded-full">
            Post Blog
          </div>
        </Link>
        <Avatar name="balle" />
      </div>
    </div>
  );
};

export default Appbar;
