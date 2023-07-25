import { Category, RandomMeal } from "../../types/request";
import ErrorComponent from "../errorComponent/ErrorComponent";
import Spinner from "../microcomponents/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import "./Categories.scss";

interface CategoriesProps {
  categories: Category[] | RandomMeal[];
  load: boolean;
  error: string;
  getNameCategorySelected: (param: string) => void;
}

export default function Categories({
  categories,
  load,
  error,
  getNameCategorySelected,
}: CategoriesProps) {
  const navigate = useNavigate();

  const getCategory = (idCategory: string | null) => {
    if (typeof idCategory === "string") {
      getNameCategorySelected(idCategory);
      navigate("/category/");
    }
  };

  if (error.length) {
    return <ErrorComponent error={error} site={'"Categories"'} />;
  }

  if (load) {
    return <Spinner />;
  }

  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="content-cards">
        {categories.map((item) => {
          return (
            <div
              key={item?.idCategory}
              className="card-categories popover__wrapper"
            >
              <figure className="image push">
                <img
                  src={
                    item?.strCategoryThumb != null
                      ? item?.strCategoryThumb
                      : undefined
                  }
                  alt={
                    item?.strCategory !== null ? item?.strCategory : undefined
                  }
                />
                <figcaption onClick={() => getCategory(item.strCategory)}>
                  Go to {item?.strCategory}
                </figcaption>
              </figure>
              <h3>{item?.strCategory}</h3>
              <p className="popover__title" id="description">
                {item?.strCategoryDescription}
              </p>
              <div className="popover__content">
                <p className="popover__message">
                  {item?.strCategoryDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
