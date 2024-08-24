import { useState } from "react";
import NavButton from "./navButton";

export default function NavBar(){
    const body = document.querySelector("body");
    const [MenuClass,SetMenuClass] = useState("nav-bar");
    const [ButtonClass,SetButtonClass] = useState("menu-activation-btn");

    return(
    <>
        <nav className={MenuClass}>
            <ul className="nav-list">
                {/* <NavButton text="Sobre"/>
                <NavButton text="Redes Sociais"/>
                <NavButton text="Contactar"/>
                <NavButton text="Contribua"/> */}
                <li className="nav-item"><button className="navigation-btn text-white"></button></li>
                <li className="nav-item"><button className="navigation-btn text-white"></button></li>
                <li className="nav-item"><button className="navigation-btn text-white"></button></li>
                <li className="nav-item"><button className="navigation-btn text-white"></button></li>
            </ul>
        </nav>
        <div className={ButtonClass} onClick={()=>{
            if(MenuClass === "nav-bar"){
                SetMenuClass("nav-bar open-nav-bar");
                SetButtonClass("menu-activation-btn active-btn");
            }
            else{
                SetMenuClass("nav-bar");
                SetButtonClass("menu-activation-btn");
                body.style.overflow = "visible";
            }
        }
        }>
            <div className="menu-btn-bar" id="bar1"></div>
            <div className="menu-btn-bar" id="bar2"></div>
            <div className="menu-btn-bar" id="bar3"></div>
        </div>
    </>
    );
}