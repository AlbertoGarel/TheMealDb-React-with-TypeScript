import { RandomMeal, Category } from "../../types/request.d";
import ErrorComponent from "../errorComponent/ErrorComponent";
import Spinner from "../microcomponents/spinner/Spinner";
import "./RandomBanner.scss";
import { useNavigate, useLocation } from "react-router-dom";
interface RandomBannerProps {
  meals: RandomMeal[] | Category[] | [];
  load: boolean;
  error: string;
  deviceType: string;
}

export default function RandomBanner({
  meals,
  load,
  error,
  deviceType,
}: RandomBannerProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const meal: RandomMeal = meals[0] as RandomMeal;
  const tags = meal?.strTags?.split(",");
  const isSmall = deviceType === "small";
  const customMarginLeft = { marginLeft: isSmall ? 0 : "20px" };
  const paramURI = meal?.strMeal
    ? meal?.strMeal.split(" ").join("-")
    : undefined;

  if (load) {
    return <Spinner />;
  }

  if (error.length) {
    return <ErrorComponent error={error} site={'"Recommended recipe"'} />;
  }

  return (
    <section id="banner">
      <h2>Recommended recipe</h2>
      {meal && (
        <div id="random-banner">
          <figure style={{ width: isSmall ? "100%" : "50%" }}>
            <img
              style={{ width: isSmall ? "90%" : "50%" }}
              src={meal?.strMealThumb!}
              alt={meal?.strMeal!}
            />
            <figcaption>
              <span>{meal?.strMeal}</span>
            </figcaption>
          </figure>
          <div id="content" style={{ textAlign: isSmall ? "center" : "left" }}>
            <h2>{meal?.strMeal}</h2>
            {isSmall && <hr />}
            <ul
              style={{
                width: isSmall ? "100%" : "50%",
                marginLeft: isSmall ? 0 : "20px",
              }}
            >
              <li>
                <h3>Categories</h3>
                <p style={customMarginLeft}>{meal?.strCategory}</p>
              </li>
              <li>
                <h3>Region</h3>
                <p style={customMarginLeft}>{meal?.strArea}</p>
              </li>
              {tags?.length && (
                <li>
                  <h3>Tags:</h3>
                  <p style={customMarginLeft}>
                    {tags?.map((i, idx) => (
                      <span key={idx}>{i}, </span>
                    ))}
                  </p>
                </li>
              )}
            </ul>
            <button
              type="button"
              className="btn btn1"
              onClick={() =>
                navigate(`meal/${paramURI}`, {
                  replace: true,
                  state: {
                    mealName: meal?.strMeal,
                    item: meal,
                    prevPage: pathname,
                  },
                })
              }
            >
              Go to
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
