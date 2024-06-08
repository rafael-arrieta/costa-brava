import React from 'react'
import './sectionSucursalesComponent.css'

  const suc = [
    {
      id: 1,
      title: 'CABA, Amba y Pcia. de BsAs',
      phone1: 'Gastón +5411 6605 7121',
      phone2: 'César +5411 5177 2238',
      phone3: 'Damian +5411 6131 5940',
      imageUrl: './images/photos-sucursales/sucursal-1.jpg',
    },
    {
      id: 2,
      title: 'Pinamar y costa atlántica',
      phone1: 'Jorge +54 9 2254 42 3519',
      phone2: '',
      phone3: '',
      imageUrl: './images/photos-sucursales/sucursal-2.jpg',
    },
    {
      id: 3,
      title: 'Tucuman',
      phone1: 'Leonardo +549 381 520 5215',
      phone2: '',
      phone3: '',
      imageUrl: './images/photos-sucursales/sucursal-3.jpg',
    },
];


const SectionSucursalesComponent = () => {
  return (
    <>
      <section id='sucursales'>
        <div className='sucursales-container'>

          <div className='sucursales-text'>
            <h2>Ventas y asesoramiento</h2>
            <p>
              Contactá a nuestros asesores por cercanía a su zona. Encontrá el mejor asesoramiento en ventas
              para la construcción de tu piscina y accesorios. Presupuestos en el acto.
            </p>
            
          </div>

          <div className="cards-sucursales-container">
                
                  <div className="card-sucursales">
                    <img src={suc[0].imageUrl} alt={suc[0].title} />
                    <div className="card-sucursales-content">
                      <h3>{suc[0].title}</h3>
                      <p>{suc[0].phone1}</p>
                      <p>{suc[0].phone2}</p>
                      <p>{suc[0].phone3}</p>
                    </div>
                  </div>

                  <div className="card-sucursales">
                    <img src={suc[1].imageUrl} alt={suc[1].title} />
                    <div className="card-sucursales-content">
                      <h3>{suc[1].title}</h3>
                      <p>{suc[1].phone1}</p>
                      <p>{suc[1].phone2}</p>
                      <p>{suc[1].phone3}</p>
                    </div>
                  </div>

                  <div className="card-sucursales">
                    <img src={suc[2].imageUrl} alt={suc[2].title} />
                    <div className="card-sucursales-content">
                      <h3>{suc[2].title}</h3>
                      <p>{suc[2].phone1}</p>
                      <p>{suc[2].phone2}</p>
                      <p>{suc[2].phone3}</p>
                    </div>
                  </div>
          </div>
          <a href="#contacto">Contactanos</a>
        
          
        </div>
      </section>
    </>
  )
}

export default SectionSucursalesComponent