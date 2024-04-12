import React from "react";
import "./Gallery.css";
import Gallery4 from "../../assets/gallery4.jpg";
import Gallery2 from "../../assets/gallery2.jpg";
import Gallery3 from "../../assets/gallery3.jpeg";
import icon1 from "../../assets/icon1.png";

const Gallery = () => {
  return (
    <>
    <h1 className="first-gallery">Gallery</h1>
      <div className="galleries">
        <div className="gallery">
          <img src={Gallery4} alt="" />
          <div className="caption">
            <img src={icon1} alt="" />
            <p>Stone Chariot</p>
          </div>
        </div>

        <div className="gallery">
          <img src={Gallery2} alt="" />
          <div className="caption">
            <img src={icon1} alt="" />
            <p>Jalakandeswarar Temple</p>
          </div>
        </div>

        <div className="gallery">
          <img src={Gallery3} alt="" />
          <div className="caption">
            <img src={icon1} alt="" />
            <p>kailash Temple</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
