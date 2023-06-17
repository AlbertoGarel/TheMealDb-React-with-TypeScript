import { useContext } from "react";
import { AppCont } from "../../App";
import "./Home.scss";
import Categories from "../../components/categories/Categories";

export default function Home() {
  const { breakpoint, deviceType, full_categories } = useContext(AppCont);
  const { categories, load, error } = full_categories;
  return (
    <div id="home">
      <Categories categories={categories} load={load} error={error} />
    </div>
  );
}
