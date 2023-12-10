import React from 'react'

const VideoContainerShimmer = () => {
  return (
    <div className="h-[calc(100vh-7.8rem)]  overflow-y-scroll custom-scrollbar1 grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {Array.apply(null, Array(16)).map((_, i) => {
          return (
            <div
              className="relative h-60 m-2 rounded-md overflow-hidden md:w-[19.5rem]  "
              key={i}
            >
              <div className="bg-gray-200 h-40 rounded-xl shimmer-animation"></div>
              <div className="flex">
                <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-4 h-2 shimmer-animation"></div>
                <div>
                  <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-60 h-2 shimmer-animation"></div>
                  <div className="bg-gray-200 mt-3 ml-3 rounded-xl w-72 md:w-60 h-2 shimmer-animation"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default VideoContainerShimmer