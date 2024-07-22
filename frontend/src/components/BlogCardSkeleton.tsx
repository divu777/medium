const BlogCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg w-full md:w-2/3 md:hover:scale-105 transition-scale duration-500 cursor-pointer">
      <div className="w-full flex flex-col justify-center">
        <div className="flex justify-start gap-3 mb-4 items-center w-full animate-pulse">
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full"></div>
          <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
        </div>
        <div className="mt-4 bg-gray-100 w-full p-5">
          <div className="w-1/3 h-6 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
          <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
