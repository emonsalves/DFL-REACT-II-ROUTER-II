import "./App.css"
import React, {useContext} from "react";
import PageLayout from "./layout/PageLayout"
import MyContext from "./context/MyContext";

function App() {
  const { test } = useContext(MyContext);

  return (
    <div className="App">
      <h1>{test}</h1>
      <PageLayout/>
    </div>
  )
}

export default App
