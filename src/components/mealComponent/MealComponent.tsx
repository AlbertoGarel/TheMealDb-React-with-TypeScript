import { Fragment } from "react";
import { RandomMeal } from "../../types/request.d";
import "./MealComponent.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faUtensils,
  faMap,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import BackButton from "../microcomponents/backButton";

interface MealProps {
  item: RandomMeal;
}
export default function MealComponent({ item }: MealProps) {
  const parsedItem: RandomMeal[] = [item];
  const { state } = useLocation();
  const { prevPage } = state;

  const IngredientsAndMeasuresDATA = Object.keys(item).reduce(
    (acc: { ingredient: string | null; text: string | null }[], it: string) => {
      if (it.includes("strMeasure")) {
        if (item[it] && item[it] !== " ") {
          let indexItemName = it.split("strMeasure")[1];

          const a: { ingredient: string | null; text: string | null } = {
            ingredient: item[`strIngredient${indexItemName}`],
            text: item[it] + " " + item[`strIngredient${indexItemName}`],
          };

          acc.push(a);
        }
      }
      return acc;
    },
    []
  );

  return (
    <>
      <ul id="list-data-meal">
        <li>
          <span>
            <FontAwesomeIcon icon={faMap} fontSize={32} />
            {item?.strArea}
          </span>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faUtensils} fontSize={32} />
            {item?.strCategory}
          </span>
        </li>
        <li>
          <span>
            <FontAwesomeIcon icon={faWineGlass} fontSize={32} />
            {item?.strDrinkAlternate || "No results"}
          </span>
        </li>
      </ul>

      <BackButton prevPage={prevPage} />

      <h2>{item.strMeal}</h2>
      {parsedItem.map((i) => {
        return (
          <Fragment key={i?.idMeal}>
            <section id="section-meal">
              <article>
                <figure className="image push">
                  <img
                    src={i?.strMealThumb ? i?.strMealThumb : undefined}
                    alt={i?.strMeal ? i?.strMeal : undefined}
                  />
                  <figcaption>{i?.strMeal}</figcaption>
                </figure>
                {IngredientsAndMeasuresDATA.map((i) => (
                  <div
                    key={i.text}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${
                        i?.ingredient ? i?.ingredient : undefined
                      }.png`}
                      alt={i?.ingredient ? i?.ingredient : undefined}
                      style={{ width: "100%", height: "auto", display: "flex" }}
                    />
                    <p style={{ textAlign: "center" }}>{i.text}</p>
                  </div>
                ))}
              </article>
            </section>
            <h2>Method for cook meal</h2>
            <div
              style={{
                width: "75%",
                margin: "40px auto",
                textIndent: "20px",
                lineHeight: 2,
                textAlign: "justify",
              }}
            >
              <p>{i?.strInstructions}</p>
            </div>
            <div id="banner-container">
              {i?.strSource && (
                <div className="action-box">
                  <h5>Know more of this meal...</h5>
                  <a
                    className="btn btn1"
                    href={i?.strSource}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    More info
                  </a>
                </div>
              )}
              {i?.strYoutube && (
                <div className="action-box" id="action-youtube">
                  <h5>View video of this meal...</h5>
                  <a
                    className="btn btn1"
                    href={i?.strYoutube}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{
                        width: "60px",
                        height: "auto",
                        display: "flex",
                        marginRight: "20px",
                      }}
                    />
                    View in Youtube
                  </a>
                </div>
              )}
            </div>
          </Fragment>
        );
      })}
    </>
  );
}
