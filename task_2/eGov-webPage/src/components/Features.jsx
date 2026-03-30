import { FEATURES } from "../global";

export default function Features(){
    
return(
     <section className="features">
      <div className="features-inner">
        <span className="section-tag">Bold Approaches</span>
        <h2 className="section-title">
          Big problems need{" "}
          <span style={{ color: "var(--primary)" }}>bold approaches</span>
        </h2>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="f-icon" style={{ background: f.bg }}>
                {f.icon}
              </div>
              <div className="f-num" style={{ color: f.color }}>
                {f.num}
                <small style={{ fontSize: "1rem", color: "var(--muted)", fontWeight: "500" }}>
                  {" "}{f.label}
                </small>
              </div>
              <h5>{f.title}</h5>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
)
}