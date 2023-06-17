import { Category } from "../../types/request";
import Spinner from "../microcomponents/Spinner";
import "./Categories.scss";

interface CategoriesProps {
  categories: Category[] | undefined;
  load: boolean;
  error: string;
}

export default function Categories({
  categories,
  load,
  error,
}: CategoriesProps) {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="content-cards">
        {categories?.map((item) => {
          return (
            <div key={item.idCategory} className="card-categories popover__wrapper">
              <figure className="image push">
                <img src={item.strCategoryThumb} alt={item.strCategory} />
                <figcaption onClick={() => alert(item.idCategory)}>
                  Go to {item.strCategory}
                </figcaption>
              </figure>
              <h3>{item.strCategory}</h3>
              <p className="popover__title" id="description">
                {item.strCategoryDescription}
              </p>
              <div className="popover__content">
                <p className="popover__message">
                  {item.strCategoryDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
