import React from "react";
import { useState, useContext, useEffect } from "react";
import "./sidenavComponent.css"
import MatescriptFooterComponent from "../matescripFooterComponent/matescriptFooterComponent";

const SidenavComponent = (props) => {
    const [classSidenav, setClassSidenav] = useState('sidenav');

    useEffect(() => {
        if (props.isOpen) {
            setClassSidenav('sidenav open');
        } else {
            setClassSidenav('sidenav');
        }
    }, [props.isOpen]);

    const sidenavToggler = () => {
        setClassSidenav('sidenav');
        setTimeout(() => {
            props.onClick(null);
        }, 300);
    };

    return (
        <div className={classSidenav}>
            <div className="sidenav-container">
                <a href='#quienes-somos' onClick={sidenavToggler} className="sidenav-anchor">Quienes somos</a>
                <a href='#nuestra-propuesta' onClick={sidenavToggler} className="sidenav-anchor">Nuestra propuesta</a>
                <a href='#sucursales' onClick={sidenavToggler} className="sidenav-anchor">Sucursales</a>
                <a href='#contacto' onClick={sidenavToggler} className="sidenav-anchor">Contacto</a>
            </div>
        </div>
    );                
};

export default SidenavComponent;