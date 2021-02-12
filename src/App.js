import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [renderiza, setRenderiza] = useState(false);
  function desativa() {
    if (renderiza === true) {
      setRenderiza(false);
    } else {
      setRenderiza(true);
    }
  }
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/arv83")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },

        // Nota: é importante lidar com errros aqui
        // em vez de um bloco catch() para não receber
        // exceções de erros reais nos componentes.

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            desativa();
          }}
        >
          Toggle User
        </button>
        {renderiza ? (
          <div>
            <h1>{items.login}</h1>
            <img src={items.avatar_url}></img>
          </div>
        ) : null}
      </header>
    </div>
  );
};

export default App;
