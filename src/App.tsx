import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Terminal from "./components/Terminal";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Terminal />
      </div>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
