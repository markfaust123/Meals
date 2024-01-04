import { StyleSheet, FlatList, View, Text } from "react-native";
import { MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import MealItem from "../components/MealItem";

const renderMealItem = (item: Meal) => {
  const mealItemProps = {
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return <MealItem {...mealItemProps} />;
};

const MealsOverviewScreen = ({ route }: { navigation: any; route: any }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) !== -1
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
