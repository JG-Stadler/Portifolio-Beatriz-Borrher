import "./index.css";
import Presentation from "./components/Apresentação/presentation";
import MainMenu from "./components/main-menu/mainMenu";
import About from "./components/Sobre/about";
import SocialMidias from "./components/redes-sociais/socialMidia";
import Contact from "./components/contactar/contact.jsx";
import Footer from "./components/rodapé/footer.jsx";

function App() {
  return (
    <div className="App">
      {/* <main className="begin-page">
         <MainMenu/>
        <Presentation/>
      </main>
      <About/> */}
      <SocialMidias/>
      {/* <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
