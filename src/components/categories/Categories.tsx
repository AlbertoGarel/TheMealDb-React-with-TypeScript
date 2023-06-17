<<<<<<< HEAD
import { Category } from "../../types/request";
=======
import { Category, RandomMeal, FullCategories } from "../../types/request";
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
import Spinner from "../microcomponents/Spinner";
import "./Categories.scss";

interface CategoriesProps {
<<<<<<< HEAD
  categories: Category[] | undefined;
=======
  categories: FullCategories | RandomMeal;
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
  load: boolean;
  error: string;
}

export default function Categories({
  categories,
  load,
  error,
}: CategoriesProps) {
<<<<<<< HEAD
=======

  if(error.length || categories === undefined){

  }
  
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="content-cards">
<<<<<<< HEAD
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
=======
        {categories?.map((item: Category) => {
          return (
            <div key={item?.idCategory} className="card-categories popover__wrapper">
              <figure className="image push">
                <img src={item?.strCategoryThumb} alt={item?.strCategory} />
                <figcaption onClick={() => alert(item.idCategory)}>
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
>>>>>>> f849b6981dc41ce65d4493d47f32248404396edb
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
