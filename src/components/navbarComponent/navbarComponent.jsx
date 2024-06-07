import React, { useState,useContext, useEffect } from 'react'
import logoCostaBrava from '../../assets/logos/logo-costa-brava.svg'
import './navbarComponent.css'

const NavbarComponent = (props) => {
    
    const [toggle, setToggle] = useState(null)


    const sidenavToggler = () => {
        setToggle(!toggle)
        if(toggle){
            props.onClick(null)
        }else{
            props.onClick('sidenav')
        }
    }
    
    return (
        <nav>
            <img src={logoCostaBrava} alt="" className='logo'/>

            <ul className='menu-links'>
                <li>
                    <a href='#quienes-somos'>Quienes somos</a>
                </li>
                <li>
                    <a href='#nuestra-propuesta'>Nuestra Propuesta</a>
                </li>
                <li>
                    <a href='#sucursales'>Sucursales</a>
                </li>
                <li>
                    <a href='#contacto'>Contacto</a>
                </li>
            </ul>
            <button onClick={sidenavToggler} className='menu-button'>☰</button>
        </nav>
    )
}

export default NavbarComponent