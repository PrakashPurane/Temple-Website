import React from 'react';
import './Rituals.css';
import rituals1 from '../../assets/rituals1.jpg'
import rituals2 from '../../assets/rituals2.jpg'
import rituals3 from '../../assets/rituals3.jpg'
import rituals4 from '../../assets/rituals4.jpg'
import rituals5 from '../../assets/rituals5.jpg'
import rituals6 from '../../assets/rituals6.jpg'
import arrow from '../../assets/arrow.png'

const Rituals = () => {
  return (
    <>
    <h1 className='ritual-heading'>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        Rituals Destinations
    </h1>
    <div className='rituals'>
        <div className="ritual">
            <img src={rituals1} alt="" />
            <img src={rituals2} alt="" />
            <img src={rituals3} alt="" />
            <img src={rituals4} alt="" />
            <img src={rituals5} alt="" />
            <img src={rituals6} alt="" />
        </div>
        <button className='btn'>See more here <img src={arrow} alt="" /></button>
      
    </div>
    </>
  )
}

export default Rituals
