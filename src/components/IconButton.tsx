import { GestureResponderEvent, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({
  icon,
  color,
  onPress,
}: {
  icon: any;
  color: string;
  onPress: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})

export default IconButton;
