import useArticles from "../../hooks/useArticles";
import useFilter from "../../hooks/useFilter";

import ArticleCards from "./ArticleCards";
import SkelCards from "./SkelCards";
import EmptyState from "./EmptyState";
import Controls from "./Controls";

export default function ResourceSec(){
    const { articles, loading, error } = useArticles();
    const { search, setSearch, activeCategory, setActiveCategory, filtered } = useFilter(articles);


return(
    <section className="latest" id="latest">
      <div className="latest-inner">
        <div className="latest-header">
          <span className="section-tag">Resources</span>
          <h2 className="section-title">
            Latest at <span style={{ color: "var(--primary)" }}>eGov</span>
          </h2>
        </div>
 
        <Controls
          search={search}
          setSearch={setSearch}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          resultCount={filtered.length}
          loading={loading}
        />
 
        <div className="articles-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkelCards key={i} />)
          ) : error ? (
            <div className="error-state">{error}</div>
          ) : filtered.length === 0 ? (
            <EmptyState search={search} activeCategory={activeCategory} />
          ) : (
            filtered.map((article) => (
              <ArticleCards key={article.id} article={article} />
            ))
          )}
        </div>
      </div>
    </section>
)
}