import Button from "@/components/Button";
import DropDown from "@/components/Dropdown";
import Header from "@/components/Header";
import RadioButton from "@/components/RadioButton";
import Space from "@/components/Space";
import TextField from "@/components/TextInput";
import Category from "@/constants/Category";
import { addTransaction } from "@/store/reducers";
import { setCurrency } from "@/utils/helper";
import moment from "moment";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-native-uuid";

const ExpenseType = ["Pemasukan", "Pengeluaran"];

export default function TransactionFormScreen() {
  const dispatch = useDispatch();

  const [type, setType] = useState(ExpenseType[0]);
  const [category, setCategory] = useState(undefined);
  const [categoryTmp, setCategoryTmp] = useState(undefined);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleCancelCategory = () => {
    setCategoryTmp(category);
  };

  const handleSaveCategory = () => {
    setCategory(categoryTmp);
  };

  const handleSave = () => {
    const params = {
      id: uuid.v4(),
      type,
      category,
      amount,
      date: moment(new Date()).unix(),
      description,
    };

    dispatch(addTransaction(params));
  };

  const renderCategory = ({ item }) => (
    <RadioButton
      label={item}
      active={item === categoryTmp}
      onChange={() => setCategoryTmp(item)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Add Transaction" />
      <View style={styles.form}>
        <View>
          <Text>Tipe</Text>
          <Space />
          <View style={styles.row}>
            <RadioButton
              label={ExpenseType[0]}
              active={type === ExpenseType[0]}
              onChange={() => setType(ExpenseType[0])}
            />
            <RadioButton
              label={ExpenseType[1]}
              active={type === ExpenseType[1]}
              onChange={() => setType(ExpenseType[1])}
            />
          </View>
        </View>
        <Space size={16} />
        <DropDown
          label="Kategori"
          value={category}
          onCancel={handleCancelCategory}
          onChange={handleSaveCategory}
          disabledButton={categoryTmp === undefined}
        >
          <FlatList
            data={Category}
            renderItem={renderCategory}
            ItemSeparatorComponent={() => <Space />}
          />
        </DropDown>
        <Space size={16} />
        <TextField
          label="Jumlah"
          prefix="Rp"
          keyboardType="numeric"
          placeholder={`Masukkan Jumlah ${type}`}
          value={setCurrency(amount)}
          onChangeText={setAmount}
        />
        <Space size={16} />
        <TextField
          label="Deskripsi"
          placeholder={"Masukkan Deskripsi"}
          optional
          area
          value={description}
          onChangeText={setDescription}
        />
      </View>
      <View style={styles.button}>
        <Button label={"Simpan"} onPress={handleSave} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    padding: 16,
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
  button: {
    padding: 16,
    flex: 0,
  },
});
