import { Text, View } from "react-native";

const MealItem = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
