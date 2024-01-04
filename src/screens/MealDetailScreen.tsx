import { useLayoutEffect } from "react";
import { Text } from "react-native";

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
            title: mealId
        });
    }, [mealId, navigation])

  return (
    <>
      <Text>This is the Meal Detail Screen!</Text>
    </>
  );
};

export default MealDetailScreen;
