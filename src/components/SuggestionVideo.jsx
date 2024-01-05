import React,{useEffect, useState} from 'react'
import { YOUTUBE_VIDEO_SEARCH_RESULT_API } from "../utils/constants";
import { useSelector } from "react-redux";
import SearchResultsCard, { WatchPageSearchResultsCard } from './SearchResultsCard';
import ButtonList from './ButtonList';
import SearchShimmer from './SearchShimmer';
import { Link } from 'react-router-dom';

const SuggestionVideo = ({videoSearchTag}) => {
  const api_key=process.env.REACT_APP_YOUTUBE_KEY;
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        getResults();
    },[videoSearchTag]);
  const getResults = async () => {
    const data = await fetch(YOUTUBE_VIDEO_SEARCH_RESULT_API +api_key+"&q="+videoSearchTag);
    const json = await data.json();
    // console.log(json.items);
    setSearchResult(json.items);
  };
  return (
    <div className='mt-2'>
      <ButtonList/>
      <div className='' >
      {searchResult.length === 0 ? (
        <SearchShimmer /> // Render the shimmer component when searchResult is empty
        ) : (
        searchResult.map((r) => (
          <Link to={"/watch?v=" + r.id.videoId} key={r.id.videoId}>
            <WatchPageSearchResultsCard info={r} />
          </Link>
        )
        )
        )}
      </div>      
    </div>
  )
}

export default SuggestionVideo