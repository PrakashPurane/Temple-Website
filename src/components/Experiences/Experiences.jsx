import React from 'react'
import './Experiences.css'
import nextbutton from '../../assets/next-button.png'
import backbutton from '../../assets/back-button.png'
import image1 from '../../assets/arrimage1.png'
import image2 from '../../assets/arrimage2.png'
import image3 from '../../assets/arrimage3.png'
import image4 from '../../assets/arrimage4.png'
import image5 from '../../assets/arrimage5.jpg'


const Experiences = () => {
  return (
    <>
    <h1 className='experienc-heading'>Experiences</h1>
    <div className='experiences'>
        <img src={nextbutton} alt="" className='next-btn' />
        <img src={backbutton} alt="" className='back-btn' />
        <div className="slider">

        <ul>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={image1} alt="" />
                        <div>
                            <h3>Kp Oli</h3>
                            <span>Formal P.M.</span>
                        </div>
                    </div>
                    <p>Visiting all these temples make my heart so pure. I suggest everyone to visit temples and purify all their bad souls. It helps to make you peace ,calm and keep you fit and healthy</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={image2} alt="" />
                        <div>
                            <h3>Prachanda</h3>
                            <span>Current P.M.</span>
                        </div>
                    </div>
                    <p>Visiting all these temples make my heart so pure. I suggest everyone to visit temples and purify all their bad souls. It helps to make you peace ,calm and keep you fit and healthy</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={image3} alt="" />
                        <div>
                            <h3>Rabi Lamichhane</h3>
                            <span>Deputy M.</span>
                        </div>
                    </div>
                    <p>Visiting all these temples make my heart so pure. I suggest everyone to visit temples and purify all their bad souls. It helps to make you peace ,calm and keep you fit and healthy</p>
                </div>
            </li>
        </ul> <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={image4} alt="" />
                        <div>
                            <h3>Binod Chaudhary</h3>
                            <span>Owner of WaiWai</span>
                        </div>
                    </div>
                    <p>Visiting all these temples make my heart so pure. I suggest everyone to visit temples and purify all their bad souls. It helps to make you peace ,calm and keep you fit and healthy</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={image5} alt="" />
                        <div>
                            <h3>Jhalnath Khanal</h3>
                            <span>Formal P.M.</span>
                        </div>
                    </div>
                    <p>Visiting all these temples make my heart so pure. I suggest everyone to visit temples and purify all their bad souls. It helps to make you peace ,calm and keep you fit and healthy</p>
                </div>
            </li>
        </div>
    </div>
    </>
  )
}

export default Experiences
