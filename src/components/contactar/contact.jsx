import "./styles/contact.css";
import BeaImageEmail from "../../images/foto-bea-email-page.jpg";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact(){
    return(
        <section className="contact text-white 
        text-center d-flex">
            <div>
                <h1 className="text-upppercase text-center">Deseja me contratar para uma parceria?</h1>
                <a href="
                mailto:beatrizbsantos83@gmail.com
                " className="email-link" target="_blank">
                    <MdOutlineMailOutline/>
                </a>
                <h4>Clique no botão e me envie um email</h4>
            </div>
        </section>
    );
}