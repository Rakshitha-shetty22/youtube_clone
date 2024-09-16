export const API_KEY = "AIzaSyDYQiQA-322UDdZ53KHSotuGn8KSP9cQiU"

export const YOUTUBE_VIDEO_CAT = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key="+ API_KEY;
export const YOUTUBE_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_VIDEO_BASED_ON_ID = "https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key="+API_KEY+"&id="
export const YOUTUBE_LIVE_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&key="+API_KEY