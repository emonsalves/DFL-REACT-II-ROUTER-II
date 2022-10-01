import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Pokemons from "../pages/Pokemons"
import NotFound from "../pages/NotFound"

function Main() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Pokemons" element={<Pokemons />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default Main
