import { useContext } from "react";
import { Contexto } from "../contexts";

export default function useColors(){
    return useContext(Contexto);
}