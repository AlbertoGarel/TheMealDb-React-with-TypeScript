import { useContext } from "react";
import { AppCont } from "../../App";
import "./Home.scss";
import Categories from "../../components/categories";
import RandomBanner from "../../components/randomBanner";

export default function Home() {
  const { full_categories, random_meals, deviceType } = useContext(AppCont);
  const { categories, load, error } = full_categories;
  const { meals, randomLoad, randomError } = random_meals;
  console.log("meals", meals);
  return (
    <div id="home">
      <Categories categories={categories} load={load} error={error} />
      <RandomBanner
        meals={meals}
        load={randomLoad}
        error={randomError}
        deviceType={deviceType}
      />
    </div>
  );
}
