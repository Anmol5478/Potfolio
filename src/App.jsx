import Hero from "./pages/Hero.jsx";
import About from "./pages/About.jsx";
import Navbar from "./pages/Navbar.jsx";
import "./App.css";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import { Toaster } from "sonner";
import Footer from "./pages/Footer.jsx";


function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
      <div id="about">
        <About />
        <Projects />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;