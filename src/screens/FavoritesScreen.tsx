import { FavoritesContext } from "../store/context/favorites-context";
import { useContext } from "react";
import Meal from "../../models/meal";
import { MEALS } from "../../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals: Meal[] = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return (
    <>
      {favoriteMeals && favoriteMeals.length ? (
        <MealsList meals={favoriteMeals} />
      ) : (
        <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default FavoritesScreen;
