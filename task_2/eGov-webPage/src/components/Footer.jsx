import { FOOTER_COMPANY_LINKS, FOOTER_PLATFORM_LINKS } from "../global";

export default function Footer(){
    
return(
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            e<span>GOV</span>
          </div>
          <p>
            Helping governments use digital technology to provide services locally in a way that is easy to access, inclusive, and transparent.
          </p>
        </div>
 
        <div>
          <div className="footer-heading">Company</div>
          {FOOTER_COMPANY_LINKS.map((link) => (
            <a key={link} href="#" className="footer-link">
              {link}
            </a>
          ))}
        </div>
 
        <div>
          <div className="footer-heading">Platform</div>
          {FOOTER_PLATFORM_LINKS.map((link) => (
            <a key={link} href="#" className="footer-link">
              {link}
            </a>
          ))}
        </div>
 
        <div>
          <div className="footer-heading">Subscribe Now</div>
          <p style={{ marginBottom: "1rem" }}>
            Receive monthly newsletter DOT in your inbox.
          </p>
          <div className="newsletter-group">
            <input type="email" placeholder="Your email address" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </div>
 
      <div className="footer-bottom">
        <span>All Rights Reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </div>
      </div>
    </footer>
)
}