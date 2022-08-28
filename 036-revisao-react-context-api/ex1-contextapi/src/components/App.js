import {useEffect, useState} from "react";

import Banner from "./Banner";
import Header from "./Header";
import NameContext from "../contexts/NameContext";

export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const newName = prompt("Digite seu nome:");
    setName(newName);
  }, []);

  return (
    <NameContext.Provider value={{name}}>
      <Header />
      <Banner />
    </NameContext.Provider>
  );
}
