import "./Search.scss";
import { useContext, useState } from "react";
import { AppCont } from "../../App";
import useSearchTool from "../../hooks/useSearchTool";
import ErrorComponent from "../../components/errorComponent";
import MealsElements from "../../components/mealsElements";
import WrapListMeals from "../../components/wrapListmeals";
import LoaderdescriptionBox from "../../components/loaderDescriptionBox/LoaderDescriptionBox";
import NoResult from "../../components/noResults/NoResults";
import { RandomMeal } from "../../types/request";

export default function Search() {
  const { multisearch } = useContext(AppCont);
  const { resultmultisearch, spinner, error } = useSearchTool(multisearch);
  const {
    byid,
    byname,
    bycategory,
    byfirstletter,
    byingredient,
    byarea,
  } = resultmultisearch;

  const [noResultLetterSelected, GetNoResultLetterSelected] = useState<
    RandomMeal[] | null
  >(null);

  const HandlerSearchFirstLetter = (items: RandomMeal[] | null) => {
    GetNoResultLetterSelected(items);
  };

  if (spinner) {
    return <LoaderdescriptionBox descriptionText={"serched meals..."} />;
  }

  if (Object.values(resultmultisearch).every((i) => i === null) && !noResultLetterSelected) {
    return <NoResult GetNoResultLetterSelected={HandlerSearchFirstLetter} />;
  }

  return (
    <div>
      {error && <ErrorComponent error={error} site={"Search"} />}
      {(byfirstletter || noResultLetterSelected) && (
        <WrapListMeals title={"By first letter..."}>
          <MealsElements
            arrElements={
              noResultLetterSelected ? noResultLetterSelected : byfirstletter
            }
          />
        </WrapListMeals>
      )}
      {byname && (
        <WrapListMeals title={"By name..."}>
          <MealsElements arrElements={byname} />
        </WrapListMeals>
      )}
      {byarea && (
        <WrapListMeals title={"By area..."}>
          <MealsElements arrElements={byarea} />
        </WrapListMeals>
      )}
      {byid && (
        <WrapListMeals title={"By identifier..."}>
          <MealsElements arrElements={byid} />
        </WrapListMeals>
      )}
      {bycategory && (
        <WrapListMeals title={"By category..."}>
          <MealsElements arrElements={bycategory} />
        </WrapListMeals>
      )}
      {byingredient && (
        <WrapListMeals title={"By category..."}>
          <MealsElements arrElements={byingredient} />
        </WrapListMeals>
      )}
    </div>
  );
}
