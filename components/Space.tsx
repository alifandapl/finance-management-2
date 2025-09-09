import { View } from "react-native";

export default function Space({ size = 8 }) {
  return <View style={{ height: size, widht: size }} />;
}
