import { Pressable, Text, View } from "react-native";

const CategoryGridTile = ({ title, color }: { title: string, color: string }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;
