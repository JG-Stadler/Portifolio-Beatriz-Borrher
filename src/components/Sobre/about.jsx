import { useState } from "react";
import FotoBea1 from "../../images/foto-bea-about.jpg";
import "./styles/about.css"

export default function About(){
    return(
        <section className="about d-flex align-items-center justify-content-around flex-row-reverse">
            <main className="about-txt">
                <h1>Quem é Bea Borrher?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti odio ea aut. Neque quos ex ipsam voluptatem veniam perferendis corrupti architecto velit, fuga quisquam blanditiis, numquam voluptates natus consequuntur.</p>
            </main>
            <div className="images-box">
                <img src={FotoBea1}/>
            </div>
        </section>
    )
}