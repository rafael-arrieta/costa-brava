import React from 'react'
import './socialMediaComponent.css'
import instagramIcon from '../../assets/icons/instagram.svg'
import facebookIcon from '../../assets/icons/facebook.svg'

const SocialMediaComponent = () => {
  return (
    <div className='social-media-container'>
        <a className="social-media-span" href='https://www.instagram.com/pcostabrava/' target="_blank">
          <img src={instagramIcon} alt="" /><p>@pcostabrava</p>
        </a> 
        <a className="social-media-span" href='https://www.facebook.com/profile.php?id=61559303601949' target="_blank">
          <img src={facebookIcon} alt="" /> <p>costa brava piscinas</p>
        </a>
    </div>
  )
}

export default SocialMediaComponent
