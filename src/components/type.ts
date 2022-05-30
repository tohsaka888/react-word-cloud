import { ThreeEvent } from "@react-three/fiber";
import { CSSProperties, MutableRefObject } from "react";

export type Props = {
  style?: CSSProperties;
  ref?: MutableRefObject<HTMLDivElement>;
  count?: number;
  radius?: number;
  width?: string;
  height?: string;
} & Common;

export type Common = {
  items: any[];
  type?: 'text' | 'image' | 'other';
  fontSize?: number;
  color?: THREE.ColorRepresentation;
  clickEvent?: (e: ThreeEvent<MouseEvent>) => void,
  font?: string;
}