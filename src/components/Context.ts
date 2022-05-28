import { createContext } from "react"
import { Common } from "./type";

export const Context = createContext<Common | null>(null);