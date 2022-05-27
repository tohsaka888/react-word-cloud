import * as THREE from "three";
import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
} & any;

function Word({ children, ...props }: Props) {
  // const color = new THREE.Color();
  const textRef = useRef<any>(null!);
  const quaternionRef = useRef<THREE.Quaternion>(null!);

  useFrame(({ camera }) => {
    // Make text face the camera
    quaternionRef.current = camera.quaternion;
    textRef.current.quaternion.copy(quaternionRef.current);
    // textRef.current.quaternion.copy(c)
    // Animate font color
  });

  return (
    <Text
      children={children}
      {...props}
      ref={textRef}
      letterSpacing={-0.05}
      fontSize={2}
    />
  );
}

export default Word;
