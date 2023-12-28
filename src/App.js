import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Screen from "./Screen";
import { useState } from "react";

function App() {
  const [currentlyActiveButton, setCurrentlyActiveButton] = useState("home");
  function onClickButton(e) {
    setCurrentlyActiveButton(e.target.name);
  }
  return (
    <div className="App">
      <Header
        currentlyActiveButton={currentlyActiveButton}
        onClickButton={onClickButton}
      />
      <Screen title={currentlyActiveButton} />
    </div>
  );
}

export default App;
