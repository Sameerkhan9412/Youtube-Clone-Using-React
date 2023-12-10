const SearchShimmer = () => {
    return (
      <div className="flex-col w-fit h-full flex flex-wrap justify-center  gap-3">
        {Array.apply(null, Array(8)).map((_, i) => {
          return (
            <div
              className="grid  grid-cols-7 gap-2  "
              key={i}
            >
              <div className="  bg-gray-200  rounded-xl col-span-3 aspect-video shimmer-animation"></div>
              <div className="col-span-4">
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-32 md:w-60 h-3 shimmer-animation"></div>
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-32 md:w-60 h-3 shimmer-animation"></div>
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-32 md:w-[20rem] h-3 shimmer-animation"></div>
                <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-32 md:w-[25rem] h-3 shimmer-animation"></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default SearchShimmer;