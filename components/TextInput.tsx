import Colors from "@/constants/Colors";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Space from "./Space";

export default function TextField({
  label,
  prefix,
  keyboardType,
  placeholder,
  optional,
  area,
  value,
  onChangeText,
}) {
  return (
    <View>
      <View style={styles.row}>
        <Text>{label}</Text>
        {optional && <Text style={styles.optional}>(Optional)</Text>}
      </View>
      <Space />
      <View style={styles.inputWrapper}>
        {prefix && (
          <>
            <Text style={styles.prefix}>{prefix}</Text>
            <View style={styles.divider} />
          </>
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, area && { height: 100, verticalAlign: "top" }]}
          keyboardType={keyboardType}
          placeholder={placeholder}
          numberOfLines={area ? 5 : 1}
          multiline
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.primary,
    flexDirection: "row",
    backgroundColor: "white",
  },
  prefix: {
    padding: 12,
  },
  input: {
    padding: 12,
    flex: 1,
  },
  divider: {
    backgroundColor: Colors.primary,
    width: 1,
    marginVertical: 12,
  },
  row: { flexDirection: "row" },
  optional: { color: Colors.secondary, marginLeft: 4 },
});
