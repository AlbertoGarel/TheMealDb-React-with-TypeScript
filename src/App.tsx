import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigaton";
import Header from "./components/header/Header";
import useWindow from "./hooks/useWindow";
import useCategories from "./hooks/useRequest";
import {
  FullCategories,
  RandomMeals,
} from "./types/request.d";
import Footer from "./components/footer/Footer";
import { CATEGORIES, RANDOM } from "./const/const";

export interface UseRequestRandomMeals {
  meals: FullCategories | RandomMeals;
  randomLoad: boolean;
  randomError: string;
}
export interface UseRequestFullCategories {
  categories: FullCategories | RandomMeals;
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

  const handlerSearchValue = (param: string | number) => {
    setInputSearchValue(param);
  };

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
        <Header handlerSearchValue={handlerSearchValue} />
        <Navigation />
        <Footer />
      </BrowserRouter>
    </AppCont.Provider>
  );
}

export default App;
