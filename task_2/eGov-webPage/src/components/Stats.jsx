import { STATS } from "../global";

export default function Stats(){
    
return(
    <section className="stats">
      <div className="stats-inner">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <div className="stat-num">
              {stat.num}
              <span>{stat.suffix}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
)
}