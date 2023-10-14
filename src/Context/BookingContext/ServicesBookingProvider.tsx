import { useState } from "react";
import { ServicesBookingContext } from "./ServicesBookingContext";

export interface IChoosedTreatment {
  treatment: string;
  duration: "Short-medium" | "Long" | "Extra long";
  price: number;
  choosedEmployee?: string;
  choosedDate?: {
    date: number;
    day: string;
  };
  choosedTime?: string;
}
export interface IChoosedTreatmentProvider {
  contextData: IChoosedTreatment;
  setContextData: any;
}
export const ServicesBookingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [contextData, setContextData] = useState<IChoosedTreatment[]>([]);
  const contextValue = {
    contextData,
    setContextData,
  };
  return (
    <ServicesBookingContext.Provider value={contextValue}>
      {children}
    </ServicesBookingContext.Provider>
  );
};
