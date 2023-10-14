import Titlebar from "../components/Titlebar/Titlebar";
import { H2Styled } from "../styles/Headlines/Headlines";
import { theme } from "../styles/themeStyles";
import CardSaloon from "../components/Cards/CardSaloon/CardSaloon";
import { PageContainerPrimary } from "../styles/Section/SectionStyled";
import { IRoot } from "../DummyData";
import { useEffect, useState } from "react";
import { useSalonsDataContext } from "../Context/SalonsDataContext/SalonsDataContext";

const MyFavoritesPage = () => {
  const [clickedSalon, setClickedSalon] = useState(null);

  const { salonsData, setSalonsData } = useSalonsDataContext();

  useEffect(() => {
    if (clickedSalon) {
      fetch(`http://localhost:5001/salons/${clickedSalon}`)
        .then((res) => res.json())
        .then((data) => {
          const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...data,
              isFavorite: !data.isFavorite,
            }),
          };

          fetch(`http://localhost:5001/salons/${clickedSalon}`, requestOptions);
          setSalonsData((prevSalonsData: IRoot[]) => {
            return prevSalonsData.map((salon) => {
              if (salon.id === clickedSalon) {
                return { ...salon, isFavorite: !salon.isFavorite };
              } else {
                return salon;
              }
            });
          });
        });
    }
  }, [clickedSalon]);

  return (
    <>
      <Titlebar icons={false} headline="" bg="white" closeIcon={true} />
      <PageContainerPrimary gap={theme.spacings.L * 2}>
        <H2Styled color={theme.colors.primary.brown}>My favorites</H2Styled>
        {salonsData.map((salon: IRoot) =>
          salon.isFavorite === true ? (
            <CardSaloon
              key={salon.id}
              {...salon}
              outsideSetterFav={setClickedSalon}
            />
          ) : (
            false
          )
        )}
      </PageContainerPrimary>
    </>
  );
};

export default MyFavoritesPage;
