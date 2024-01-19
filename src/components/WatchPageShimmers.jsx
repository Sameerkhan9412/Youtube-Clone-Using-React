export const CommentsShimmers=()=>{
    return (
        <div className="w-full">
            {
                Array.apply(null,Array(10)).map((_,i)=>{
                    return (
                        <div className="flex  p-2 rounded-lg my-2 w-full gap-2">
                            <div className=" w-12 h-12  rounded-full bg-gray-200 shimmer-animation"></div>
                            <div className="flex flex-col md:col-span-3  w-full gap-2">
                                <div className="w-1/3 h-6 rounded-md shimmer-animation"></div>
                                <div className="bg-gray-200 h-6 rounded-md shimmer-animation"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export const VideoInfoShimmer=()=>{
    return (
        <div className="w-full h-24 bg-gray-200 mt-1 rounded-md shimmer-animation ">
        </div>
    )
}