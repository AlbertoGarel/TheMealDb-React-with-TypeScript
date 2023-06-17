//for custom hokks response.
// CATEGORIES
export type FullCategories =  Category[]
// RANDOMMEALS
export type RandomMeals = RandomMeal;
// for API
export interface Request {
  [categories?: string]: Category[];
  [meals?: string]: RandomMeal[];
}
export interface RequestCategory {
  categories?: Category[];
  meals?: RandomMeal;
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
  [key: string]: null | string;
}
