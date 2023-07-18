import { useContext } from "react";
import { AppCont } from "../../App";
import "./Home.scss";
import Categories from "../../components/categories";
import RandomBanner from "../../components/randomBanner";
import React from "react";
import { RandomMeal, Category } from "../../types/request.d";

interface RandomBannerProps {
  meals: RandomMeal[] | Category[] | [];
  load: boolean;
  error: string;
  deviceType: string;
}

interface HomeProps {
  getNameCategorySelected: (param: string) => void;
}
export default function Home({ getNameCategorySelected }: HomeProps) {
  const { full_categories, random_meals, deviceType } = useContext(AppCont);
  const { categories, load, error } = full_categories;
  const { meals, randomLoad, randomError } = random_meals;

  return (
    <div id="home">
      <Categories
        categories={categories}
        load={load}
        error={error}
        getNameCategorySelected={getNameCategorySelected}
      />
      <MemoizedRandomBanner
        meals={meals}
        load={randomLoad}
        error={randomError}
        deviceType={deviceType}
      />
    </div>
  );
}

const areEqual = (
  prevProps: RandomBannerProps,
  nextProps: RandomBannerProps
) => {
  const prevmeal: RandomMeal = prevProps?.meals[0] as RandomMeal;
  const nextmeal: RandomMeal = nextProps?.meals[0] as RandomMeal;
  let equal: boolean = true;
  if (prevmeal?.idMeal !== nextmeal?.idMeal) equal = false;
  return equal;
};

const MemoizedRandomBanner = React.memo(RandomBanner, areEqual);
