import Header from "@/components/Header";
import Colors from "@/constants/Colors";
import Menu from "@/constants/Menu";
import { useRouter } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuContainer}
      onPress={() => router.navigate(item.nav)}
    >
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.flex}>
      <Header title={"Home"} />
      <FlatList
        data={Menu}
        renderItem={renderItem}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.space} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    padding: 16,
  },
  menuContainer: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  title: { color: "white" },
  space: { height: 8 },
});
