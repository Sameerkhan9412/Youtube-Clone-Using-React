export const YOUTUBE_VIDEO_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=`;

export const YOUTUBE_SEARCH_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_MESSAGES_SHOWING_COUNT=20;

export const YOUTUBE_VIDEO_SEARCH_RESULT_API ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=";

export const COMMENTS_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=";

  export const VIDEO_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=";

//Generated this function from chatgpt
export function formatNumber(number) {
    if (number >= 1e9) {
      // Convert to billions (B)
      return (number / 1e9).toFixed(1) + "B";
    } else if (number >= 1e6) {
      // Convert to millions (M)
      return (number / 1e6).toFixed(1) + "M";
    } else if (number >= 1e3) {
      // Convert to thousands (K)
      return (number / 1e3).toFixed(1) + "K";
    } else {
      // Leave the number as is
      return number?.toString();
    }
  }

  // Utility function to calculate time ago(we can also use library for this but library can be heavy than a function)
export function calculateTimeAgo(publishedAt) {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const timeDifference = currentDate - publishedDate;
  
    if (timeDifference < 60000) {
      return "just now";
    } else if (timeDifference < 3600000) {
      const minutesAgo = Math.floor(timeDifference / 60000);
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 86400000) {
      const hoursAgo = Math.floor(timeDifference / 3600000);
      return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 604800000) {
      const daysAgo = Math.floor(timeDifference / 86400000);
      return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 2629800000) {
      const weeksAgo = Math.floor(timeDifference / 604800000);
      return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
    } else if (timeDifference < 31536000000) {
      const monthsAgo = Math.floor(timeDifference / 2629800000);
      return `${monthsAgo} month${monthsAgo !== 1 ? "s" : ""} ago`;
    } else {
      const yearsAgo = Math.floor(timeDifference / 31536000000);
      return `${yearsAgo} year${yearsAgo !== 1 ? "s" : ""} ago`;
    }
  }
  


