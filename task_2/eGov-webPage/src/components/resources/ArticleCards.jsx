import { TAG_STYLES } from "../../global";

export default function ArticleCards({article}){
    const tag = TAG_STYLES[article.category] || { bg: "#f3f4f6", color: "#374151" };
return(
    <div className="article-card">
      <div className="article-img">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="article-body">
        <span
          className="art-tag"
          style={{ background: tag.bg, color: tag.color }}
        >
          {article.category}
        </span>
        <h6>{article.title}</h6>
        <p>
          An in-depth look at how digital infrastructure is reshaping governance and public service delivery across India's urban landscape.
        </p>
        <div className="article-footer">
          <span className="article-meta">
            📅 {article.date} · ⏱ {article.readTime}
          </span>
          <span className="article-price">{article.price}</span>
        </div>
      </div>
    </div>
)
}