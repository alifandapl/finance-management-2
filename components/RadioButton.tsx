import Colors from "@/constants/Colors";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Space from "./Space";

export default function RadioButton({ active, label, onChange }) {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onChange}>
      <View style={styles.radioWrapper}>
        {active && <View style={styles.radio} />}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const BORDER_SIZE = 20;
const DOT_SIZE = 12;

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row", flex: 1 },
  radioWrapper: {
    height: BORDER_SIZE,
    width: BORDER_SIZE,
    borderRadius: BORDER_SIZE,
    borderWidth: 1,
    borderColor: Colors.primary,
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: Colors.primary,
  },
});
