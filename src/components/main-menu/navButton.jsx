export default function NavButton(props){
    return(
        <li className="nav-item">
            <button onClick={Scroll(props.ElementDistance)}
            className="navigation-btn text-white">{props.text}</button>
        </li>
    )
    function Scroll(distance){
        window.scroll(0,distance);
    }
}