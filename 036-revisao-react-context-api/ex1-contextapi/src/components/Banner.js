import Post from "./Post";
import {useContext} from "react";
import NameContext from "../contexts/NameContext";

export default function Banner() {
  const {name} = useContext(NameContext);

  return (
    <div className="banner-wrapper">
      <div>
        <img
          src="https://ml7u4cm4jjmy.i.optimole.com/CaABJw-JFJSbi1T/w:auto/h:auto/q:auto/https://bmsenergiasolar.com.br/wp-content/uploads/2020/02/default-user-1.png"
          alt="Usuário"
        />
        <span>{name}</span>
      </div>
      <Post />
    </div>
  );
}
