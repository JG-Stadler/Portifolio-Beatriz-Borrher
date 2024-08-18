import { MdEmail } from "react-icons/md";
import "./styles/contact.css";

export default function Contact(){
    return(
        <section className="contact text-white text-center d-flex
        flex-column justify-content-around align-items-center">
                <h1 className="text-upppercase">Deseja me contratar para uma parceria?</h1>
                <a href="#" className="email-link"><MdEmail/></a>
        </section>
    );
}