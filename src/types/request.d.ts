//for custom hokks response.
// for API
export interface Request {
  [categories: string]: Category[];
  [meals: string]: RandomMeal[];
}
// categories
export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}
// rANDOMmEAL
export interface RandomMeal {
 [key: string]: null | string 
}
