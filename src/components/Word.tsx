import * as THREE from "three";
import React, { useContext, useRef } from "react";
import { Image, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Context } from "./Context";

type Props = {
  type: "text" | "image" | "other";
  item: any;
  position: THREE.Vector3;
};

function Word({ type, item, ...props }: Props) {
  const wordRef = useRef<any>(null!);
  const quaternionRef = useRef<THREE.Quaternion>(null!);
  useFrame(({ camera }) => {
    // Make text face the camera
    quaternionRef.current = camera.quaternion;
    wordRef.current.quaternion.copy(quaternionRef.current);
  });
  const { fontSize, color, clickEvent } = useContext(Context)!;

  return (
    <>
      {type === "text" && (
        <Text
          {...props}
          ref={wordRef}
          color={new THREE.Color(color || 0xffffff)}
          letterSpacing={-0.05}
          fontSize={fontSize || 2}
          onClick={(e) => {
            clickEvent ? clickEvent(e) : console.log(item);
          }}
        >
          {item}
        </Text>
      )}
      {type === "image" && (
        <Image
          {...props}
          ref={wordRef}
          url={item}
          onClick={(e) => {
            clickEvent ? clickEvent(e) : console.log(item);
          }}
        />
      )}
      {type === "other" && (
        <mesh
          onClick={(e) => {
            clickEvent ? clickEvent(e) : console.log(item);
          }}
        >
          item
        </mesh>
      )}
    </>
  );
}

export default Word;
