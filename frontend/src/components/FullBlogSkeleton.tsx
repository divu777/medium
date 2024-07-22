const FullBlogSkeleton = () => {
  return (
    <div>
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="h-16 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl gap-5">
          <div className="col-span-8 flex flex-col gap-4">
            <div className="h-8 bg-gray-300 animate-pulse w-full"></div>
            <div className="h-6 bg-gray-200 animate-pulse w-1/3"></div>
            <div className="h-4 bg-gray-200 animate-pulse w-full"></div>
            <div className="h-4 bg-gray-200 animate-pulse w-full mt-2"></div>
            <div className="h-4 bg-gray-200 animate-pulse w-full mt-2"></div>
          </div>
          <div className="col-span-4">
            <div className="h-6 bg-gray-300 animate-pulse w-1/2 mb-4"></div>
            <div className="flex w-full gap-4">
              <div className="h-16 w-16 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="flex flex-col gap-2">
                <div className="h-6 bg-gray-300 animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-1/2"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogSkeleton;
