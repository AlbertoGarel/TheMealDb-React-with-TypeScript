import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Meal from "../pages/meal";
import Page404 from "../pages/page404";
import useCustomlocation from "../hooks/useCustomLocation";

export default function Navigation({ getVisibilityOfHeaderAndFooter }: any) {
  const hiddenHeadAndfooter = useCustomlocation();
  
  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => {
    getVisibilityOfHeaderAndFooter(hiddenHeadAndfooter);
  }, [hiddenHeadAndfooter]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal" element={<Meal />} />
      <Route path="/meal/:mealId" element={<Meal />} />

      <Route path="*" element={<Page404 />} />
      {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}
