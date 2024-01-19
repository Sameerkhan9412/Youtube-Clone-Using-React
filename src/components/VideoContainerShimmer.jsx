import React from 'react'

const VideoContainerShimmer = () => {
  return (
    <div className="h-[calc(100vh-7.8rem)]  overflow-y-scroll custom-scrollbar1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {Array.apply(null, Array(16)).map((_, i) => {
          return (
            <div
              className=" m-2 rounded-md"
              key={i}
            >
              <div className="bg-gray-200  rounded-xl shimmer-animation aspect-video"></div>
              <div className="flex  gap-2">
                <div className="bg-gray-200 mt-3 ml-1 rounded-full  p-4 h-2 shimmer-animation"></div>
                <div className='w-full overflow-hidden'>
                  <div className="bg-gray-200 mt-3 ml-1 rounded-xl w-full h-3 shimmer-animation"></div>
                  <div className="bg-gray-200 mt-1 ml-1 rounded-xl w-1/2  h-2 shimmer-animation"></div>
                  <div className="bg-gray-200 mt-1 ml-1 rounded-xl w-1/3  h-2 shimmer-animation"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  )
}

export default VideoContainerShimmer