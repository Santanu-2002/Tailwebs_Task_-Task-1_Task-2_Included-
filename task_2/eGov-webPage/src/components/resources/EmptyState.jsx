export default function EmptyState({search, activeCategory}){
    
return(
    <div className="empty-state">
      <div className="empty-icon">🔍</div>
      <h4>No results found</h4>
      <p>
        sorry, couldn't find anything matching{" "}
        <strong>"{search}"</strong> in <strong>{activeCategory}</strong>.
      </p>
    </div>
)
}