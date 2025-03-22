import { TypeCity } from "../../../../type/typeCities";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "../../../../common-components/Message";
import Spinner from "../../../../common-components/Spinner";

type CityListProps = {
  cities: TypeCity[];
  isLoading: boolean;
};

const CityList = ({ cities, isLoading }: CityListProps) => {
  if (isLoading) {
    return <Spinner />;
  }
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;
