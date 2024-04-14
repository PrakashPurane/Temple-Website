import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact ";
import Experiences from "./components/Experiences/Experiences";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Rituals from "./components/Rituals/Rituals";
import Title from "./components/Title/Title";

function App() {
  return(
  <>
  <Navbar />
  <Hero/>
  <Title/>
  <About/>
  <Gallery/>
  <Rituals/>
  <Experiences/>
  <Contact/>
  <Footer/>

  </>
  )
};
export default App;
