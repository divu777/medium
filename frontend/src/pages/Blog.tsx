import { useParams } from "react-router-dom";

import { useBlog } from "../hooks";
import FullBlog from "../components/FullBlog";
import FullBlogSkeleton from "../components/FullBlogSkeleton";

const Blog = () => {
  const { id } = useParams();
  const { blog, loading } = useBlog({ id: id || "" });
  return (
    <div className="bg-white flex  w-screen h-screen ">
      {loading || !blog ? (
        <div className="w-full h-full ">
          <FullBlogSkeleton />
        </div>
      ) : (
        <div className="w-full h-full ">
          <FullBlog blog={blog} />
        </div>
      )}
    </div>
  );
};

export default Blog;
