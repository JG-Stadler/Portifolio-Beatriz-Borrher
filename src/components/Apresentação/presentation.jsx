import FotoPostInsta from "../../images/foto-post-instagran.png"
import "./styles/presentation.css"

export default function Presentation(){
    return(
        <section className="presentation align-items-center
        text-white justify-items-center">
            <h1>Beatriz Borrher</h1>
            <p>Criadora de conteúdo digital, Cristã e uma grande sonhadora</p>
            <figure>
                <img src={FotoPostInsta} alt="Foto Bea menu de apresentação" 
                className="insta-post-image"/>
            </figure>
        </section>
    )
}