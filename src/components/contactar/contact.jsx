import "./styles/contact.css";
import BeaImageEmail from "../../images/foto-bea-email-page.jpg";
import EmailIcon from "../../images/email-icon.png";

export default function Contact(){
    return(
        <section className="contact text-white">
                <h1 className="text-upppercase text-center">Deseja me contratar para uma parceria?</h1>
                <img src={BeaImageEmail} className="bea-img-left-side"/>
                <a href="#" className="email-link">
                    <img src={EmailIcon} className="email-icon"/>
                </a>
        </section>
    );
}