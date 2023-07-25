import { useState, useEffect, useCallback } from "react";
import { Category, Request, RandomMeal } from "../types/request.d";

enum TypeCall {
  categories = 1,
  meals,
}
export const useRequest = (
  req: string,
  type: number
): [Category[] | RandomMeal[] | [], boolean, string] => {
  const [request, getRequest] = useState<Category[] | RandomMeal[] | []>([]);
  const [error, setError] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const forRequest = useCallback(async () => {
    try {
      setLoad(true);
      const result = await fetch(req);
      const json: Request = await result.json();
      const keyOfResponse: string = TypeCall[type];
      getRequest(json[keyOfResponse]);
    } catch (err) {
      setError("No results for this search.");
      console.log("err", err);
    } finally {
      setLoad(false);
    }
  }, [req, type]);

  useEffect(() => {
    forRequest();
  }, [forRequest]);

  return [request, load, error];
};

export default useRequest;
