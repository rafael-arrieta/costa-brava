import React, { useEffect, useState } from 'react'
import whatsAppLogo from '../../assets/images/whatsapp-service-1.svg'
import './whatsappIconComponent.css'


const WhatsappIconComponent = () => {


    return (
        <div className="whatsapp-icon">
            <a href="https://wa.me/+5491134777809" target="_blank" rel="nofollow">
                <img style={{marginRight: '20px'}} src={whatsAppLogo}/>
            </a>
        </div>
    );
}

export default WhatsappIconComponent