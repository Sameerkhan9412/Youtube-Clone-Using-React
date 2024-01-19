const SearchShimmer = () => {
    return (
      // <div className="flex-col w-fit h-full flex flex-wrap justify-center  gap-3">
      <div className="flex flex-col gap-3">
        {Array.apply(null, Array(8)).map((_, i) => {
          return (
            <div
              className="md:grid grid-cols-5 gap-2 items-center"
              key={i}
            >
              <div className="bg-gray-200  rounded-xl aspect-video shimmer-animation col-span-2"></div>
              <div className="flex flex-col md:col-span-3 ">
                <div className="bg-gray-200 mt-1 md:mt-3  md:ml-3 rounded-xl w-[90%] md:w-60 h-3 shimmer-animation "></div>
                <div className="bg-gray-200 mt-1 md:mt-3 md:ml-3 rounded-xl w-1/3 md:w-60 h-3 shimmer-animation"></div>
              </div> 
            </div>
          );
        })}
      </div>
    );
  };
  
  export default SearchShimmer;