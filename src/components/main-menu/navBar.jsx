import { useState } from "react";

export default function NavBar(){
    const [MenuClass,SetMenuClass] = useState("nav-bar");
    const [ButtonClass,SetButtonClass] = useState("menu-activation-btn");

    return(
    <>
        <nav className={MenuClass}>
            <ul className="nav-list">
                <li className="nav-item"><button className="text-white btn navigation-btn btn">Sobre</button></li>
                <li className="nav-item"><button className="text-white btn navigation-btn btn">Redes Sociais</button></li>
                <li className="nav-item"><button className="text-white btn navigation-btn btn">Contactar</button></li>
                <li className="nav-item"><button className="text-white btn navigation-btn btn">Contribua</button></li>
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