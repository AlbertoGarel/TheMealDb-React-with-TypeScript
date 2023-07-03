import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigaton";
import Header from "./components/header/Header";
import useWindow from "./hooks/useWindow";
import useCategories from "./hooks/useRequest";
import { Category, RandomMeal } from "./types/request.d";
import Footer from "./components/footer/Footer";
import { CATEGORIES, RANDOM } from "./const/const";
import {HeaderConf } from './types/customLocation.d';

export interface UseRequestRandomMeals {
  meals: Category[] | RandomMeal[] | [];
  randomLoad: boolean;
  randomError: string;
}
export interface UseRequestFullCategories {
  categories: Category[] | RandomMeal[] | [];
  load: boolean;
  error: string;
}
export interface AppContext {
  breakpoint: number;
  deviceType: string;
  full_categories: UseRequestFullCategories;
  random_meals: UseRequestRandomMeals;
}

const initialValueContext: AppContext = {
  breakpoint: 0,
  deviceType: "small",
  full_categories: {
    categories: [],
    load: false,
    error: "",
  },
  random_meals: {
    meals: [],
    randomLoad: false,
    randomError: "",
  },
};

export const AppCont: React.Context<AppContext> = React.createContext(
  initialValueContext
);

function App() {
  const { windowWidth, deviceType } = useWindow();
  const [categories, load, error] = useCategories(CATEGORIES, 1);
  const [meals, randomLoad, randomError] = useCategories(RANDOM, 2);
  const full_categories: UseRequestFullCategories = {
    categories,
    load,
    error,
  };
  const random_meals: UseRequestRandomMeals = {
    meals,
    randomLoad,
    randomError,
  };
  const [inputSerchValue, setInputSearchValue] = useState<string | number>("");
  const [visibilityHeadAndFoot, setVisibilityHeadAndFoot] = useState<HeaderConf>({
    isHidden: false,
    height: "100vh",
  });
  const { isHidden, height } = visibilityHeadAndFoot;
  const handlerSearchValue = (param: string | number): void => {
    setInputSearchValue(param);
  };

  const getVisibilityOfHeaderAndFooter = (param: any): void => {
    setVisibilityHeadAndFoot(param);
  };

  const headerSettings: HeaderConf = { isHidden, height };

  return (
    <AppCont.Provider
      value={{
        breakpoint: windowWidth,
        deviceType: deviceType,
        full_categories: full_categories,
        random_meals: random_meals,
      }}
    >
      <BrowserRouter>
        <Header
          handlerSearchValue={handlerSearchValue}
          headerSettings={headerSettings}
        />
        <Navigation
          getVisibilityOfHeaderAndFooter={getVisibilityOfHeaderAndFooter}
        />
        <Footer />
      </BrowserRouter>
    </AppCont.Provider>
  );
}

export default App;
