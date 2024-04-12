import React from "react";
import "./Hero.css";
import arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          Temple,where faith intertwines with artistry, echoing centuries of
          devotion.
        </h1>
        <p>
          A sacred edifice, adorned with ornate sculptures and vibrant hues,
          standing as a beacon of spiritual reverence. Within its hallowed
          halls, echoes of prayers past mingle with the scent of incense,
          inviting seekers to transcend earthly bounds. Each step reverberates
          with the weight of history, a testament to enduring faith and timeless
          devotion.
        </p>
        <button className="btn">Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
