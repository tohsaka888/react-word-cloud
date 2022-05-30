import React, { useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import font from './font.ttf'

function App() {
  const [province, setProvince] = React.useState<string[]>([]);
  useEffect(() => {
    const getProvinceName = async () => {
      const res = await fetch(
        `https://lab.isaaclin.cn/nCoV/api/provinceName?lang=zh`
      );
      const data = await res.json();
      setProvince((province) => [...province, ...data.results]);
    };
    getProvinceName();
  }, []);
  return (
    <>
      {province.length > 0 && (
        <Container
          width="100%"
          height="100vh"
          count={10}
          radius={25}
          items={province}
          style={{ background: "#000" }}
          font={font}
        />
      )}
    </>
  );
}

export default App;
