import React, { useEffect, useState } from 'react'
import arrowForward from '../../assets/icons/arrow_forward.svg'
import arrowBack from '../../assets/icons/arrow_back.svg'
import './slideComponent.css'

const imagesUrl = [
    "image_slide_5.jpg",
    "image_slide_0.jpg",
    "image_slide_1.jpg",
    "image_slide_2.jpg",
    "image_slide_3.jpg",
    "image_slide_4.jpg",
];

const SlideComponent = () => {const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesUrl.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + imagesUrl.length) % imagesUrl.length);
    };

    const startInterval = () => {
        intervalRef.current = setInterval(nextSlide, 3000);
    };

    const stopInterval = () => {
        clearInterval(intervalRef.current);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        
        <header className="carousel" id='home'>
            <ul className="slides">
                {imagesUrl.map((image, index) => (
                    <li key={index} style={{ opacity: currentSlide === index ? 1 : 0 }}>
                        <img 
                            src={`./images/carrousel/${image}`} 
                            alt={`Imagen ${index + 1}`}
                            className='img-container'
                            />
                    </li>
                ))}
            </ul>
            <button 
                className="arrow-btn-left" 
                onClick={prevSlide}
            ><img src={arrowBack}/></button>
            <button 
                className="arrow-btn-right"
                onClick={nextSlide}
                ><img src={arrowForward}/></button>
      </header>
  );
}

export default SlideComponent