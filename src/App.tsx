import "./App.css";
import { Creation } from "./components/creation";
import { Footer } from "./components/footer";
import { Intro } from "./components/intro";
import { Landing } from "./components/landing";

function App() {
  return (
    <>
      <Landing />
      <Intro />
      <Creation />
      <Footer />
    </>
  );
}

export default App;
