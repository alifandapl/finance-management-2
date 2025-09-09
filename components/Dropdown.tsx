import Colors from "@/constants/Colors";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Space from "./Space";
import BottomSheet from "./BottomSheet";
import { useState } from "react";
import RadioButton from "./RadioButton";

export default function DropDown({
  label,
  prefix,
  value,
  placeholder = "Pilih...",
  children,
  disabledButton,
  onChange,
  onCancel,
}) {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);

  const closeModal = () => setVisible(false);

  const handleCancel = () => {
    onCancel();
    closeModal();
  };

  const handleSave = () => {
    onChange();
    closeModal();
  };

  return (
    <View>
      <Text>{label}</Text>
      <Space />
      <TouchableOpacity style={styles.inputWrapper} onPress={openModal}>
        {prefix && (
          <>
            <Text style={styles.prefix}>{prefix}</Text>
            <View style={styles.divider} />
          </>
        )}
        <Text style={[styles.value, value === undefined && styles.placeholder]}>
          {value || placeholder}
        </Text>
      </TouchableOpacity>
      <BottomSheet
        visible={visible}
        onRequestClose={closeModal}
        title={`Pilih ${label}`}
        primaryButton={{
          label: "Simpan",
          disabled: disabledButton,
          onPress: handleSave,
        }}
        secondaryButton={{ label: "Batal", onPress: handleCancel }}
      >
        {children}
      </BottomSheet>
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
  placeholder: { color: Colors.secondary },
  value: {
    padding: 12,
    flex: 1,
  },
  divider: {
    backgroundColor: Colors.primary,
    width: 1,
    marginVertical: 12,
  },
});
