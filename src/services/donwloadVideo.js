import { VideoDownloadEndpoint } from "./api";
const {VIDEO_DOWNLOAD_API}=VideoDownloadEndpoint;
export const downloadVideoFunc=(videoId,quality)=>{
    try {
        const anchor = document.createElement('a');
        anchor.href = VIDEO_DOWNLOAD_API+"?url=https://www.youtube.com/watch?v="+videoId+"&itemQuality="+quality;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        
    } catch (error) {
        console.log(error);
    }
}