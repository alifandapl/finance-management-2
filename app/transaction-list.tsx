import Header from "@/components/Header";
import Space from "@/components/Space";
import Colors from "@/constants/Colors";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function TransactionListScreen() {
  const list = useSelector((state) => state.transaction.list);

  const renderItem = ({ item }) => (
    <View
      style={{
        padding: 12,
        backgroundColor: Colors.primaryLight,
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: 4,
      }}
    >
      <Text>{item.type || "-"}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>Amount: </Text>
        <Text>{item.amount || "-"}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView>
      <Header title={"List Transaksi"} />
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Space />}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
}
