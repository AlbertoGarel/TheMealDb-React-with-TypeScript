import { useEffect } from "react";
import MealComponent from "../../components/mealComponent/MealComponent";
import { useLocation, Navigate } from "react-router-dom";
export default function Meal() {
  if (true) {
    <Navigate to={"*"} />;
  }

  useEffect(() => {
    // scrooll to top when load component.
    window.scrollTo(0, 0);
  }, []);

  const navigationProps = useLocation();

  return (
    <>
      <MealComponent item={navigationProps.state?.item} />
    </>
  );
}
