import { RandomMeal } from "../../types/request.d";
import { useNavigate, useLocation } from "react-router-dom";
import { BYID } from "../../const/const";

interface MealsElementsPROPS {
  arrElements: RandomMeal[] | null;
}

export default function MealsElement({ arrElements }: MealsElementsPROPS) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToPage = async (
    paramURI: string | null,
    path: string,
    idMeal: string | null
  ) => {
    const request: Response = await fetch(BYID + idMeal);
    const json: { meals: RandomMeal[] } = await request.json();
    const objectMeals: RandomMeal = { ...json?.meals[0] };

    navigate(`/meal/${paramURI?.split(" ").join("-")}`, {
      replace: false,
      state: {
        mealName: paramURI,
        item: objectMeals,
        prevPage: path,
      },
    });
  };

  return arrElements?.map((i: RandomMeal) => {
    return (
      <article
        key={i?.idMeal}
        onClick={() => navigateToPage(i?.strMeal, pathname, i?.idMeal)}
      >
        <figure>
          <img
            src={i?.strMealThumb ? i?.strMealThumb : undefined}
            alt={"frfrfr"}
            style={{
              width: "100%",
              height: "auto",
              display: "flex",
              borderRadius: "5px",
            }}
          />
          <figcaption>{i?.strMeal}</figcaption>
        </figure>
      </article>
    );
  });
}
