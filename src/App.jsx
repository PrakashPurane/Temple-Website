import { useState } from "react";
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
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const[playState,setPlayState]=useState(false);
  return(
  <>
  <Navbar />
  <Hero/>
  <Title/>
  <About setPlayState={setPlayState}/>
  <Gallery/>
  <Rituals/>
  <Experiences/>
  <Contact/>
  <Footer/>
  <VideoPlayer playState={playState} setPlayState={setPlayState}/>

  </>
  )
};
export default App;
