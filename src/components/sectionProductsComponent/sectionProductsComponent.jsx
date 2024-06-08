import React from 'react'
import './sectionProductsComponent.css'
import matescripLogo from '../../assets/logos/matescript-logo.svg';

const cardImagesUrl = [
  "card-image-1.jpg",
  "card-image-2.jpg",
  "card-image-3.jpg",
  "card-image-4.jpg",
  "card-image-5.jpg",
  "card-image-6.jpg",
  "card-image-7.jpg",
  "card-image-8.jpg",
  "card-image-9.jpg",
];

const SectionProductsComponent = () => {
  return (
    <>
      <section className='section-container' id='nuestra-propuesta'>
        <div className='products-container'>
          <div className='products-text'>
            <h2>Nuestra Propuesta</h2>
            <p>
              Brindamos un servicio integral en construcción y refacción de piscinas <br></br>
              -medidas estándar o personalizadas- destacando con detalles de terminación de primera 
              calidad, empleando materiales y productos de alta gama.
            </p>

            <ul className='products-ul'>
              <li className='products-li'>Construcción de piscinas de medidas estándar o personalizadas</li>
              <li className='products-li'>Refacciones en general</li>
              <li className='products-li'>Piletas climatizadas y Jacuzzis</li>
              <li className='products-li'>Instalación de luminarias</li>
              <li className='products-li'>Construcción de cascadas y estanques</li>
              <li className='products-li'>Revestimientos (venecitas, travertinos, piedra Bali, aquavation)</li>
              <li className='products-li'>Veredas atérmicas, decks de madera o PVC</li>
              <li className='products-li'>Cerramientos, cercos perimetrales, calefactores (eléctricos, a gas y solares), ionizadores, ablandadores de agua... Y más</li>
            </ul>

            <h3>Garantía y Servicio Postventa</h3>
              <p className='warantee-p'>
                Disfrutá de la tranquilidad con nuestra garantía de 20 años por pérdidas de contención de agua, 
                la cual está respaldada por un certificado firmado ante escribano público. Además, ofrecemos un servicio 
                postventa exclusivo, que cubre daños o reparaciones por defectos en materiales o instalación 
                durante 60 días hábiles desde la entrega, garantizando que cualquier problema se solucione 
                sin costo adicional (siempre que no sea por uso incorrecto). Con nosotros, tu inversión está 
                protegida y podés disfrutar de tu piscina sin preocupaciones.
              </p>
          </div>

          <div className="mosaico-images">
                {cardImagesUrl.map((image, index) => (
                    
                  <img 
                    key={index} 
                    src={`./images/photos/${image}`} 
                    alt={`Imagen ${index + 1}`}
                    />

                ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionProductsComponent