import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import BlogCardSkeleton from "../components/BlogCardSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  return (
    <div>
      <Appbar />
      {loading ? (
        <div className="flex flex-col items-center justify-center text-3xl font-semibold">
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              title={blog.title}
              authorName={blog.author.name || "Anonymous"}
              content={blog.content}
              publishedDate="15-06-2003"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
