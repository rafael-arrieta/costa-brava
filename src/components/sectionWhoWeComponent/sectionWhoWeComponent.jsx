import React from 'react'
import './sectionWhoWeComponent.css'
import quienesSomos from '../../assets/images/quienes-somos.jpg';

const SectionWhoWeComponent = () => {
  return (
    <section id='quienes-somos'>
      <div className='who-we-container' >

        <img src={quienesSomos} alt="" className='who-we-img' />
        <div className='who-we-text'>
          <h2>Quienes somos</h2>
          <p>
            Tras años de experiencia en diversas empresas del rubro, decidimos 
            emprender nuestro propio camino, en Costa Brava nos dedicamos a construir 
            no solamente piscinas sinó experiencias. Aportamos a tu obra todo nuestro 
            conocimiento en procedimientos constructivos y materiales de alta calidad. 
          </p>
          <p>
          Nos especializamos en ofrecer un servicio completo y personalizado, adaptándonos 
          a tus necesidades y garantizando resultados excepcionales con una excelente 
          relación <span>costo-beneficio</span> .
          </p>
          <p>Con nosotros, encontrarás la confianza y el compromiso que necesitas para 
            llevar a cabo tu proyecto con la mayor calidad y atención al detalle. </p>
          <p><span>¡Transformamos tus ideas en realidad!</span></p>
          <a href='#nuestra-propuesta'>Nuestros productos y servicios</a>
        </div>
      </div>
    </section>
  )
}

export default SectionWhoWeComponent