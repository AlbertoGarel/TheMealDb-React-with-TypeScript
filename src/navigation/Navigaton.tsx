import { useEffect, useContext } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AppCont } from "../App";
import Home from "../pages/Home";
import Meal from "../pages/meal";
import Page404 from "../pages/page404";
import useCustomlocation from "../hooks/useCustomLocation";
import Search from "../pages/search";
import Category from "../pages/category";

interface NavigationProps {
  getVisibilityOfHeaderAndFooter: any;
  getNameCategorySelected: (param: string) => void;
}

export default function Navigation({
  getVisibilityOfHeaderAndFooter,
  getNameCategorySelected,
}: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const hiddenHeadAndfooter = useCustomlocation();
  const { multisearch } = useContext(AppCont);

  useEffect(() => {
    let values = Object.values(multisearch);
    const isEmpty: boolean = values.every((value) => value === null);

    // prevent re-render when is not empty value.
    if (isEmpty && location.pathname === "/search") {
      navigate("/");
    }
  }, [multisearch]);

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => {
    getVisibilityOfHeaderAndFooter(hiddenHeadAndfooter);
  }, [hiddenHeadAndfooter]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home getNameCategorySelected={getNameCategorySelected} />}
      />
      <Route path="/meal" element={<Meal />} />
      <Route path="/meal/:mealId" element={<Meal />} />
      <Route path="/search" element={<Search />} />
      <Route path="/category" element={<Category />} />
      <Route path="/category/:mealCat" element={<Category />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
