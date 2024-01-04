import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";

const MealsOverviewScreen = ({navigation, route}: {navigation: any, route: any}) => {

    const catId = route.params.categoryId;

    return (
        <View style={styles.container}>
            <Text>Meal's Overview Screen - {catId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen;