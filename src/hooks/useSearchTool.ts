import { useState, useEffect } from "react";
import {
  BYFIRSTLETTER,
  BYNAME,
  BYID,
  BYINGREDIENT,
  BYCATEGORIES,
  BYAREA,
} from "../const/const";
import { RandomMeal } from "../types/request.d";

interface MultiSearch {
  byfirstletter: null | RandomMeal[];
  byid: null | RandomMeal[];
  byname: null | RandomMeal[];
  byingredient: null | RandomMeal[];
  byarea: null | RandomMeal[];
  bycategory: null | RandomMeal[];
}

let response: MultiSearch = {
  byfirstletter: null,
  byid: null,
  byname: null,
  byingredient: null,
  byarea: null,
  bycategory: null,
};

export default function useSearchTool(param: string) {
  const [resultmultisearch, getMultiSearch] = useState<MultiSearch>(response);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function multisearch(param: string) {
      try {
        if (param === " " || param === "") {
          return;
        }
        setSpinner(true);
        if (param.length === 1) {
          const byfirstletter = await fetch(BYFIRSTLETTER + param);
          const byfirstletter_json = await byfirstletter.json();
          response = {
            byfirstletter: byfirstletter_json.meals,
            byid: null,
            byname: null,
            byingredient: null,
            byarea: null,
            bycategory: null,
          };
        } else {
          const byid = await fetch(BYID + param);
          const byid_json = await byid.json();
          const byname = await fetch(BYNAME + param);
          const byname_json = await byname.json();
          const byingredient = await fetch(BYINGREDIENT + param);
          const byingredient_json = await byingredient.json();
          const byarea = await fetch(BYAREA + param);
          const byarea_json = await byarea.json();
          const bycategory = await fetch(BYCATEGORIES + param);
          const bycategory_json = await bycategory.json();

          response = {
            byfirstletter: null,
            byid: byid_json?.meals,
            byname: byname_json?.meals,
            byingredient: byingredient_json?.meals,
            byarea: byarea_json?.meals,
            bycategory: bycategory_json.meals,
          };
        }
        setSpinner(false);
        getMultiSearch({ ...response });
      } catch (err) {
        if (process.env.NODE_ENV === "development") {
          console.log("error en useSearchTool", err);
        }
        setError("Connection error");
      }
    }

    multisearch(param);
  }, [param]);

  return { resultmultisearch, spinner, error };
}
