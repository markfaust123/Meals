import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../../models/category";

const renderCategoryItem = (item: Category) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData.item)}
    />
  );
};

export default CategoriesScreen;
