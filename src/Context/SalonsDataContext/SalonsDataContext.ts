import { createContext, useContext } from "react";


export const SalonsDataContext = createContext<any>([]);

export const useSalonsDataContext = () => useContext(SalonsDataContext);
