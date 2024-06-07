import React, { useState } from 'react';
import FormComponent from '../formComponent/formComponent';
import contactImage from '../../assets/images/contact-us.jpeg';
import './emailHandlerComponent.css'
import SocialMediaComponent from '../socialMediaComponent/socialMediaComponent';

const EmailHandlerComponent = () => {
  const VITE_API_URL = import.meta.env.VITE_API_URL

  const [formDataState, setFormDataState] = useState('')

  const sendEmail = async (formData) => {
    try {
      const response = await fetch(VITE_API_URL+'send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      setFormDataState('success')

      const data = await response.json();
      console.log('Email sent successfully:', data);

    } catch (error) {
      console.error('Error sending email:', error);
      setFormDataState('error')
    }
  };

  return (
    <section className="contact-us" id='contacto'>

      <img src={contactImage} alt="" className='contact-us-img'/>
      <div className='email-handler-container'>
        <SocialMediaComponent/>
        <div className='email-handler-card'>
          <h3>Contactanos</h3>
          <FormComponent onSubmit={sendEmail} />
            {formDataState !== '' && (
                <>
                {formDataState === 'success' && <p className='form-response-success' >El email se envió correctamente</p>}
                {formDataState === 'error' && <p className='form-response-error' >Hubo un error en el envío del email</p>}
                </>
            )}
        </div>
            
      </div>
    </section>
  );
};

export default EmailHandlerComponent;

/*
      <div className="contact-info">
          <h4>Sucursales</h4>
          <ul className="contact-info-list">
            <li><h5>Chapinero</h5><p>Calle 15 # 24-24 - <span>Tel (57) 1 234 5678 </span></p></li>
            <li><h5>Usasquen</h5><p>Calle 15 # 24-24 - <span>Tel (57) 1 234 5678 </span></p></li>
            <li><h5>Antonio Nariño</h5><p>Calle 15 # 24-24 - <span>Tel (57) 1 234 5678 </span></p></li>
          </ul>
        </div>

*/