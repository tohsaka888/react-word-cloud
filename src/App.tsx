import React from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";
import Cloud from "./components/Cloud";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "black" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={["#202025", 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
      </Canvas>
    </div>
  );
}

export default App;
