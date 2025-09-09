import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({
  label,
  onPress,
  variant = "solid",
  disabled,
  style,
}) {
  const backgroundColor = disabled
    ? Colors.primaryLight
    : variant === "outline"
    ? "white"
    : Colors.primary;
  const color = disabled
    ? Colors.secondary
    : variant === "outline"
    ? Colors.primary
    : "white";
  const borderColor = disabled ? Colors.primaryLight : Colors.primary;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor, borderColor }, style]}
      disabled={disabled}
    >
      <Text style={{ color }}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    borderWidth: 1,
  },
});
