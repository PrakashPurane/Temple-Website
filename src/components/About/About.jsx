import React from 'react'
import './About.css'
import about_img from '../../assets/image.jpg'
import play_button from '../../assets/playbutton.png'

const About = ({setPlayState}) => {
  return (
    <>
    <h2>About Us</h2>

    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about_img'/> 
            <img src={play_button} alt=""  className='play_button' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
          <h1>Temple</h1>
        <p>Temple is source of pure soul. </p>
        </div>
    </div>
    </>
  )
}

export default About
