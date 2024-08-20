
export default function FooterNav(){
    return(
        <nav className="footer-nav">
            <ul className="footer-nav-list d-flex align-items-center
            flex-wrap m-0 p-0">
                <li className="nav-item"><button className="btn text-uppercase p-0 ft-nav-btn">Voltar ao topo</button></li>
                <li className="nav-item"><button className="btn text-uppercase p-0 ft-nav-btn">Sobre</button></li>
                <li className="nav-item"><button className="btn text-uppercase p-0 ft-nav-btn">Redes Sociais</button></li>
                <li className="nav-item"><button className="btn text-uppercase p-0 ft-nav-btn">Contactar</button></li>
                <li className="nav-item"><button className="btn text-uppercase p-0 ft-nav-btn">Contribua</button></li>
            </ul>
        </nav>
    );
}