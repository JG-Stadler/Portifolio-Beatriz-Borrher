import instagranLogo from "../../images/logo-instagran.png";
import tiktokLogo from "../../images/logo-tiktok.png";
import "./styles/social-midias.css"

export default function SocialMidias(){
    return(
        <section className="social-midias d-flex flex-column text-white">
            <h1 className="text-uppercase">Minhas principais redes sociais</h1>
            <div className="links d-flex align-items-center
            flex-wrap justify-content-evenly">
                <a href="
                https://www.instagram.com/beaborrher/
                " className="social-midia-link" title="Instagran" target="_blank"><img src={instagranLogo}/></a>
                <a href="
                https://www.tiktok.com/@beaborrher
                " className="social-midia-link" title="TikTok" target="_blank"><img src={tiktokLogo}/></a>
            </div>
        </section>
    );
}