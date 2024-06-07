import React, { useState } from "react";
import NavbarComponent from "../navbarComponent/navbarComponent";
import SidenavComponent from "../sidenavComponent/sidenavComponent";
import MatescriptFooterComponent from "../matescripFooterComponent/matescriptFooterComponent";
import "./containerComponent.css";
import SlideComponent from "../slideComponent/slideComponent";
import SectionWhoWeComponent from "../sectionWhoWeComponent/sectionWhoWeComponent";
import EmailHandlerComponent from "../emailHandlerComponent/emailHandlerComponent";
import SectionProductsComponent from "../sectionProductsComponent/sectionProductsComponent";
import WhatsappIconComponent from "../whatsappIconComponent/whatsappIconComponent";
import SectionSucursalesComponent from "../sectionSucursalesComponent/sectionSucursalesComponent";


const ContainerComponent = () => {
    
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleSidenavToggle = () => {
        setToggleMenu(!toggleMenu);
    };


    return (
        <div className="container">

            <SidenavComponent onClick={handleSidenavToggle} isOpen={toggleMenu} />
            <NavbarComponent onClick={handleSidenavToggle}></NavbarComponent>

            <div className="sections-container">
                <div className="sections">
                    <SlideComponent/>
                    <SectionWhoWeComponent/>
                    <SectionProductsComponent/>
                    <SectionSucursalesComponent/>
                    <EmailHandlerComponent/>
                    <MatescriptFooterComponent/>
                    <WhatsappIconComponent/>
                </div>
            </div>
        </div>
    );
};

export default ContainerComponent;
