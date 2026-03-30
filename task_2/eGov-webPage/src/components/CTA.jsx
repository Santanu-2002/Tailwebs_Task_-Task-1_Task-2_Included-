import { CTA_CARDS } from "../global";

export default function Cta(){
    
return(
     <section className="cta">
      <div className="cta-inner">
        <div className="cta-text">
          <span
            className="section-tag"
            style={{ background: "rgba(0,201,167,.15)", color: "var(--accent)" }}
          >
            20 Years of Impact
          </span>
          <h2>
            Reimagining for citizens and{" "}
            <span style={{ color: "var(--accent)" }}>sustaining change</span>
          </h2>
          <p>
            Technology is powerful, but only as good as the results when improving the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks needs to be tapped into.
          </p>
          <button className="btn-white">About Us →</button>
        </div>
        <div className="cta-cards">
          {CTA_CARDS.map(([num, label]) => (
            <div className="cta-card" key={label}>
              <div className="cta-card-num">{num}</div>
              <div className="cta-card-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
)
}