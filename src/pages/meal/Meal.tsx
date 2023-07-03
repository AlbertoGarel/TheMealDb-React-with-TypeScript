import MealComponent from "../../components/mealComponent/MealComponent";
import { useLocation, Navigate } from "react-router-dom";
export default function Meal() {
  if (true) {
    <Navigate to={"*"} />;
  }
  const navigationProps = useLocation();

  if (!navigationProps.state) {
    // CREATE COMPONENT WITH ALL MEALS BY INITIAL LETTER.
    return (
      <div>
        <h3>No se Han encontrado resultados</h3>
      </div>
    )
  }

  return (
    <div>
      <MealComponent item={navigationProps.state?.item} />
    </div>
  );
}
