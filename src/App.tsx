import "./App.css";
import { Creation } from "./components/creation";
import { Intro } from "./components/intro";
import { Landing } from "./components/landing";

function App() {
  return (
    <>
      <Landing />
      <Intro />
      <Creation />
    </>
  );
}

export default App;
