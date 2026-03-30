import { NAV_LINKS } from "../global";

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-brand">
        e<span>GOV</span>
      </div>
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <a key={link} className="nav-link-item" href="#">
            {link}
          </a>
        ))}
      </div>
      <button className="btn-contact">Contact Us</button>
    </nav>
  );
};
