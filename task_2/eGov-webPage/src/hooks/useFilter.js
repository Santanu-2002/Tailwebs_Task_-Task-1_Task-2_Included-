import { useState, useMemo } from "react";

export default function useFilter(articles){
    const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
 
  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCat = activeCategory === "All" || a.category === activeCategory;
      const matchSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.category.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [articles, search, activeCategory]);
 
  return { search, setSearch, activeCategory, setActiveCategory, filtered };
};
