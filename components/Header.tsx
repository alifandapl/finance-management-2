import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: Colors.primary,
  },
  title: {
    color: "white",
    textAlign: "center",
  },
});
