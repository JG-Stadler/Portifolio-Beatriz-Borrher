import PresentationText from "./presentationTXT";
import FotoPostInsta from "../../images/foto-post-instagran.png"
import "./styles/presentation.css"

export default function Presentation(){
    return(
        <section className="presentation d-flex align-items-center justify-content-around">
            <PresentationText/>
            <figure>
                <img src={FotoPostInsta} alt="Foto Bea menu de apresentação" 
                className="insta-post-image"/>
            </figure>
        </section>
    )
}