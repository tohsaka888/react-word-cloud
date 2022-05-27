import React, { useMemo } from "react";
import * as THREE from "three";
import randomWord from "random-words";
import Word from "./Word";

type Props = {
  count: number;
  radius: number;
};

function Cloud({ count, radius }: Props) {
  const words = useMemo(() => {
    const temp = [];
    // 创建球坐标
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomWord(),
        ]);
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => {
        console.log(word);
        return <Word key={index} position={pos} children={word} />;
      })}
    </>
  );
}

export default Cloud;
