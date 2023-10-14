import { createContext, useContext } from "react";


export const ServicesBookingContext = createContext<any>([]);

export const useServicesBookingContext = () => useContext(ServicesBookingContext);
