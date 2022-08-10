import {BrowserRouter, Route, Routes} from "react-router-dom";

import Receita from "./Receita";
import Receitas from "./Receitas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Receitas />} />
        <Route path="/receita/:receitaId" element={<Receita />} />
      </Routes>
    </BrowserRouter>
  );
}
