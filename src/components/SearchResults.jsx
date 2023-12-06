import React, { useEffect, useState } from "react";
// import SearchResultCard from "./SearchResultsCard";
import { Link, useSearchParams } from "react-router-dom";

// Import SearchShimmer component here
import SearchShimmer from "./SearchShimmer";
import { YOUTUBE_VIDEO_SEARCH_RESULT_API } from "../utils/constants";
import SearchResultsCard from "./SearchResultsCard";
import ButtonList from "./ButtonList";
// import SearchResultsCard from "./SearchResultCard";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search_query");
  const api_key=process.env.REACT_APP_YOUTUBE_KEY;

  useEffect(() => {
    getResults();
  }, [searchParams]);

  const [searchResult, setSearchResult] = useState([]);

  const getResults = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_RESULT_API +api_key+"&q="+searchTerm);
    const json = await data.json();
    console.log(json.items);
    setSearchResult(json.items);
  };

  return (
    <div className="mx-48">
      {" "}
      <div className="mx-space-y-2 mb-2 md:h-14 md:m-2 md:my-3 flex-col md:flex-row flex cursor-pointer p-1 rounded-lg">
        <ButtonList />
      </div>
      {/* Conditional rendering */}
      {searchResult.length === 0 ? (
        <SearchShimmer /> // Render the shimmer component when searchResult is empty
      ) : (
        searchResult.map((r) => (
          <Link to={"/watch?v=" + r.id.videoId} key={r.id.videoId}>
            <SearchResultsCard info={r} />
          </Link>
        // <div key={r.id.videoId}>
        //     <SearchResultsCard info={r} />
        // </div>
        )
        )
      )}
    </div>
  );
};

export default SearchResult;