import {useState} from "react";
import axios from "axios";

import Button from "./Button";
import Input from "./Input";
import Item from "./Item";
import List from "./List";
import Page from "./Page";
import Title from "./Title";

export default function App() {
  const [list, setList] = useState([]);
  const [token, setToken] = useState("");
  const [form, setForm] = useState({email: "", password: ""});

  function login() {
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/exercise-login/auth/login",
      form
    );

    promise.then(response => setToken(response.data.token));
  }

  function fetchList() {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/exercise-login/tasks",
      {headers: {Authorization: `Bearer ${token}`}}
    );

    promise.then(response => setList(response.data));
  }

  return (
    <Page>
      <Title>
        Bootcamper
        <br />
        Shopping List
      </Title>
      <Input
        type="text"
        placeholder="Digite seu email..."
        name="email"
        value={form.email}
        onChange={e => setForm({...form, [e.target.name]: e.target.value})}
      />
      <Input
        type="text"
        placeholder="Digite sua senha..."
        name="password"
        value={form.password}
        onChange={e => setForm({...form, [e.target.name]: e.target.value})}
      />
      <Button onClick={login}>Entrar</Button>
      {token ? <Button onClick={fetchList}>Buscar lista de compras</Button> : ""}
      <List>
        {list.map(i => (
          <Item>{i}</Item>
        ))}
      </List>
    </Page>
  );
}
