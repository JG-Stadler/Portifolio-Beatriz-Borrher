import FooterLogo from "../../images/Logo_Bea-branca-fundo_transparente.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "./styles/footer.css";

export default function Footer(){
    return(
    <footer className="page-end-footer text-white">
        <img src={FooterLogo} className="footer-logo"/>
        <nav className="social-midia-links-ft d-flex
        align-items-center">
            <a href="
            https://www.instagram.com/beaborrher/
            " className="nav-link" target="_blank"><FaInstagram/></a>
            <a href="
            https://www.tiktok.com/@beaborrher
            " className="nav-link" target="_blank"><FaTiktok/></a>
        </nav>

        <aside className="credits">
            <h3>Site desenvolvido por: <a href="
            https://jg-stadler.github.io/Lista-de-links-JG-Stadler/" target="_blank">João Stadler</a></h3>
        </aside>           
    </footer>
    );
}