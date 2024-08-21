import { useEffect, useState } from "react";
import { API_KEY } from "../../constants/const";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useSearchvideo = () => {
  const [searchParams] = useSearchParams();  
  const text = searchParams.get("q");  
  console.log("text",text);
  
  const searchlistredux = useSelector((store) => store.searchStore.searchlist);
  const [searchlist, setSearchlist] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${text}&key=${API_KEY}&type=video&maxResults=10`
    );
    const jsondata = await data.json();
    setSearchlist(jsondata.items);  // Set search results
  };

  useEffect(() => {
    if (searchlistredux[text]) {
      setSearchlist(searchlistredux[text]);  // Use cached results if available
    } else {
      const timer = setTimeout(() => fetchData(), 200);  // Fetch new data with debounce
      return () => clearTimeout(timer);
    }
  }, [text]);

  return searchlist;  // Return the search results
};

export default useSearchvideo;
