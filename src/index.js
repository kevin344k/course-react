import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter,setCounter]=useState(0)

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />
      <button
        onClick={() => {
          alert("el emnsaje es: " + mensaje);
        }}
      >
        {" "}
        Save{" "}
      </button>
      <hr/>
      <h1>Counter: {counter}
      </h1>
      <button onClick={()=>setCounter(counter+1)}>Incrementar</button>
    </div>
  );
}

root.render(
  <>
    <Counter></Counter>
  </>
);
