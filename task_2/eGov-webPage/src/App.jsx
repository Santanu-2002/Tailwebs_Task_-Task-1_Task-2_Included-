import  "./styles/index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Cta from "./components/CTA";
import ResourceSec from "./components/resources/ResourceSec";
import Footer from "./components/Footer";

export default function App(){
    
return(
  <>
  <Navbar/>
  <Hero/>
  <Stats/>
  <Features/>
  <Cta/>
  <ResourceSec/>
  <Footer/>
  </>
)
}