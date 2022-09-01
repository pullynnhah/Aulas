import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

function App() {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    const request = axios.get("https://cat-fact.herokuapp.com/facts");

    request.then(response => {
      setFacts(response.data);
    });
  }, []);

  return (
    <ul>
      {facts.map(fact => (
        <li>{fact.text}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
