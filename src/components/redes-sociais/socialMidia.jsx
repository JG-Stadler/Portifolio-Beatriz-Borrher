import instagranLogo from "../../images/logo-instagran.png";
import tiktokLogo from "../../images/logo-tiktok.png";
import "./styles/social-midias.css"

export default function SocialMidias(){
    return(
        <section>
            <h1>Minhas principais redes sociais</h1>
            <div className="links">
                <a href="" className="social-midia-link"><img src={instagranLogo}/></a>
                <a href="" className="social-midia-link"><img src={tiktokLogo}/></a>
            </div>
        </section>
    );
}