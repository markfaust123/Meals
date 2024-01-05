import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealDetailScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealId,
    });
  }, [mealId, navigation]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <>
      <View>
        <Image source={{ uri: selectedMeal?.imageUrl }} style={styles.image} />
        <Text>{selectedMeal?.title}</Text>
        <MealDetails
          duration={selectedMeal!.duration}
          complexity={selectedMeal!.complexity}
          affordability={selectedMeal!.affordability}
        />
        <Text>Ingredients</Text>
        {selectedMeal!.ingredients.map((ingredient) => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Text>Steps</Text>
        {selectedMeal!.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
});

export default MealDetailScreen;
