import React from "react";
import { TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cloud from "./Cloud";
import { Context } from "./Context";
import { Props } from "./type";

function Container({
  style,
  ref,
  count = 8,
  radius = 20,
  width,
  height,
  items,
  type = "text",
  fontSize,
  color,
  clickEvent,
  font
}: Props) {
  return (
    <div style={{ width, height, ...style }} ref={ref}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <Context.Provider value={{ items, type, fontSize, color, clickEvent, font }}>
          <Cloud count={count} radius={radius} />
          <TrackballControls />
        </Context.Provider>
      </Canvas>
    </div>
  );
}

export default Container;
