import {
  StyleSheet,
  FlatList,
  View,
} from "react-native";
import { CATEGORIES, MEALS } from "../../data/dummy-data";
import Meal from "../../models/meal";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const renderMealItem = (item: Meal, navigation: any) => {
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    duration: item.duration,
    complexity: item.complexity,
    affordability: item.affordability,
  };

  return <MealItem {...mealItemProps} />;
};

const MealsOverviewScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) !== -1
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )!.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item, navigation)}
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
