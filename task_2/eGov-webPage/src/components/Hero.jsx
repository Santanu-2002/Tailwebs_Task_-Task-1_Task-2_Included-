export default function Hero(){
    
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-label">20 Years of Digital Transformation</span>
          <h1>
            Reimagining public service delivery.<br />
            <em>It's possible.</em>
          </h1>
          <p>
            Catalysts, ecosystem enablers, mission solvers — at eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible services to every citizen.
          </p>
          <div className="hero-btns">
            <button className="btn-primary-h">Our Approach →</button>
            <button className="btn-outline-h">Our Impact</button>
          </div>
        </div>
        <div className="hero-img">
          <img
            src="https://placehold.co/480x340/e8f0ff/0057ff?text=Digital+India"
            alt="Digital India"
          />
        </div>
      </div>
    </section>
  );
};
