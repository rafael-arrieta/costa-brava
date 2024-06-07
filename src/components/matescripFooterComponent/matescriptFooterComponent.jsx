import React from 'react'
import './matescriptFooterComponent.css'
import matescripLogo from '../../assets/logos/matescript-logo.svg';
import instagramIcon from '../../assets/icons/instagram.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import verticalLogo from '../../assets/logos/vertical-logo.svg'

const MatescriptFooterComponent = () => {
  return (
    <div className='footer-container'>
        <div className='footer-data'>
          <div className='footer-logo'>
            <img src={verticalLogo} alt="" />
          </div>
          <div className='footer-section'>
            <h2>Piscinas Costa Brava</h2>
            <ul className='footer-ul'>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#quienes-somos">Quienes somos</a></li>
              <li><a href="#nuestra-propuesta">Nuestra propuesta</a></li>
              <li><a href="#sucursales"> Nuestras sucursales</a></li>
              <li><a href="#contacto">Formulario de contacto</a></li>
            </ul>
          </div>
          <div className='footer-section'>
            <h2>Medios de contacto</h2>
            <ul className='footer-ul'>
              <li>info@piscinascostabrava.com.ar</li>
              <li>Tel: +54 9 11 3477 7809</li>
              <li>
                <a href='https://www.instagram.com/pcostabrava/' target="_blank">www.costabravapiscinas.com.ar</a> 
              </li>
            </ul>
          </div>
          <div className='footer-section'>
            <h2>Redes Sociales</h2>
            <ul className='footer-ul-social'>
              <li>
                <a className="social-media-footer" href='https://www.instagram.com/pcostabrava/' target="_blank">
                  <img src={instagramIcon} alt=""/><p>@pcostabrava</p>
                </a> 
              </li>
              <li>
                <a className="social-media-footer" href='https://www.facebook.com/profile.php?id=61559303601949' target="_blank">
                  <img src={facebookIcon} alt="" /> <p>costa brava piscinas</p>
                </a>
              </li>
            </ul>
          </div>


        </div>
        <div href="https://www.matescript.com" target="_blank" className='matescript-footer'>
          <p>Ésta página fue diseñada por </p>
          <img src={matescripLogo} alt="" className='matescript-footer-img' />
        </div>
    </div>
  )
}

export default MatescriptFooterComponent