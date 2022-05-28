import React, { useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import randomWord from "random-words";

function App() {
  const count = 10;
  const [items, setItems] = React.useState<any[]>([]);
  useEffect(() => {
    for (let i = 0; i <= count; i++) {
      for (let j = 0; j < count; j++) {
        setItems((items) => [...items, randomWord()]);
      }
    }
  }, []);
  return (
    <>
      {items.length > 0 && (
        <Container
          width="100%"
          height="100vh"
          count={10}
          radius={25}
          items={items}
          style={{ background: "#000" }}
        />
      )}
    </>
  );
}

export default App;
