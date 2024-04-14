import React from 'react'
import './Contact.css'
import messagebox from '../../assets/messagebox.jpg'
import mailicon from '../../assets/mailicon.jpg'
import phoneicon from '../../assets/phoneicon.jpg'
import locationicon from '../../assets/locationicon.jpg'
import whitearrow from '../../assets/arrow.png'

const Contact  = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8337ff26-20ef-49d3-960f-4fc954457f89");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <h1 className='contact-heading'>Contact Us</h1>
    <h1 className='contact-heading2'>Get in Touch</h1>
    
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a messages <img src={messagebox} alt="" /></h3>
            <p>Feel free to reach out through  contact form  or find our contact  information below. Your feedback,questions and suggestions are important to us as we strive to provide exceptional service  to our  university community.</p>
            <ul>
                <li> <img src={mailicon} alt="" />Contact@templenepal.com</li>
                <li> <img src={phoneicon} alt="" />+9779423561205</li>
                <li>  <img src={locationicon} alt="" />05-Manigram , Butwal</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your messages' required></textarea>
                <button type='Submit' className='btn dark-btn'>Submit now <img src={whitearrow} alt="" /></button>

            </form>
            <span>{result}</span>
        </div>
    </div>
    </>
  )
}

export default Contact 
