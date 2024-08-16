import "./index.css";
import Presentation from "./components/Apresentação/presentation";
import MainMenu from "./components/main-menu/mainMenu";

function App() {
  return (
    <div className="App">
      <main className="begin-page">
         <MainMenu/>
        <Presentation/>
      </main>
    </div>
  );
}

export default App;
