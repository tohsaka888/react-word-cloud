import React, { useContext, useMemo } from "react";
import * as THREE from "three";
import { Context } from "./Context";
import Word from "./Word";

type Props = {
  count: number;
  radius: number;
};

function Cloud({ count, radius }: Props) {
  const { items, type } = useContext(Context)!;
  const words = useMemo(() => {
    const temp = [];
    // 创建球坐标
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push(
          new THREE.Vector3().setFromSphericalCoords(
            radius,
            phiSpan * i,
            thetaSpan * j
          )
        );
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map((pos, index) => {
        let item = items[index] || null;
        return (
          <Word key={index} position={pos} item={item} type={type || "text"} />
        );
      })}
    </>
  );
}

export default Cloud;
