import { useState } from "react";
import FotoBea1 from "../../images/foto-bea-about.jpg";
import "./styles/about.css"

export default function About(){
    return(
        <section className="about d-flex align-items-center justify-content-around">
            <main className="about-txt">
                <h1>Quem é Bea Borrher?</h1>
                <p>
                    Sou uma criadora de conteúdo e tiktoker agenciada pela  <strong>curli</strong>.
                    Minha paixão é espalhar felicidade e inspirar os outros através do meu trabalho. 
                    Como cristã, meu propósito é compartilhar mensagens de alegria e esperança com minha comunidade.
                    Quando não estou criando vídeos, você pode me encontrar mergulhada em um bom livro, 
                    participando ativamente das atividades da minha igreja ou assistindo a uma série envolvente.
                    Cada uma dessas atividades alimenta minha criatividade e me ajuda a trazer um toque especial aos meus conteúdos.
                 </p>
            </main>
            <div className="images-box">
                <img src={FotoBea1}/>
            </div>
        </section>
    )
}