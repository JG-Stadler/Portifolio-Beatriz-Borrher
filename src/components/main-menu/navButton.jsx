export default function NavButton(props){
    return(
        <li className="nav-item">
            <button onClick={()=>window.alert("Sistema de navegação em desenvolvimento")}
            className="navigation-btn text-white">{props.text}</button>
        </li>
    )
    function Scroll(distance){
        window.scroll(0,distance);
    }
}