
import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import firebase from 'firebase';








const Contact = () => {

  // Remoteconfig Variables
  const remoteConfig = firebase.remoteConfig();
  
  
  const REACT_APP_UserId = remoteConfig.getValue('REACT_APP_UserId').asString();
  const REACT_APP_TemplateId = remoteConfig.getValue('REACT_APP_TemplateId').asString();
  const REACT_APP_ServiceId = remoteConfig.getValue('REACT_APP_ServiceId').asString();
 

  init(REACT_APP_UserId);


    const sendEmail = (e)  => {

    e.preventDefault();

    emailjs.sendForm(
       REACT_APP_ServiceId ? REACT_APP_ServiceId : `${process.env.REACT_APP_ServiceId}`,
       REACT_APP_TemplateId ? REACT_APP_TemplateId : `${process.env.REACT_APP_ServiceId}`, 
       e.target, 
       REACT_APP_UserId ? REACT_APP_UserId : `${process.env.REACT_APP_UserId}`)
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
  }

    return (
<div className="container" id="container-loader">
    <div className="row contact-row" id="contact-row-id">
        <div className="col-xs col-sm col-md col-lg col-xl contact-container" id="contact-container-id">
          <div className="form">
            <h1 className="contact-content">Contact Us</h1>

            <form id="contact" onSubmit={sendEmail}>
              <div className="form-group">
                <label for="name">Name </label>
                <br />
                <input className="form-control" type="text" name="from_name" id="name" required />
              </div>
              <div className="form-group">
                <label for="email"> Email </label>
                <br />
                <input className="form-control" type="email" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label for="message"> Message </label>
                <br />
                <textarea className="form-control" rows="3" name="message" id="message" required></textarea>
              </div>
              <input className="form-control btn" type="submit" value="Send Email" id="submit" />
            </form>

          </div>
           
            </div>
        </div>
        <video autoPlay muted id="video">
  <source src="https://res.cloudinary.com/dyew1z2ms/video/upload/v1609972343/Portfolio/video_op4mbh.mp4" type="video/mp4" />
    </video>
      </div>
    )
}

export default Contact;