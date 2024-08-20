import FooterLogo from "../../images/Logo_Bea-branca-fundo_transparente.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import FooterNav from "./footerNav";
import "./styles/footer.css";

export default function Footer(){
    return(
    <footer className="page-end-footer text-white">
        <img src={FooterLogo} className="footer-logo"/>
        <FooterNav/>
        <nav className="social-midia-links-ft d-flex
        align-items-center">
            <a href="#" className="nav-link"><FaInstagram/></a>
            <a href="#" className="nav-link"><FaTiktok/></a>
        </nav>

        <aside className="credits">
            <h3>Site desenvolvido por: <a href="#">João Stadler</a></h3>
        </aside>           
    </footer>
    );
}