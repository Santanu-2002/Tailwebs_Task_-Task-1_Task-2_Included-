import { CATEGORIES } from "../../global";

export default function Controls({ search, setSearch, activeCategory,setActiveCategory, resultCount, loading }){
    
return(
    <div className="controls">
      <div className="search-wrap">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search articles, whitepapers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="filter-pills">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-pill${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {!loading && (
        <span className="results-count">
          {resultCount} result{resultCount !== 1 ? "s" : ""}
        </span>
      )}
    </div>
)
}