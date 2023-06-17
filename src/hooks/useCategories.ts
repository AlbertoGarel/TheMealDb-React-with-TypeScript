import { useState, useEffect } from "react";
import { CATEGORIES } from "../const/const";
import { Category, RequestCategory } from "../types/request.d";

export default function useCategories() {
  const [categories, getCategories] = useState<Category[]>();
  const [error, setError] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);
  console.log("json", CATEGORIES);
  const request = async () => {
    try {
      setLoad(true);
      const result = await fetch(CATEGORIES);
      const json: RequestCategory = await result.json();
      getCategories(json.categories);
    } catch (err) {
      setError("No results for this search.");
      console.log("err", err);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    request();
  }, []);

  return { categories, load, error };
}
