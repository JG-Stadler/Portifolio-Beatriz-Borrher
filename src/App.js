import "./index.css";
import Presentation from "./components/Apresentação/presentation";
import About from "./components/Sobre/about";
import SocialMidias from "./components/redes-sociais/socialMidia";
import Contact from "./components/contactar/contact.jsx";
import Footer from "./components/rodapé/footer.jsx";
import Comunity from "./components/comunidade/cumunity.jsx";

function App() {
  return (
    <div className="App">
      <Presentation/>
      <About/>
      <SocialMidias/>
      <Comunity/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
