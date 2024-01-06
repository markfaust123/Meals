import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import Meal from "../../models/meal";
import { MEALS } from "../../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals: Meal[] = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return (
    <MealsList meals={favoriteMeals} />
  );
};

export default FavoritesScreen;
