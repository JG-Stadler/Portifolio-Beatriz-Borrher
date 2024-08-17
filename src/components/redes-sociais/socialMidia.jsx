import instagranLogo from "../../images/logo-instagran.png";
import tiktokLogo from "../../images/logo-tiktok.png";
import "./styles/social-midias.css"

export default function SocialMidias(){
    return(
        <section className="social-midias d-flex flex-column">
            <h1>Minhas principais redes sociais</h1>
            <div className="links d-flex align-items-center justify-content-around">
                <a href="
                https://www.instagram.com/beaborrher/
                " className="social-midia-link" title="Instagran"><img src={instagranLogo}/></a>
                <a href="
                https://www.tiktok.com/@beaborrher
                " className="social-midia-link" title="TikTok"><img src={tiktokLogo}/></a>
            </div>
        </section>
    );
}