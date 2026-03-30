import { useState,useEffect } from "react";

import Dummy_Data from "../data/dummyData";

export default function useArticles(){
    
 const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    setLoading(true);
    setError(null);
 
    const timer = setTimeout(() => {
      try {
        setArticles(Dummy_Data);
      } catch (err) {
        setError("Failed to load articles. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 1800);
 
    return () => clearTimeout(timer);
  }, []);
 
  return { articles, loading, error };

}