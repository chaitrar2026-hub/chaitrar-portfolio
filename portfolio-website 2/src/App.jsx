import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  useReveal();
  return (<>
    <a className="skip" href="#profile">Skip to content</a>
    <Nav />
    <main>
      <Hero /><About /><Process /><Expertise /><Projects /><WhyMe /><Testimonials /><Faq /><Connect />
    </main>
    <Footer />
  </>);
}
