import { useEffect, useState } from "react";
import { SalonsDataContext } from "./SalonsDataContext";
import { IRoot } from "../../DummyData";

// export interface IChoosedTreatment {
//   treatment: string;
//   duration: "Short-medium" | "Long" | "Extra long";
//   price: number;
//   choosedEmployee?: string;
//   choosedDate?: {
//     date: number;
//     day: string;
//   };
//   choosedTime?: string;
// }
// export interface IChoosedTreatmentProvider {
//   contextData: IChoosedTreatment;
//   setContextData: any;
// }
export const SalonsDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [salonsData, setSalonsData] = useState<IRoot[]>([]);

  const contextValue = {
    salonsData,
    setSalonsData,
  };

  useEffect(() => {
    fetch("http://localhost:5001/salons")
      .then((res) => res.json())
      .then((data) => setSalonsData(data));
  }, []);

  return (
    <SalonsDataContext.Provider value={contextValue}>
      {children}
    </SalonsDataContext.Provider>
  );
};
