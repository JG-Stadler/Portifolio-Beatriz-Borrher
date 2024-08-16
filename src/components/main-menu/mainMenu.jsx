import Logo from "../../images/Logo_Bea-branca-fundo_transparente.png";
import "./style/main-menu.css"
import NavBar from "./navBar";

export default function MainMenu(){
    return(
        <header className="main-menu d-flex align-items-center justify-content-between">
            <img src={Logo} alt="Logo Bea Borrher" className="logo" />
            <NavBar/>
        </header>
    );
}