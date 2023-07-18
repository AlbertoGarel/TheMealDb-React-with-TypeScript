import { useNavigate } from "react-router-dom";
import WrapListMeals from "../../components/wrapListmeals";
import MealsElements from "../../components/mealsElements";
import BackButton from "../../components/microcomponents/backButton/BackButton";
import useSearchTool from "../../hooks/useSearchTool";
import { useContext } from "react";
import { AppCont } from "../../App";
import ErrorComponent from "../../components/errorComponent";
import LoaderdescriptionBox from "../../components/loaderDescriptionBox/LoaderDescriptionBox";

export default function Category() {
  const navigate = useNavigate();
  const { categorySelected } = useContext(AppCont);
  const {
    resultmultisearch: { bycategory },
    spinner: loader,
    error,
  } = useSearchTool(categorySelected);

  if (!categorySelected) {
    return navigate("/");
  }

  if (error.length) {
    return (
      <ErrorComponent error={error} site={`${categorySelected} "Category"`} />
    );
  }

  return (
    <div style={{ flex: 1 }}>
      <h3>Esto es category</h3>
      <BackButton prevPage={"/"} />
      {loader ? (
        <LoaderdescriptionBox descriptionText={categorySelected} />
      ) : (
        <WrapListMeals title={categorySelected}>
          {bycategory && <MealsElements arrElements={bycategory} />}
        </WrapListMeals>
      )}
    </div>
  );
}
