import { createContext, useEffect, useState } from "react";
import { ColorsProps, ConextProps } from "../types";
import service from "../services/Color";

export const Contexto = createContext({} as ConextProps);

export function Provider({ children }: any) {
  const [cores, setCores] = useState([] as ColorsProps[]);
 
  useEffect(() => {
    (async () => {
      load();
    })();
  }, []);

  const load = async () => {
    const res: ColorsProps[] = await service.list();
    console.log("res", res);
    setCores(res);
  };

  const save = async (r:string, g:string, b:string) => {
      await service.create({
        red: parseInt(r),
        green: parseInt(g),
        blue: parseInt(b)
      });
      await load();
  };

  return (
    <Contexto.Provider value={{ cores, save }}>
      {children}
    </Contexto.Provider>
  );
}
